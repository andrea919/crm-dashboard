import React from "react";
import { Menu, Plus } from "lucide-react";
import { StatCard } from "./stat-card";
import { TransactionList } from "./transaction-list";
import { CampaignWidget } from "./campaign-widget";
import { ActiveCardsChart } from "./ActiveCardsChart";
import { GenderChart } from "./GenderChart";
import { AgeChart } from "./AgeChart";

const statsData = [
  { title: "Clienti Totali", value: "2,543", change: "+12.5%", iconName: "Users", color: "text-blue-600 bg-blue-50" },
  { title: "Punti Erogati", value: "145k", change: "+8.2%", iconName: "Activity", color: "text-purple-600 bg-purple-50" },
  { title: "Fatturato Loyalty", value: "€ 12,450", change: "+23.1%", iconName: "CreditCard", color: "text-emerald-600 bg-emerald-50" },
  { title: "Churn Rate", value: "2.4%", change: "-0.5%", iconName: "TrendingUp", color: "text-orange-600 bg-orange-50", isNegative: false },
];

const transactionsData = [
  { id: "1", customerName: "Mario Rossi", store: "Milano Centro", amount: 45.00, points: 45, initials: "MR" },
  { id: "2", customerName: "Luigi Verdi", store: "Roma Termini", amount: 120.50, points: 120, initials: "LV" },
  { id: "3", customerName: "Anna Bianchi", store: "Online Store", amount: 15.00, points: 15, initials: "AB" },
  { id: "4", customerName: "Giulia Neri", store: "Napoli", amount: 200.00, points: 200, initials: "GN" },
];

const campaignsData = [
  { id: "1", name: "Passaparola 2026", status: "Active", progress: 78, color: "bg-blue-600" },
  { id: "2", name: "Doppi Punti Weekend", status: "Ending Soon", progress: 92, color: "bg-purple-600" },
];

export default function Dashboard({ onMenuClick }) {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">

      <header className="flex items-center justify-between py-2 md:py-0">

        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 md:hidden shadow-sm"
          >
            <Menu size={24} />
          </button>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Dashboard
            </h1>
            <p className="text-slate-500 mt-1 hidden md:block">
              Panoramica delle performance in tempo reale.
            </p>
          </div>
        </div>

        <div>
          <button className="flex md:hidden bg-slate-900 text-white p-2.5 rounded-lg shadow-lg">
            <Plus size={24} />
          </button>

          <button className="hidden md:block bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-slate-200">
            + Nuova Promozione
          </button>
        </div>

      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        <div className="lg:col-span-2">
          <TransactionList transactions={transactionsData} />
        </div>

        <div className="lg:col-span-1">
          <CampaignWidget campaigns={campaignsData} />
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="lg:col-span-2">
          <ActiveCardsChart />
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