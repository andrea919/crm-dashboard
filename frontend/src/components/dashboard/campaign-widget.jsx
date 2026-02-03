import { MoreHorizontal } from "lucide-react";

export function CampaignWidget({ campaigns }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-slate-800">Campagne Attive</h3>
        <button className="text-slate-400 hover:text-slate-600">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="space-y-5">
        {campaigns.map((c) => (
          <div key={c.id} className="p-4 rounded-lg border border-slate-100 bg-slate-50/50 hover:border-slate-200 transition-colors">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-slate-800">{c.name}</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${c.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                }`}>
                {c.status}
              </span>
            </div>
            {/* Barra Progresso */}
            <div className="w-full bg-slate-200 rounded-full h-1.5 mt-3">
              <div
                className={`h-1.5 rounded-full ${c.color}`}
                style={{ width: `${c.progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-slate-400 mt-2 text-right font-mono">{c.progress}% target</p>
          </div>
        ))}
      </div>
    </div>
  );
}