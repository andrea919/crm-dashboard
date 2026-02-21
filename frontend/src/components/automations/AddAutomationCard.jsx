import React from "react";
import { Plus } from "lucide-react";

const AddCard = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="group flex min-h-[320px] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-transparent transition-all duration-300 hover:border-blue-400 hover:bg-blue-50/30"
        >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                <Plus size={32} className="text-slate-400 transition-colors group-hover:text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-600 transition-colors group-hover:text-blue-700">
                Create Automation
            </h3>
            <p className="mt-1 text-sm text-slate-400">Set up a new automated trigger for your customers.</p>
        </button>
    );
};

export default AddCard;