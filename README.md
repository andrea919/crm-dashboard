# CRM Automation Dashboard

A professional full-stack CRM solution designed to streamline customer management and automate marketing workflows. This project utilizes a **Monorepo** architecture to provide a seamless integration between a high-performance Python backend and a reactive React frontend.

## 🎯 Project Overview

The core objective of this dashboard is to transform raw customer data into actionable marketing insights. It allows businesses to track transactions, monitor customer health, and deploy automated marketing campaigns based on real-time metrics.

### Key Features
* **Dynamic Dashboard**: Real-time visualization of sales, active cards, and top-performing stores.
* **Campaign Management**: Tools to create, track, and analyze the performance of marketing initiatives.
* **Automation Engine**: Configurable logic to trigger actions based on customer behavior (e.g., "Add Card" or "Automation Card" components).
* **Secure Data Handling**: Multi-tenant architecture simulation using environment-based company identification.

[Image of a professional CRM dashboard user interface with data visualization charts and customer metrics]

## 🏗️ System Architecture

### Frontend (React Layer)
* **State Management**: Optimized data fetching and state synchronization across the dashboard.
* **Component-Driven Design**: Modular UI built with Tailwind CSS and Lucide React icons for high maintainability.
* **Testing Suite**: Unit testing implemented via **Vitest** to ensure component reliability.

### Backend (FastAPI Layer)
* **RESTful API**: High-speed endpoints for data retrieval and automation logic.
* **Modular Services**: Dedicated modules for dashboard analytics (`retrieveDashboard.py`), store performance (`retrieveTopStores.py`), and customer data.
* **Environment Security**: Strict separation of configuration and code using `python-dotenv`.

[Image of a REST API architecture diagram showing the flow of data between a React frontend and a FastAPI backend with a database]

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS, Lucide Icons, Vitest |
| **Backend** | Python 3.12+, FastAPI, Uvicorn, Dotenv |
| **DevOps** | Git Monorepo, GitHub, Environment Variables |

## 🚀 Getting Started

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/andrea919/crm-dashboard.git](https://github.com/andrea919/crm-dashboard.git)
   cd crm-dashboard
