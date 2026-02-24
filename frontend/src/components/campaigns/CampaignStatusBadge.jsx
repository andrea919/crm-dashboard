import React from 'react';

export const StatusBadge = ({ status }) => {

    const labels = {
        active: "Active",
        suspended: "Suspended",
        inactive: "Inactive"
    };

    const styles = {
        active: "bg-emerald-100 text-emerald-700 border-emerald-200",
        suspended: "bg-orange-100 text-orange-700 border-orange-200",
        inactive: "bg-slate-100 text-slate-600 border-slate-200",
    };

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}>
            {labels[status] || status}
        </span>
    );
};