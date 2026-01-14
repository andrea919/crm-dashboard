import React from 'react';
import Sidebar from '../layout/SideBar';

const MainLayout = ({ children }) => {
  return (
    // 'app-wrapper' è il contenitore principale richiesto da AdminLTE v4
    // 'layout-fixed' mantiene la sidebar ferma mentre scrolli la pagina
    <div className="app-wrapper layout-fixed sidebar-expand-lg bg-body-tertiary">
      
      {/* 1. La Sidebar Laterale (Il menu scuro) */}
      <Sidebar />

      {/* 2. Il Contenuto Principale (La parte bianca a destra) */}
      <main className="app-main">
        
        {/* Header dello spazio contenuti (opzionale, utile per titoli pagina) */}
        <div className="app-content-header">
           {/* Puoi lasciarlo vuoto o metterci un breadcrumb in futuro */}
        </div>
        
        {/* Qui viene iniettato il contenuto vero e proprio (Dashboard, Tabelle, ecc.) */}
        <div className="app-content">
          <div className="container-fluid">
            {children} 
          </div>
        </div>

      </main>

    </div>
  );
};

export default MainLayout;