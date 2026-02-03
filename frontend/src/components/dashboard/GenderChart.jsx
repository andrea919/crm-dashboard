import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'N.D.', value: 489 },
    { name: 'F', value: 74 },
    { name: 'M', value: 100 },
];
const COLORS = ['#94a3b8', '#ec4899', '#3b82f6'];

export function GenderChart() {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-[350px]">
            <h3 className="font-bold text-lg text-slate-800 mb-4">Clienti per Sesso</h3>
            <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value">
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