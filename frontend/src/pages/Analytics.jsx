import React from "react";
import { BarChart3, TrendingUp, Users, Download } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { analyticsKpis } from "../mocks/analyticsMocks";

const iconMap = {
    TrendingUp: TrendingUp,
    BarChart3: BarChart3,
    Users: Users
};

export default function AnalyticsPage() {

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10 px-4 md:px-0">

            {/* HEADER STANDARD */}
            <PageHeader
                title="Analytics & Reports"
                description="Explore data and campaign performance to make informed decisions."
                onActionClick={() => console.log("Action Clicked")}
                actionLabel="New Action"
            />

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {analyticsKpis.map((kpi) => {
                    const Icon = iconMap[kpi.icon];
                    return (
                        <div key={kpi.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
                                    <h3 className="text-2xl font-bold text-slate-900 mt-1">{kpi.value}</h3>
                                </div>
                                <div className={`p-2 rounded-lg ${kpi.color}`}>
                                    {Icon && <Icon size={20} />}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Main Chart Placeholder */}
            <div className="bg-white p-12 rounded-xl border border-slate-200 border-dashed text-center h-80 flex flex-col justify-center items-center">
                <div className="p-4 bg-slate-50 rounded-full mb-4">
                    <BarChart3 size={32} className="text-slate-300" />
                </div>
                <p className="text-slate-500 font-medium">Detailed performance reports will be rendered here.</p>
                <p className="text-sm text-slate-400 mt-1">Connect your database to see real-time data visualization.</p>
                <button className="mt-6 flex items-center gap-2 text-blue-600 text-sm font-semibold hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
                    <Download size={16} />
                    Download Sample Report
                </button>
            </div>
        </div>
    );
}