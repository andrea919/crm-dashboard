import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { SidebarProvider } from './components/layout/SideBarContext';
import DashboardLayout from './components/layout/MainLayout';
import CampaignsPage from './pages/Campaigns';

import DashboardPage from './pages/Dashboard';


function App() {

  return (
    <SidebarProvider>

      <DashboardLayout>

        <Routes>

          <Route path="/" element={<DashboardPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />


          <Route path="*" element={<div className="p-10 text-center">Page not found</div>} />
        </Routes>

      </DashboardLayout>

    </SidebarProvider>
  );
}

export default App;