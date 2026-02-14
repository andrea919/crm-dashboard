import { Users, CreditCard, Activity, TrendingUp, Gift } from "lucide-react";

// Mappa per convertire stringa in icona
const iconMap = {
  Users, CreditCard, Activity, TrendingUp
};



export function StatCard({ stat }) {
  const Icon = iconMap[stat.iconName] || Gift; // Fallback se manca icona

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-slate-500">{stat.title}</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">{stat.value}</h3>
        </div>
        <div className={`p-3 rounded-lg ${stat.color}`}>
          <Icon size={24} />
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm">
        <span className={`font-bold ${stat.isNegative ? 'text-red-500' : 'text-emerald-600'}`}>
          {stat.change}
        </span>

        <span className="text-slate-400 ml-2">
           {stat.subtext}
        </span>
      </div>
    </div>
  );
}