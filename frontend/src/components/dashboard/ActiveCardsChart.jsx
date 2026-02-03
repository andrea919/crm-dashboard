import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mag 25', value: 400 },
    { name: 'Ago 25', value: 380 },
    { name: 'Set 25', value: 410 },
    { name: 'Nov 25', value: 420 },
    { name: 'Dic 25', value: 450 },
    { name: 'Gen 26', value: 560 },
];

export function ActiveCardsChart() {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-[400px]">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg text-slate-800">Card Attive</h3>
                <span className="bg-orange-100 text-orange-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Con incremento
                </span>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barSize={40}>
                        <defs>
                            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                                <stop offset="100%" stopColor="#1d4ed8" stopOpacity={1} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />

                        <Tooltip
                            cursor={{ fill: '#f8fafc' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />

                        <Bar
                            dataKey="value"
                            fill="url(#blueGradient)"
                            radius={[6, 6, 0, 0]}
                        />

                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}