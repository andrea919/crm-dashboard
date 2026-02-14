import React from "react";
import { Zap, Send, Trash2, Edit, FileText } from "lucide-react";

const AutomationCard = ({ data, onToggle, onDelete, onEdit }) => {
    const isActive = data.active;

    return (
        <div
            className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 
      ${isActive
                    ? "bg-white border-blue-100 shadow-sm"
                    : "bg-slate-50/50 border-slate-200 opacity-80 hover:opacity-100"
                }`}
        >
            {/* HEADER */}
            <div className="flex items-start justify-between border-b border-slate-100 p-5">
                <div>
                    <h3 className={`text-lg font-bold tracking-tight ${isActive ? "text-slate-800" : "text-slate-500"}`}>
                        {data.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                        <FileText size={12} className="text-blue-500" />
                        <span className="truncate max-w-[150px]">
                            Template: <span className="font-medium text-slate-700">{data.templateName}</span>
                        </span>
                    </div>
                </div>

                {/* Modern Toggle Switch */}
                <button
                    onClick={() => onToggle(data.id)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 
          ${isActive ? "bg-green-500" : "bg-slate-300"}`}
                >
                    <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out 
            ${isActive ? "translate-x-5" : "translate-x-0"}`}
                    />
                </button>
            </div>

            {/* BODY: Flow Visualization */}
            <div className="flex items-center justify-between gap-2 p-6">
                {/* Trigger Node */}
                <div className="flex flex-1 flex-col items-center text-center">
                    <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${isActive ? "bg-orange-50 text-orange-600" : "bg-slate-100 text-slate-400"}`}>
                        <Zap size={22} strokeWidth={2} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Quando</span>
                    <p className="mt-0.5 text-sm font-semibold text-slate-700 leading-tight">{data.trigger}</p>
                </div>

                {/* Connector Arrow */}
                <div className="relative flex-1 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t-2 border-dashed border-slate-200"></div>
                    </div>
                </div>

                {/* Action Node */}
                <div className="flex flex-1 flex-col items-center text-center">
                    <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${isActive ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-400"}`}>
                        <Send size={20} strokeWidth={2} className={isActive ? "ml-0.5" : ""} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Allora</span>
                    <p className="mt-0.5 text-sm font-semibold text-slate-700 leading-tight">{data.action}</p>
                </div>
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between rounded-b-2xl bg-slate-50/80 px-5 py-4 backdrop-blur-sm">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-slate-400 font-bold">Performance 24h</span>
                    <span className="text-sm font-medium text-slate-700">
                        {data.stats.sentToday} <span className="font-normal text-slate-500">invii</span>
                    </span>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(data.id)}
                        className="group/btn flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-blue-300 hover:text-blue-600 hover:shadow-sm"
                        title="Modifica"
                    >
                        <Edit size={16} />
                    </button>
                    <button
                        onClick={() => onDelete(data.id)}
                        className="group/btn flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-red-300 hover:text-red-600 hover:shadow-sm"
                        title="Elimina"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AutomationCard;