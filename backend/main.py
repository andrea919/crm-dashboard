from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import dashboard_router

app = FastAPI(title="CRM Dashboard API")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(dashboard_router.router)