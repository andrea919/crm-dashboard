import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './components/generali/Sidebar';
import Dashboard from './components/dashboard/Dashboard';

import Campaigns from './components/campagne/Campagne';
import Analisi from './components/analisi/Analisi';
import Automations from './components/automatismi/Automatismi';
import Settings from './components/impostazioni/Impostazioni';
import Team from './components/gestione/Gestione';
import Account from './components/account/Account';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen bg-slate-50 flex">

      <Sidebar isOpen={isOpen} onClose={toggleMenu} />

      <main className="flex-1 p-4 md:p-8 md:ml-64 transition-all duration-300">
        <Routes>
          {/* Home Dashboard */}
          <Route path="/" element={<Dashboard onMenuClick={toggleMenu} />} />

          {/* 2. AGGIUNGIAMO LA ROTTA PER LE CAMPAGNE */}
          {/* Deve corrispondere all'href della Sidebar (/campaigns) */}
          <Route path="*" element={<div>Pagina non trovata</div>} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path='/analyze' element={<Analisi />} />
          <Route path='/automations' element={<Automations />} />
          <Route path='/transactions' element={<Team />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/account' element={<Account />} />

        </Routes>
      </main>

    </div>
  )
}

export default App;