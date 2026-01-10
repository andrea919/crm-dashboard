import React from 'react';
import MainLayout from './components/layout/MainLayout'; // Assicurati che il percorso sia giusto
import InfoBox from './components/dashboard/InfoBox';
import 'admin-lte/dist/css/adminlte.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// --- CONFIGURAZIONE GRAFICI (Chart.js) ---
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ArcElement
);

// Dati finti per replicare il grafico "Andamento Clienti" del PDF 
const lineOptions = {
  responsive: true,
  maintainAspectRatio: false, // Importante per adattarsi al box
  plugins: {
    legend: { position: 'top' },
  },
  elements: {
    line: { tension: 0.4 } // Rende la linea curva come nel PDF
  }
};

const lineData = {
  labels: ['Febbraio', 'Maggio', 'Agosto', 'Settembre', 'Novembre', 'Dicembre'],
  datasets: [
    {
      label: 'Card Attive',
      data: [300, 450, 420, 500, 480, 600],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      fill: true, // Crea l'effetto "Area" colorata sotto la linea
    },
  ],
};

// Dati per i grafici a torta (Sesso/Età) 
const donutData = {
  labels: ['Uomini', 'Donne', 'Non specificato'],
  datasets: [
    {
      data: [15, 75, 10],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      borderWidth: 1,
    },
  ],
};

function App() {
  return (
    <MainLayout>
      {/* HEADER */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Benvenuto!</h1>
      </div>

      {/* 1. RIGA INFO BOX (Colori dal PDF ) */}
      <div className="row">
        <div className="col-lg-3 col-6">
          <InfoBox title="Clienti" value="661" variant="primary" icon="bi-people-fill" />
        </div>
        <div className="col-lg-3 col-6">
          <InfoBox title="SMS Residui" value="450" variant="success" icon="bi-chat-dots" />
        </div>
        <div className="col-lg-3 col-6">
          <InfoBox title="Compleanni Oggi" value="1" variant="warning" icon="bi-gift" />
        </div>
        <div className="col-lg-3 col-6">
          <InfoBox title="Da Ricontattare" value="358" variant="danger" icon="bi-telephone-inbound" />
        </div>
      </div>

      {/* 2. GRAFICO GRANDE (Andamento Clienti) */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header border-0">
          <div className="d-flex justify-content-between">
            <h3 className="card-title">Andamento Clienti</h3>
            <a href="#" className="text-primary">Vedi report completo</a>
          </div>
        </div>
        <div className="card-body">
          <div style={{ height: '300px' }}>
             <Line options={lineOptions} data={lineData} />
          </div>
        </div>
      </div>

      {/* 3. GRAFICI A TORTA (Demografica) */}
      <div className="row">
        {/* Torta 1: Clienti per Sesso */}
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-header border-0">
              <h3 className="card-title">Clienti per Sesso</h3>
            </div>
            <div className="card-body">
              <div style={{ height: '250px', display: 'flex', justifyContent: 'center' }}>
                <Doughnut data={donutData} />
              </div>
            </div>
          </div>
        </div>

        {/* Torta 2: Fascia d'età */}
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-header border-0">
              <h3 className="card-title">Clienti per Fascia d'età</h3>
            </div>
            <div className="card-body">
              <div style={{ height: '250px', display: 'flex', justifyContent: 'center' }}>
                <Doughnut data={donutData} /> {/* Puoi creare un dataset diverso per l'età */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </MainLayout>
  );
}

export default App;