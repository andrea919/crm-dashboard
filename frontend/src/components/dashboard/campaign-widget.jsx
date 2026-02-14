import React from "react";
import { MoreHorizontal, Megaphone, ArrowRight } from "lucide-react";

export function CampaignWidget({ campaigns }) {

  const safeCampaigns = campaigns || [];

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-slate-800">Campagne Attive</h3>
        <button className="text-slate-400 hover:text-slate-600">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="space-y-4 overflow-y-auto pr-1">
        {safeCampaigns.length === 0 ? (
          <p className="text-sm text-slate-400 text-center py-4">Nessuna campagna attiva</p>
        ) : (
          safeCampaigns.map((c) => (
            <div key={c.id} className="p-4 rounded-lg border border-slate-100 bg-slate-50/50 hover:border-slate-200 transition-colors">

              {/* RIGA 1: Nome e Status */}
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-slate-800 text-sm">{c.name}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${
                  // Convertiamo tutto in minuscolo prima di controllare (.toLowerCase())
                  c.status.toLowerCase() === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-amber-100 text-amber-700'
                  }`}>
                  {c.status}
                </span>
              </div>

              {/* RIGA 2: Barra Progresso (Tasso Conversione) */}
              <div className="w-full bg-slate-200 rounded-full h-1.5 mt-3">
                <div
                  className={`h-1.5 rounded-full ${c.color || 'bg-blue-600'}`} // Fallback colore
                  style={{ width: `${c.progress}%` }}
                ></div>
              </div>

              {/* RIGA 3: Info Scadenza e Percentuale (MODIFICATA) */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-slate-500 font-medium">
                  {c.progress}% Conv.
                </span>
                {/* Qui usiamo i dati nuovi dal backend: timeLeft e timeColor */}
                <span className={`text-xs font-medium ${c.timeColor || 'text-slate-400'}`}>
                  {c.timeLeft}
                </span>
              </div>

            </div>
          ))
        )
        }
      </div >
    </div >
  );
}