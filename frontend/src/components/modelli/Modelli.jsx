import React, { useState } from "react";
import { Plus, Search, Filter } from "lucide-react";
import { PageHeader } from "../layout/PageHeader";
import TemplateCard from "./templatesCard";
import { initialTemplates } from "./templatesData";

export default function Templates(onMenuClick) {
    const [activeTab, setActiveTab] = useState("all");
    const [templates, setTemplates] = useState(initialTemplates);

    // Filtra i template in base al tab attivo
    const filteredTemplates = activeTab === "all"
        ? templates
        : templates.filter(t => t.channel === activeTab);

    // --- HANDLERS (Placeholder Logic) ---
    const handleDelete = (id) => {
        if (confirm("Eliminare questo modello?")) {
            setTemplates(prev => prev.filter(t => t.id !== id));
        }
    };

    const handleEdit = (id) => console.log("Edit", id);
    const handleDuplicate = (id) => console.log("Duplicate", id);

    const handleNewPromotion = () => {
        console.log("Create new promotion template");
    };



    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10 px-4 md:px-0">

            {/* HEADER STANDARD MODULARE */}
            <PageHeader
                title="Modelli di Comunicazione"
                description="Gestisci i tuoi template per email, SMS e WhatsApp in un unico posto."
                onMenuClick={onMenuClick}
                onActionClick={handleNewPromotion}
                actionLabel="Nuova Promozione"
            />

            {/* TOOLBAR: Tabs & Search */}
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-1 sm:flex-row sm:items-center sm:justify-between">

                {/* TABS di Navigazione */}
                <nav className="flex gap-6" aria-label="Tabs">
                    {['all', 'sms', 'email', 'whatsapp'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                border-b-2 py-4 text-sm font-medium transition-colors capitalize
                ${activeTab === tab
                                    ? 'border-indigo-600 text-indigo-600'
                                    : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}
              `}
                        >
                            {tab === 'all' ? 'Tutti i modelli' : tab}
                        </button>
                    ))}
                </nav>

                {/* Search Input */}
                <div className="relative mb-2 sm:mb-0">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Cerca modello..."
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:w-64"
                    />
                </div>
            </div>

            {/* GRID CONTENT */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredTemplates.map((template) => (
                    <TemplateCard
                        key={template.id}
                        data={template}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onDuplicate={handleDuplicate}
                    />
                ))}

                {/* Empty State se non ci sono risultati */}
                {filteredTemplates.length === 0 && (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center text-slate-400 border-2 border-dashed border-slate-100 rounded-2xl bg-slate-50/50">
                        <Filter size={48} className="mb-4 text-slate-300" />
                        <p className="text-lg font-medium text-slate-600">Nessun modello trovato</p>
                        <p className="text-sm">Prova a cambiare filtro o crea un nuovo template.</p>
                    </div>
                )}
            </div>
        </div>
    );
}