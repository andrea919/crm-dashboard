from core.database import get_db_connection
from datetime import datetime

def fetch_top_stores(company_id):
    conn = None
    
    try:
        conn = get_db_connection()
        
        if conn is None:
            print("⚠️ Top Stores: Impossibile connettersi al Database.")
            return [] 

        cur = conn.cursor()

        query = """
            SELECT
                s.name, 
                COUNT(t.id) as trans_count, 
                COALESCE(SUM(t.amount), 0) as total_revenue
            FROM stores s
            LEFT JOIN transactions t ON s.id = t.store_id
            WHERE s.company_id = %s  
            GROUP BY s.id, s.name
            ORDER BY total_revenue DESC
            LIMIT 5
        """

        cur.execute(query, (company_id,))
        rows = cur.fetchall()

        results = []
        for row in rows:
            results.append({
                "name": row['name'],
                "count": row['trans_count'], 
                "revenue": float(row['total_revenue']) 
            })
            
        return results

    except Exception as e:
        print(f"❌ Errore Top Stores: {e}")
        return [] 
        if conn: conn.close()