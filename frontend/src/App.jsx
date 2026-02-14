import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { SidebarProvider } from './components/layout/SideBarContext';
import DashboardLayout from './components/layout/MainLayout';

import Dashboard from './components/dashboard/Dashboard';
import Campaigns from './components/campagne/Campagne';
import Analisi from './components/analisi/Analisi';
import Automations from './components/automatismi/Automatismi';
import Templates from './components/modelli/Modelli';
import Settings from './components/impostazioni/Impostazioni';
import Team from './components/gestione/Gestione';
import Account from './components/account/Account';

function App() {

  return (
    <SidebarProvider>

      <DashboardLayout>

        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path='/analyze' element={<Analisi />} />
          <Route path='/automations' element={<Automations />} />
          <Route path='/templates' element={<Templates />} />
          <Route path='/transactions' element={<Team />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/account' element={<Account />} />

          {/* Gestione 404 spostata in fondo per correttezza */}
          <Route path="*" element={<div className="p-10 text-center">Pagina non trovata</div>} />
        </Routes>

      </DashboardLayout>

    </SidebarProvider>
  );
}

export default App;