import React from "react";
import { Plus } from "lucide-react";

export const CampaignTypeCard = ({ type, onClick }) => {
    const Icon = type.icon;

    return (
        <button
            onClick={onClick}
            className="group flex flex-col items-start text-left bg-white p-5 rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-300 hover:-translate-y-1 w-full h-full"
        >
            <div className={`p-3 rounded-lg mb-4 ${type.color}`}>
                <Icon size={24} strokeWidth={2.5} />
            </div>

            <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">
                {type.title}
            </h3>

            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                {type.description}
            </p>

            {/* Footer Finto Bottone */}
            <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-blue-600">
                <Plus size={16} />
                <span>{type.action}</span>
            </div>
        </button>
    );
};