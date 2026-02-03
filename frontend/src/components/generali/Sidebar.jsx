import React from "react";
import {
  LayoutDashboard,
  Megaphone,
  BarChart3, // Icona migliore per Analisi
  Workflow,  // Icona migliore per Automatismi
  CreditCard,
  Settings,
  LogOut,
  X,
  BookOpen, // Per la documentazione
  User      // Per l'account
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Campagne", icon: Megaphone, href: "/campaigns" },
  { name: "Analisi", icon: BarChart3, href: "/analyze" },
  { name: "Automatismi", icon: Workflow, href: "/automations" },
  { name: "Gestione", icon: CreditCard, href: "/transactions" },
  { name: "Impostazioni", icon: Settings, href: "/settings" },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* 1. OVERLAY SCURO (Solo Mobile) */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* 2. LA SIDEBAR */}
      <aside
        className={`
          fixed left-0 top-0 h-screen w-64 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800 shadow-xl z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800 bg-slate-950 shrink-0">
          <div className="font-bold text-xl tracking-tight text-white">
            HQ60<span className="text-blue-500">Next</span>
          </div>

          <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Navigazione Principale (Scrollabile) */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all hover:bg-slate-800 hover:text-white hover:pl-5 group"
            >
              <item.icon size={20} className="text-slate-400 group-hover:text-white transition-colors" />
              {item.name}
            </a>
          ))}

        </nav>

        {/* Footer:  Account, Esci */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 space-y-2 shrink-0">


          {/* Account */}
          <a href="/account" className="flex items-center gap-3 w-full px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
            <User size={18} />
            Account
          </a>

          {/* Esci (Rosso) */}
          <button className="flex items-center gap-3 w-full px-4 py-2 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors mt-2">
            <LogOut size={18} />
            Esci
          </button>

        </div>
      </aside>
    </>
  );
}