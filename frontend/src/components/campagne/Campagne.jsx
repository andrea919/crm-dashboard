import React from "react";

export default function Campaigns() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Campagne Marketing</h1>
          <p className="text-slate-500 mt-1">Gestisci le promozioni attive e programmate.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-md transition-colors">
          + Nuova Campagna
        </button>
      </div>

      {/* Un box vuoto per ora */}
      <div className="bg-white p-12 rounded-xl border border-slate-200 border-dashed text-center">
        <p className="text-slate-400">Qui vedrai la lista delle campagne.</p>
      </div>
    </div>
  );
}