import React from "react";
import { Trophy, Store } from "lucide-react";

export function TopStoresWidget({ stores }) {
  const safeStores = stores || [];

  // Calculate the maximum revenue to scale the progress bars, defaulting to 1 to avoid division by zero
  const maxRevenue = safeStores.length > 0
    ? Math.max(...safeStores.map(s => s.revenue))
    : 1;

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-full flex flex-col">
      {/* Header with Icon */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
          <Trophy className="text-yellow-500" size={20} />
          Top Performing Stores
        </h3>
      </div>

      {/* Stores List */}
      <div className="flex-1 overflow-y-auto space-y-6 pr-2">
        {safeStores.length === 0 ? (
          <p className="text-center text-slate-400 py-4 text-sm">No data available</p>
        ) : (
          safeStores.map((store, index) => (
            <div key={index} className="group relative">

              {/* Data Row: Name on left, Revenue on right */}
              <div className="flex justify-between items-end mb-2 relative z-10">
                <div className="flex items-center gap-3">
                  {/* Position badge (1, 2, 3...) */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-sm
                    ${index === 0 ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                      index === 1 ? 'bg-slate-100 text-slate-700 border border-slate-200' :
                        index === 2 ? 'bg-orange-50 text-orange-800 border border-orange-100' : 'bg-white text-slate-400 border border-slate-100'}`}>
                    {index + 1}
                  </div>

                  {/* Store Name */}
                  <div>
                    <span className="font-bold text-slate-700 block text-sm">{store.name}</span>
                  </div>
                </div>

                {/* Revenue and Order count */}
                <div className="text-right">
                  <span className="block font-bold text-slate-900 text-sm">
                    € {store.revenue.toLocaleString('it-IT', { minimumFractionDigits: 2 })}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                    {store.count} {store.count === 1 ? 'Ordine' : 'Ordini'}                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                {/* Full progress bar */}
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${index === 0 ? 'bg-blue-600' : 'bg-slate-400 opacity-60'
                    }`}
                  style={{ width: `${(store.revenue / maxRevenue) * 100}%` }}
                ></div>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
}