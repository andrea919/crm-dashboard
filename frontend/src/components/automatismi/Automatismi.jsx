
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "../layout/PageHeader";
import AutomationCard from "./AutomationCard";
import AddCard from "./addCard";



export const initialAutomations = [
    {
        id: 1,
        name: "Auguri di Compleanno",
        active: true,
        trigger: "Giorno del compleanno",
        action: "Invia Email",
        templateName: "Buon Compleanno Classic",
        stats: { sentToday: 3 }
    },
    {
        id: 2,
        name: "Recupero Carrello",
        active: true,
        trigger: "Abbandono checkout (1h)",
        action: "Invia SMS",
        templateName: "Hai dimenticato qualcosa?",
        stats: { sentToday: 1 }
    },
    {
        id: 3,
        name: "Benvenuto Nuovi Clienti",
        active: false,
        trigger: "Nuova registrazione",
        action: "Invia WhatsApp",
        templateName: "Welcome Pack 2025",
        stats: { sentToday: 0 }
    }
];


export default function AutomationsView() {
    const [automations, setAutomations] = useState(initialAutomations);

    // --- LOGICA DI BUSINESS ---
    const handleToggle = (id) => {
        setAutomations((prev) =>
            prev.map((auto) =>
                auto.id === id ? { ...auto, active: !auto.active } : auto
            )
        );
    };

    const handleDelete = (id) => {

        if (window.confirm("Sei sicuro di voler eliminare questo automatismo?")) {
            setAutomations((prev) => prev.filter((auto) => auto.id !== id));
        }
    };

    const handleEdit = (id) => {
        console.log(`Open modal for ID: ${id}`);
    };

    const handleAddNew = () => {
        console.log("Create new automation flow");
    };

    const onMenuClick = () => {
        console.log("Menu Clicked");
    };


    // --- RENDER ---
    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10 px-4 md:px-0">

            <PageHeader
                title="Automatismi"
                description="Crea e gestisci flussi automatizzati per migliorare l'engagement e la fidelizzazione dei tuoi clienti."
                onMenuClick={onMenuClick}
                onActionClick={handleAddNew}
                actionLabel="Nuova Promozione"
            />


            {/* GRIGLIA */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {automations.map((auto) => (
                    <AutomationCard
                        key={auto.id}
                        data={auto}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))}

                {/* Card per aggiungere nuovo elemento */}
                <AddCard onClick={handleAddNew} />
            </div>
        </div>
    );
}