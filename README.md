# CRM Dashboard - My Full-Stack Project

This is a personal project I'm building to handle customer data and marketing automation. I wanted to move away from a simple frontend-only app and build something real, so I set up a **Monorepo** with a dedicated Python backend and a React frontend.

## 🚀 What this does
The goal is to stop guessing and start using data. The dashboard tracks how customers are behaving and lets you set up marketing "automations" based on those insights.

* **Real-time Stats**: I've got widgets for sales, active cards, and store performance.
* **Marketing Campaigns**: A dedicated area to manage and track different marketing pushes.
* **Automation Engine**: This is the "smart" part—triggering actions (like adding cards) based on customer metrics.
* **Clean Architecture**: The backend is modular, so adding a new analytics script doesn't break everything else.



## 🛠 The Stack
* **Frontend**: React + Vite (for speed) + Tailwind CSS (for the UI).
* **Backend**: FastAPI. I chose it because it's fast, modern, and handles the API logic perfectly.
* **Testing**: Using Vitest to make sure my components don't break when I update the logic.
* **Environment**: Everything sensitive is handled via `.env` files. No hardcoded IDs in the repo.

## 🏗 How it's structured
I've split the project into two main folders:
1.  `/frontend`: All the React components and UI logic.
2.  `/backend`: The Python server, database connections, and all the retrieval scripts (check out the `/retrieve` folder to see how I'm pulling the dashboard data).



## ⚡️ Quick Start

**1. Clone it**
```bash
git clone [https://github.com/andrea919/crm-dashboard.git](https://github.com/andrea919/crm-dashboard.git)
cd crm-dashboard
