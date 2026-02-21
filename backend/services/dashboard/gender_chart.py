from core.database import get_db_connection

def fetch_gender_chart(company_id):

    conn = None
    try:
        conn = get_db_connection()
        if conn is None:return {"trend": []}

        cur = conn.cursor()

        query = """
            SELECT 
                COALESCE(gender, 'Unknown') AS gender,
                COUNT(*) AS count
            FROM customers
            WHERE company_id = %s
            GROUP BY gender;
        """

        cur.execute(query, (company_id,))

        rows = cur.fetchall()


        stats = []
        for row in rows:

            gender = row.get('gender')
            value = row.get('count')

            if gender is None or gender == 'NULL' or value == '':
                label = "Unknown"
            else:
                label = gender.capitalize()

            stats.append({
                "name": label,
                "value": value
            })

        cur.close()
        return stats

    except Exception as e:
        print(f"❌ Error: {e}")
        return []
    finally:
        if conn: conn.close()