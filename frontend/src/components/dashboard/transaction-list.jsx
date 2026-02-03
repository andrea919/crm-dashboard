export function TransactionList({ transactions }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-slate-800">Transazioni Recenti</h3>
        <button className="text-sm text-blue-600 font-medium hover:underline">Vedi tutte</button>
      </div>
      
      <div className="space-y-4">
        {transactions.map((t) => (
          <div key={t.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold group-hover:bg-white group-hover:shadow-sm transition-all border border-slate-200">
                {t.initials}
              </div>
              <div>
                <p className="font-medium text-slate-900">{t.customerName}</p>
                <p className="text-xs text-slate-500">{t.store}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-slate-900">€ {t.amount.toFixed(2)}</p>
              <p className="text-xs text-emerald-600 font-medium">+{t.points} pts</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}