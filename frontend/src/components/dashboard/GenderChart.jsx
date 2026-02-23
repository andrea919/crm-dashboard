import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const GENDER_COLORS = {
    'Male': '#3b82f6',
    'Female': '#ec4899',
    'Unknown': '#94a3b8'
};

export function GenderChart({ data = [] }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-[350px]">
            <h3 className="font-bold text-lg text-slate-800 mb-4">Customers by Gender</h3>
            <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={data} cx="40%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value" label={(entry) => `${entry.value}`} labelLine={false}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={GENDER_COLORS[entry.name] || GENDER_COLORS[index % Object.keys(GENDER_COLORS).length]} />
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