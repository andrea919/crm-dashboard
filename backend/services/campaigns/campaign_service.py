from core.database import get_db_connection

def fetch_campaigns_overview(company_id):
    conn = None
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        query = """
           SELECT  id, name, channel, status, stats_sent, stats_conversion_count, created_at
            FROM marketing_campaigns 
            WHERE company_id = %s 
            ORDER BY created_at DESC; 

        """
        cur.execute(query, (company_id,))
        rows = cur.fetchall()

        stats = []
        for row in rows:
            sent = row['stats_sent'] or 0
            conversions = row['stats_conversion_count'] or 0

            performance = 0
            if sent > 0:
                performance = round((float(conversions) / float(sent)) * 100, 1)
                performance = min(performance, 100.0)

            stats.append({
                'id': str(row['id']),
                'name': row['name'],
                'type': row['channel'].upper() if row['channel'] else "UNKNOWN",
                'status': row['status'], 
                'recipients': sent,
                'performance': performance
            })

        return stats

    except Exception as e:
        print(f"Error fetching campaign names: {e}")
        return []
    finally:
        if conn:
            conn.close()
