import React from "react";
import { Play, Pause, Clock } from "lucide-react";

const automations = [
    { id: 1, name: "Email di Benvenuto", trigger: "Nuova Iscrizione", status: "active" },
    { id: 2, name: "Buon Compleanno", trigger: "Data di Nascita", status: "active" },
    { id: 3, name: "Recupero Carrello", trigger: "Carrello Abbandonato > 24h", status: "paused" },
    { id: 4, name: "Win-back Clienti Persi", trigger: "Nessun acquisto > 90gg", status: "active" },
];

export default function Automations() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900">Automatismi</h1>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-800">
                    + Nuovo Flusso
                </button>
            </div>

            <div className="grid gap-4">
                {automations.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-full ${item.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                                <Clock size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">{item.name}</h3>
                                <p className="text-sm text-slate-500">Trigger: {item.trigger}</p>
                            </div>
                        </div>

                        <button className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border ${item.status === 'active' ? 'border-slate-200 text-slate-600' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                            {item.status === 'active' ? <Pause size={14} /> : <Play size={14} />}
                            {item.status === 'active' ? 'Metti in Pausa' : 'Attiva'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}