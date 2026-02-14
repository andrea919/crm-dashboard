from db_connect import get_db_connection
from datetime import datetime

def fetch_campaigns(company_id):
    conn = None
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        # 1. gestisce maiuscole/minuscole e valori nulli
        query = """
            SELECT 
                id, 
                name, 
                status, 
                channel,
                created_at,
                COALESCE(stats_sent, 0) as sent, 
                COALESCE(stats_conversion_count, 0) as conversions
            FROM marketing_campaigns
            WHERE company_id = %s
            AND status ILIKE 'active' 
            ORDER BY created_at DESC
            LIMIT 5
        """
        cur.execute(query, (company_id,))
        rows = cur.fetchall()
        
        results = []
        for row in rows:
            # --- A. Gestione Canale & Colore ---
            # Se il canale è NULL, usiamo stringa vuota per evitare crash
            channel_str = (row['channel'] or "").lower()
            
            if "email" in channel_str: bg_color = "bg-blue-600"
            elif "sms" in channel_str: bg_color = "bg-purple-600"
            elif "whatsapp" in channel_str: bg_color = "bg-green-600"
            else : bg_color = "bg-slate-600" # Se canale sconosciuto, usiamo grigio scuro

            # --- B. Calcolo Progresso (Barra) ---
            # Calcoliamo solo se abbiamo inviato messaggi (evita divisione per zero)
            sent = row['sent']
            conversions = row['conversions']
            progress_val = 0
            
            if sent > 0:
                progress_val = int((conversions / sent) * 100)
                if progress_val > 100: progress_val = 100

            # --- C. Calcolo Scadenza (1 Anno standard) ---
            time_text = "In corso"
            time_color = "text-slate-500"
            
            if row['created_at']:
                # Rimuoviamo info fuso orario per calcolo semplice
                start_date = row['created_at'].replace(tzinfo=None)
                days_passed = (datetime.now() - start_date).days
                days_left = 365 - days_passed
                
                if days_left < 0:
                    time_text = "Scaduta"
                    time_color = "text-red-500"
                else:
                    time_text = f"Scade tra {days_left} gg"
                    # Se manca meno di un mese, coloriamo di giallo
                    if days_left <= 30:
                        time_color = "text-yellow-600"

            # --- D. Creazione Oggetto Finale ---
            results.append({
                "id": str(row['id']),
                "name": row['name'],
                "status": row['status'], # Mantiene il testo originale del DB
                "progress": progress_val,
                "color": bg_color,
                "timeLeft": time_text,
                "timeColor": time_color
            })
            
        return results

    except Exception as e:
        print(f"❌ Errore Backend Campagne: {e}")
        return [] # Ritorna lista vuota in caso di errore, così il frontend non crasha
    finally:
        if conn: conn.close()