import React from "react";

export default function Settings() {
    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-slate-900">Impostazioni Generali</h1>

            <div className="w-full bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
                <div>
                    <h3 className="font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">Dettagli Azienda</h3>
                    <div className="grid gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Nome Store</label>
                            <input type="text" defaultValue="Il Mio Negozio" className="w-full p-2 border border-slate-300 rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Email di Supporto</label>
                            <input type="email" defaultValue="support@negozio.it" className="w-full p-2 border border-slate-300 rounded-lg" />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">Preferenze Sistema</h3>
                    <div className="flex items-center justify-between py-2">
                        <span className="text-slate-600">Attiva notifiche email</span>
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded" />
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <span className="text-slate-600">Modalità Scura (Beta)</span>
                        <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                    </div>
                </div>

                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
                    Salva Modifiche
                </button>
            </div>
        </div>
    );
}