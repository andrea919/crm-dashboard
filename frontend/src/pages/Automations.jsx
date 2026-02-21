
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import AutomationCard from "../components/automations/ViewAutomationCard";
import AddCard from "../components/automations/AddAutomationCard";
import { initialAutomations } from "../mocks/automationMocks";



export default function AutomationsView() {
    const [automations, setAutomations] = useState(initialAutomations);

    // BUSINESS LOGIC
    const handleToggle = (id) => {
        setAutomations((prev) =>
            prev.map((auto) =>
                auto.id === id ? { ...auto, active: !auto.active } : auto
            )
        );
    };

    const handleDelete = (id) => {

        if (window.confirm("Are you sure you want to delete this automation?")) {
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
                title="Automations"
                description="Create and manage automated flows to improve engagement and customer loyalty."
                onMenuClick={onMenuClick}
                onActionClick={handleAddNew}
                actionLabel="Create Automation"
            />


            {/* GRID */}
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

                {/* Card to add new element */}
                <AddCard onClick={handleAddNew} />
            </div>
        </div>
    );
}
