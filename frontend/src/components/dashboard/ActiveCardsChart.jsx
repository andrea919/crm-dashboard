import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export function ActiveCardsChart({ data }) {

    // Se i dati non sono disponibili, usiamo un array vuoto per evitare errori
    const chartData = data && data.length > 0 ? data : [];


    return (
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-[400px]">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                    <h3 className="font-bold text-lg text-slate-800">Card Attive (Trend)</h3>
                </div>
            </div>

            <div className="h-[300px] w-full">
                {chartData.length === 0 ? (
                    <div className="h-full flex items-center justify-center text-slate-400">
                        Nessun dato disponibile per il periodo
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        {/* 3. Passiamo chartData al grafico */}
                        <BarChart data={chartData} barSize={40}>
                            <defs>
                                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity={1} />
                                </linearGradient>
                            </defs>

                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />

                            {/* Assicurati che il backend mandi "name" (Mese) */}
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />

                            <Tooltip
                                cursor={{ fill: '#f8fafc' }}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                            />

                            {/* Assicurati che il backend mandi "active" (Valore) */}
                            <Bar
                                dataKey="active"
                                fill="url(#blueGradient)"
                                radius={[6, 6, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
}