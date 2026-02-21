import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { SidebarProvider } from './components/layout/SideBarContext';
import DashboardLayout from './components/layout/MainLayout';
import CampaignsPage from './pages/Campaigns';
import DashboardPage from './pages/Dashboard';
import AnalyticsPage from './pages/Analytics';
import AutomationsView from './pages/Automations';
import TemplatesPage from './pages/Templates';
import TeamManagement from './pages/Management';
import Settings from './pages/Settings';
import Account from './pages/Account';

function App() {

  return (
    <SidebarProvider>

      <DashboardLayout>

        <Routes>

          <Route path="/" element={<DashboardPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/automations" element={<AutomationsView />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/management" element={<TeamManagement />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account" element={<Account />} />


          <Route path="*" element={<div className="p-10 text-center">Page not found</div>} />
        </Routes>

      </DashboardLayout>

    </SidebarProvider>
  );
}

export default App;