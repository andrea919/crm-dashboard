import React from "react";
import { PageHeader } from "../layout/PageHeader";
import { BarChart3, TrendingUp, Users } from "lucide-react";

export default function Analyze() {
    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10 px-4 md:px-0">

            <PageHeader
                title="Analisi e Report"
                description="Esplora i dati e le performance delle tue campagne per prendere decisioni informate."
                onMenuClick={() => console.log("Menu Clicked")}
                onActionClick={() => console.log("Action Clicked")}
            />

            {/* KPI Finti */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Tasso di Ritorno</p>
                            <h3 className="text-2xl font-bold text-slate-900 mt-1">42.8%</h3>
                        </div>
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                            <TrendingUp size={20} />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Lifetime Value Medio</p>
                            <h3 className="text-2xl font-bold text-slate-900 mt-1">€ 345,00</h3>
                        </div>
                        <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                            <BarChart3 size={20} />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Nuovi Iscritti (Mese)</p>
                            <h3 className="text-2xl font-bold text-slate-900 mt-1">+124</h3>
                        </div>
                        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                            <Users size={20} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Placeholder Grafico Grande */}
            <div className="bg-white p-12 rounded-xl border border-slate-200 border-dashed text-center h-64 flex flex-col justify-center items-center">
                <p className="text-slate-400 font-medium">Qui verrà caricato il report dettagliato del mese.</p>
                <button className="mt-4 text-blue-600 text-sm hover:underline">Scarica PDF Simulato</button>
            </div>
        </div >
    );
}