# test_connection.py
import os
import psycopg2
from dotenv import load_dotenv

# Carica il file .env
load_dotenv()

print("⏳ Tentativo di connessione a Supabase in corso...")
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
    print("\n✅ SUCCESS! Connessione riuscita!")
    print("Il database risponde. Le credenziali sono corrette.")
    conn.close()
except Exception as e:
    print("\n❌ ERRORE DI CONNESSIONE:")
    print(e)