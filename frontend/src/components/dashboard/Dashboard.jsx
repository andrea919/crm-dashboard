import React, { useState, useEffect } from "react";
import { PageHeader } from "../layout/PageHeader";
import { StatCard } from "./stat-card";
import { TopStoresWidget } from "./TopStoresWidget";
import { CampaignWidget } from "./campaign-widget";
import { ActiveCardsChart } from "./ActiveCardsChart";
import { GenderChart } from "./GenderChart";
import { AgeChart } from "./AgeChart";
import { fetchDashboardData } from "../../services/dashboardService";
import { Loader2 } from "lucide-react";


export default function Dashboard() {

  const [stats, setStats] = useState([]);
  const [topStores, setTopStores] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [chartsData, setChartsData] = useState({ customerChart: [] });
  const [companyName, setCompanyName] = useState("La tua azienda");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchDashboardData();

        setStats(data.stats || []);
        setTopStores(data.topStores || []);
        setCampaigns(data.campaigns || []);
        setCompanyName(data.companyName || "La tua azienda");
        setChartsData({ customerChart: data.customerChart || [] });

      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleNewPromotion = () => {
    // Logica per creare una nuova promozione
    console.log("Creazione nuova promozione...");
  };

  if (isLoading) {
    return (
      <div className="flex h-[80vh] w-full items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <Loader2 className="animate-spin text-blue-600" size={40} />
          <p>Caricamento dati...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10 px-4 md:px-0">

      {/* HEADER STANDARD MODULARE */}
      <PageHeader
        title={`Dashboard - ${companyName}`}
        description="Panoramica delle performance in tempo reale."
        onActionClick={handleNewPromotion}
        actionLabel="Nuova Promozione"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        <div className="lg:col-span-2 h-96">
          <TopStoresWidget stores={topStores} />
        </div>

        <div className="lg:col-span-1">
          <CampaignWidget campaigns={campaigns} />
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
          <ActiveCardsChart data={chartsData.customerChart} />
        </div>

        <div>
          <GenderChart />
        </div>

        <div>
          <AgeChart />
        </div>
      </div>

    </div>
  );
}