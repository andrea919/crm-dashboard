from core.database import get_db_connection
from datetime import datetime, timedelta

def fetch_customer_chart(company_id):
    conn = None
    try:
        conn = get_db_connection()
        if conn is None: return {"trend": []}
        
        cur = conn.cursor()

        # Calcoliamo data di inizio (6 mesi fa)
        start_date = datetime.now() - timedelta(days=180)

        # Query SEMPLIFICATA per evitare errori di Timezone/Tipi
        # Raggruppa per Anno-Mese (es: "2024-02")
        query = """
            SELECT 
                TO_CHAR(created_at, 'Mon') as month_name,
                COUNT(id) as total
            FROM customers
            WHERE company_id = %s 
            AND created_at >= %s
            GROUP BY 1, EXTRACT(YEAR FROM created_at), EXTRACT(MONTH FROM created_at)
            ORDER BY EXTRACT(YEAR FROM created_at), EXTRACT(MONTH FROM created_at)
        """
        
        cur.execute(query, (company_id, start_date))
        rows = cur.fetchall()
        
        trend_data = []
        
        print(f"--- DEBUG SQL OUTPUT ({len(rows)} righe) ---")
        
        for row in rows:
            # DEBUG: Vediamo esattamente cosa arriva
            print(f"Riga Grezza: {row}")

            # GESTIONE ROBUSTA:
            # Proviamo a leggere come Dizionario, se fallisce proviamo come Tupla (Indici)
            try:
                # Caso 1: RealDictCursor (Dizionario)
                m_name = row['month_name']
                count_val = row['total']
            except (TypeError, KeyError):
                # Caso 2: Cursore Standard (Tupla) -> [0] è month_name, [1] è total
                m_name = row[0]
                count_val = row[1]

            trend_data.append({
                "name": m_name,       # Es: "Feb"
                "active": int(count_val) # Forziamo a intero
            })

        print(f"--- DATI INVIATI AL FRONTEND: {trend_data} ---")
        
        return { "trend": trend_data }

    except Exception as e:
        print(f"❌ Errore Customer Chart: {e}")
        return {"trend": []}
    finally:
        if conn: conn.close()