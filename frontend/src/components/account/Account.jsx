import React from "react";
import { PageHeader } from "../layout/PageHeader";
import { User, Shield, Key } from "lucide-react";

export default function Account(onClickMenu) {


    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10 px-4 md:px-0">

            <PageHeader
                title="Il Tuo Account"
                description="Gestisci le impostazioni del tuo profilo, le preferenze di sicurezza e i permessi del team."
                onMenuClick={onClickMenu}
                onActionClick={() => console.log("Action Clicked")}
                actionLabel="Modifica Profilo"
            />


            <div className="text-center">
                <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto flex items-center justify-center text-slate-400 mb-4 border-4 border-white shadow-lg">
                    <User size={40} />
                </div>
                <h1 className="text-2xl font-bold text-slate-900">Admin User</h1>
                <p className="text-slate-500">Amministratore Principale</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
                <button className="w-full p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors text-left">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <User size={20} />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-medium text-slate-900">Modifica Profilo</h4>
                        <p className="text-xs text-slate-500">Nome, Email, Avatar</p>
                    </div>
                </button>

                <button className="w-full p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors text-left">
                    <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                        <Key size={20} />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-medium text-slate-900">Cambia Password</h4>
                        <p className="text-xs text-slate-500">Ultimo cambio: 30gg fa</p>
                    </div>
                </button>

                <button className="w-full p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors text-left">
                    <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                        <Shield size={20} />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-medium text-slate-900">Permessi e Ruoli</h4>
                        <p className="text-xs text-slate-500">Gestisci accessi team</p>
                    </div>
                </button>
            </div>
        </div>
    );
}