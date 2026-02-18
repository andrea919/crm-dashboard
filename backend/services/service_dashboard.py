from core.database import get_db_connection

class DashboardService:
    def __init__(self, company_id: str):
        self.company_id = company_id

    def get_company_info(self) -> dict:
        """Retrieves basic company information."""
        conn = get_db_connection()
        if not conn:
            return {"name": "Unknown Company"}

        try:
            cur = conn.cursor()
            query = "SELECT name FROM companies WHERE id = %s"
            cur.execute(query, (self.company_id,))
            row = cur.fetchone()
            
            return {"name": row["name"]} if row else {"name": "Unknown Company"}
        except Exception as error:
            print(f"❌ Error fetching company info: {error}")
            return {"name": "Unknown Company"}
        finally:
            if conn:
                conn.close()

