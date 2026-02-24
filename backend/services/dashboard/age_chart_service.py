from core.database import get_db_connection
from datetime import date 

def fetch_age_chart(company_id):

    conn = None
    try:
        conn = get_db_connection()
        if conn is None:return {"trend": []}
        
        cur = conn.cursor()

        query = """
            SELECT birth_date FROM customers WHERE company_id = %s AND birth_date IS NOT NULL;
        """

        cur.execute(query, (company_id,))
        rows = cur.fetchall()

        stats = []
        age_counts = {
            "0-19": 0,
            "20-29": 0,
            "30-39": 0,
            "40-49": 0,
            "50+": 0,
            "Unknown": 0
        }

        for row in rows:
            birth_date = row.get('birth_date')
            age = date.today().year - birth_date.year

            if (age < 20):
                age_counts["0-19"] += 1
            elif (age < 30):
                age_counts["20-29"] += 1
            elif (age < 40):
                age_counts["30-39"] += 1
            elif (age < 50):
                age_counts["40-49"] += 1
            elif (age >= 50):
                age_counts["50+"] += 1
            else:
                age_counts["Unknown"] += 1
        
        cur.close()
        
        for label, count in age_counts.items():
            if count > 0:
                stats.append({
                    "name": label,
                    "value": count
                })
        
        return stats
    
    except Exception as e:
        print(f"❌ Error: {e}")
        return []
    finally:
        if conn: conn.close()

