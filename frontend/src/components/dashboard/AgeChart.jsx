import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#5d5ec6', '#10b981', '#f59e0b', '#f65c5c', '#0ea5e9'];

export function AgeChart({ data = [] }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-[350px]">
            <h3 className="font-bold text-lg text-slate-800 mb-4">Customers by Age</h3>
            <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value" label={(entry) => `${entry.value}`} labelLine={false}>
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