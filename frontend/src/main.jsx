import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// 1. Stile base di AdminLTE v4 (include Bootstrap 5)
import 'admin-lte/dist/css/adminlte.min.css';
// 2. Icone (Bootstrap Icons come da tuo package.json)
import 'bootstrap-icons/font/bootstrap-icons.css';
// 3. (Opzionale) Se usi il JS di AdminLTE per i toggle della sidebar
import 'admin-lte/dist/js/adminlte.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
