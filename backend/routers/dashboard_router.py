import os
from fastapi import APIRouter
from dotenv import load_dotenv

from services.dashboard.stats_service import fetch_stats
from services.dashboard.campaign_service import fetch_campaigns
from services.dashboard.top_stores_service import fetch_top_stores
from services.dashboard.company_service import fetch_company
from services.dashboard.customers_service import fetch_customer_chart

load_dotenv()
CURRENT_COMPANY_ID = os.environ.get("CURRENT_COMPANY_ID")

router = APIRouter()


@router.get("/api/company/info")
def get_company_info():
    return fetch_company(CURRENT_COMPANY_ID)

@router.get("/api/dashboard/stats")
def get_dashboard_stats():
    return fetch_stats(CURRENT_COMPANY_ID)

@router.get("/api/dashboard/campaigns")
def get_dashboard_campaigns():
    return fetch_campaigns(CURRENT_COMPANY_ID)

@router.get("/api/dashboard/topStores")
def get_dashboard_top_stores():
    return fetch_top_stores(CURRENT_COMPANY_ID)

@router.get("/api/dashboard/customerChart")
def get_dashboard_customers():
    return fetch_customer_chart(CURRENT_COMPANY_ID)