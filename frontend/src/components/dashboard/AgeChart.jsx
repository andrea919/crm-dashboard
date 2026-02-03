import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Fino a 20', value: 15 },
    { name: 'Fino a 30', value: 14 },
    { name: 'Fino a 40', value: 14 },
    { name: 'Fino a 50', value: 14 },
    { name: 'Oltre 50', value: 6 }
];

const COLORS = ['#3b82f6', '#ef4444', '#eab308', '#22c55e', '#a855f7', '#06b6d4', '#f97316', '#84cc16'];

export function AgeChart() {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-[350px]">
            <h3 className="font-bold text-lg text-slate-800 mb-4">Clienti per Età</h3>
            <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}