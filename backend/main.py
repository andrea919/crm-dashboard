from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from retrieve.dashboard.retrieveDashboard import fetch_stats
from retrieve.dashboard.retrieveCampaign import fetch_campaigns
from retrieve.dashboard.retrieveTopStores import fetch_top_stores
from retrieve.dashboard.retrieveCompany import fetch_company
from retrieve.dashboard.retrieveCustomers import fetch_customer_chart


app = FastAPI()

# in futuro questo arriverà dal JWT del login, per ora lo metto fisso
CURRENT_COMPANY_ID = 'f11407b5-e88b-4aee-9f5e-ff5ab4b08e8b'

# Configurazione CORS (Per far parlare React con Python)
# Dopo inserisco indirizzi specifici di deploy al posto di "*"
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/company/info")
def get_company_info():
    return fetch_company(CURRENT_COMPANY_ID)

@app.get("/api/dashboard/stats")
def get_dashboard_stats():
    return fetch_stats(CURRENT_COMPANY_ID)

@app.get("/api/dashboard/campaigns")
def get_dashboard_campaigns():
    return fetch_campaigns(CURRENT_COMPANY_ID)

@app.get("/api/dashboard/topStores")
def get_dashboard_top_stores():
    return fetch_top_stores(CURRENT_COMPANY_ID)

@app.get("/api/dashboard/customerChart")
def get_dashboard_customers():
    return fetch_customer_chart(CURRENT_COMPANY_ID)