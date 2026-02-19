from core.database import get_db_connection
from datetime import datetime

def fetch_company(company_id):
    conn = None
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        # to replace with ORM call in the future, but for now we keep it simple with raw SQL
        query = """
            SELECT name FROM companies WHERE id = %s
        """
        cur.execute(query, (company_id,))
        row = cur.fetchone() 

        if row:
            return {"name": row['name']}
        else:
            return {"name": "Azienda non trovata"}

    except Exception as e:
        print(f"❌ Errore nel recupero azienda: {e}")
        return {"name": "Errore"}
    
    finally:
        if conn: conn.close()