# test_connection.py
import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

print("⏳ Trying to connect to PostgreSQL database...")
print(f"Host: {os.getenv('DB_HOST')}")
print(f"User: {os.getenv('DB_USER')}")

try:
    conn = psycopg2.connect(
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT")
    )
    print("\n✅ SUCCESS! connection ok!")
    print("Il database does not answer, incorrect credentials.")
    conn.close()
except Exception as e:
    print("\n❌ CONNECTION ERROR:")
    print(e)