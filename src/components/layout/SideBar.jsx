import React from 'react';

const Sidebar = () => {
  return (
    <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
      {/* --- BRAND LOGO --- */}
      <div className="sidebar-brand">
        <a href="/" className="brand-link">
          <span className="brand-text fw-light">CRM Admin</span>
        </a>
      </div>

      {/* --- MENU LATERALE --- */}
      <div className="sidebar-wrapper">
        <nav className="mt-2">
          <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
            
            {/* Voce: Dashboard */}
            <li className="nav-item">
              <a href="/" className="nav-link active">
                <i className="nav-icon bi bi-speedometer"></i>
                <p>Dashboard</p>
              </a>
            </li>

            {/* Voce: Campagne */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-megaphone"></i>
                <p>Campagne</p>
              </a>
            </li>

            {/* Voce: Analisi */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-pie-chart"></i>
                <p>Analisi</p>
              </a>
            </li>

            {/* Voce: Automatismi */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-robot"></i>
                <p>Automatismi</p>
              </a>
            </li>

            {/* Voce: Modelli */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-files"></i>
                <p>Modelli</p>
              </a>
            </li>

            {/* Voce: Impostazioni */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-gear"></i>
                <p>Impostazioni</p>
              </a>
            </li>

            {/* Separatore */}
            <li className="nav-header">SUPPORTO</li>

            {/* Voce: Documentazione */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-book"></i>
                <p>Documentazione</p>
              </a>
            </li>

            {/* Voce: Esci */}
            <li className="nav-item mt-3">
              <a href="#" className="nav-link text-danger">
                <i className="nav-icon bi bi-box-arrow-left"></i>
                <p>Esci</p>
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;