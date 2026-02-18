from core.database import get_db_connection
from datetime import datetime

def calculate_percentage_change(current, previous):
    """Funzione helper per calcolare la percentuale senza dividere per zero"""
    if previous == 0:
        return "+100%" if current > 0 else "0%"
    
    change = ((current - previous) / previous) * 100
    sign = "+" if change > 0 else ""
    return f"{sign}{change:.1f}%"

def fetch_stats(company_id):
    conn = None
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        # --- 1. Clienti Totali ---
        cur.execute("SELECT COUNT(id) as count FROM customers WHERE company_id = %s", (company_id,))
        current_customers = cur.fetchone()['count']
        try:
            cur.execute("""
                SELECT COUNT(id) as count FROM customers 
                WHERE created_at < DATE_TRUNC('month', CURRENT_DATE)
            """)
            prev_month_customers = cur.fetchone()['count']
        except:
            prev_month_customers = current_customers

        customer_growth = calculate_percentage_change(current_customers, prev_month_customers)

        # --- 2. FATTURATO (Soldi veri incassati) ---
        # Sostituiamo i punti con la colonna 'amount' (Euro)
        
        # A. Incasso Questo Mese
        cur.execute("""
            SELECT COALESCE(SUM(t.amount), 0) as total 
            FROM transactions t
            JOIN stores s ON t.store_id = s.id
            WHERE s.company_id = %s 
            AND t.created_at >= DATE_TRUNC('month', CURRENT_DATE)
            """, (company_id,))
            
        revenue_this_month = cur.fetchone()['total'] # Es: 1540.50

        # B. Incasso Mese Scorso
        cur.execute("""
            SELECT COALESCE(SUM(amount), 0) as total 
            FROM transactions 
            WHERE created_at >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
            AND created_at < DATE_TRUNC('month', CURRENT_DATE)
        """)
        revenue_last_month = cur.fetchone()['total']

        # Calcoliamo la crescita del fatturato
        revenue_growth = calculate_percentage_change(revenue_this_month, revenue_last_month)
        # --- 3. Compleanni Oggi ---
        cur.execute("""
            SELECT COUNT(id) as count FROM customers 
            WHERE EXTRACT(MONTH FROM birth_date) = EXTRACT(MONTH FROM CURRENT_DATE)
            AND EXTRACT(DAY FROM birth_date) = EXTRACT(DAY FROM CURRENT_DATE)
        """)
        birthdays_today = cur.fetchone()['count']

        bday_percentage = "0%"
        if current_customers > 0:
            bday_pct_val = (birthdays_today / current_customers) * 100
            # CORREZIONE QUI: Usiamo bday_pct_val, non churn_pct_val
            bday_percentage = f"{bday_pct_val:.1f}%"

        # --- 4. A Rischio (> 90 giorni) ---
        cur.execute("""
            SELECT COUNT(id) as count FROM customers 
            WHERE last_visit_at < NOW() - INTERVAL '90 days'
        """)
        churn_risk = cur.fetchone()['count']

        churn_percentage = "0%"
        if current_customers > 0:
            churn_pct_val = (churn_risk / current_customers) * 100
            churn_percentage = f"{churn_pct_val:.1f}%"

        # --- RETURN SOLO LISTA ---
        return [
            { 
                "title": "Clienti Totali", 
                "value": str(current_customers), 
                "change": f"{customer_growth}", 
                "subtext": "vs mese scorso",
                "iconName": "Users", 
                "color": "text-blue-600 bg-blue-50" 
            },
            { 
                "title": "Fatturato Mese", 
                "value": f"€ {revenue_this_month:,.2f}".replace(",", "X").replace(".", ",").replace("X", "."), # Formatta € 1.200,50
                "change": f"{revenue_growth}", 
                "subtext": "vs mese scorso",
                "iconName": "TrendingUp",
                "color": "text-green-600 bg-green-50" # Verde = Soldi
            },
            { 
                "title": "Compleanni Oggi", 
                "value": str(birthdays_today), 
                "change": bday_percentage,
                "subtext": "del totale",
                "iconName": "Gift",
                "color": "text-purple-600 bg-purple-50" 
            },
            { 
                "title": "Da Ricontattare", 
                "value": str(churn_risk), 
                "change": churn_percentage, 
                "subtext": "del totale",
                "iconName": "Activity", 
                "color": "text-orange-600 bg-orange-50", 
                "isNegative": True 
            }
        ]

    except Exception as e:
        print(f"❌ Errore Calcolo Stats: {e}")
        return [] # Restituisce lista vuota in caso di errore, NON oggetto
    
    finally:
        if conn:
            conn.close()