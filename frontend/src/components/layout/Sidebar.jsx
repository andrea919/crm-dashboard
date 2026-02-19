import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Megaphone,
  BarChart3,
  Workflow,
  CreditCard,
  Settings,
  LogOut,
  X,
  BookText,
  BookOpen,
  User
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Campaigns", icon: Megaphone, href: "/campaigns" },
  { name: "Analytics", icon: BarChart3, href: "/analyze" },
  { name: "Automations", icon: Workflow, href: "/automations" },
  { name: "Templates", icon: BookText, href: "/templates" },
  { name: "Managment", icon: CreditCard, href: "/transactions" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/*  SIDEBAR */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800 shadow-xl
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          
          /* --- MODIFICA FONDAMENTALE PER IL LAYOUT --- */
          /* Su desktop diventa statica (non galleggia) e spinge il contenuto */
          md:translate-x-0 md:static md:inset-auto
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

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all group
                ${isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" // Stile Attivo
                  : "text-slate-400 hover:bg-slate-800 hover:text-white hover:pl-5" // Stile Inattivo
                }
              `}
            >
              <item.icon size={20} className="shrink-0" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 space-y-2 shrink-0">

          <NavLink
            to="/account"
            className={({ isActive }) => `
              flex items-center gap-3 w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors
              ${isActive ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white hover:bg-slate-800"}
            `}
          >
            <User size={18} />
            Account
          </NavLink>

          <button className="flex items-center gap-3 w-full px-4 py-2 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors mt-2">
            <LogOut size={18} />
            Logout
          </button>

        </div>
      </aside>
    </>
  );
}