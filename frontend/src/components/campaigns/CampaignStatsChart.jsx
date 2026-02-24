import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

export const CampaingStatsChart = ({ data }) => {

    const prepareChartData = (campaigns) => {
        const summary = campaigns.reduce((acc, current) => {
            const type = current.type.toUpperCase();

            if (!acc[type]) {
                acc[type] = { name: type, totalPerformance: 0, count: 0 };
            }

            acc[type].totalPerformance += current.performance;
            acc[type].count += 1;

            return acc;
        }, {});

        return Object.values(summary).map(item => ({
            name: item.name,
            performance: Math.round((item.totalPerformance / item.count) * 10) / 10
        }));
    };


    const chartData = prepareChartData(data);

    const COLORS = {
        EMAIL: '#9333ea',
        SMS: '#3b82f6',
        WHATSAPP: '#06b6d4',
    };

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm w-full h-[350px]">
            {/* Header Graph*/}
            <div className="mb-6">
                <h3 className="font-bold text-slate-800 text-lg leading-none">Average Performance</h3>
                <p className="text-sm text-slate-500 mt-1">Compare the comunication channel and their relative effectiveness</p>
            </div>

            {/* Flexible Container */}
            <ResponsiveContainer width="100%" height="80%">
                <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>

                    {/* Background */}
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />

                    {/*  X:  (EMAIL, SMS, WHATSAPP) */}
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                    />

                    {/*  Y: Success percentage */}
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        tickFormatter={(value) => `${value}%`}
                    />

                    {/* Tooltip feature */}
                    <Tooltip
                        cursor={{ fill: '#f8fafc' }}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />

                    {/* The actual bars */}
                    <Bar dataKey="performance" radius={[6, 6, 0, 0]} barSize={40}>
                        {/* Map the data to have different bars */}
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[entry.name] || '#b0c3db'} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};