import React from "react";
import { MoreHorizontal, Mail, MessageSquare, MessageCircle } from "lucide-react";

const StatusBadge = ({ status }) => {
    const s = status ? status.toLowerCase() : "";
    let styles = "bg-slate-100 text-slate-600"; // Default per Draft

    if (s === "sent" || s === "active") styles = "bg-emerald-100 text-emerald-700 border-emerald-200";
    else if (s === "scheduled") styles = "bg-blue-100 text-blue-700 border-blue-200";

    const label = s.charAt(0).toUpperCase() + s.slice(1);

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${styles}`}>
            {label}
        </span>
    );
};

const TypeIcon = ({ type }) => {
    const t = type ? type.toLowerCase() : "";
    if (t === 'email') return <div className="flex items-center gap-2"><div className="p-1 bg-purple-50 text-purple-600 rounded"><Mail size={14} /></div><span>Email</span></div>;
    if (t === 'sms') return <div className="flex items-center gap-2"><div className="p-1 bg-orange-50 text-orange-600 rounded"><MessageSquare size={14} /></div><span>SMS</span></div>;
    if (t === 'whatsapp') return <div className="flex items-center gap-2"><div className="p-1 bg-cyan-50 text-cyan-600 rounded"><MessageCircle size={14} /></div><span>WA</span></div>;
    return <span>{type}</span>;
};

// --- Table fixed  ---
export const CampaignsTable = ({ data }) => {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col w-full min-w-0">

            {/* HEADER */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white rounded-t-xl">
                <h3 className="font-bold text-slate-800 whitespace-nowrap">Activity Overview</h3>
                <button className="text-sm text-blue-600 font-medium hover:underline whitespace-nowrap ml-4">View All</button>
            </div>

            {/* CONTAINER SCROLL:
          - block: avoids the table trying to shrink to fit content and breaking layout
          - overflow-x-auto: abilitates horizontal scrolling when content is wider than container
          - max-w-full: ensures the container doesn't exceed the width of its parent, allowing the scroll to work properly
      */}
            <div className="block w-full max-w-full">
                <table className="w-full text-left text-sm text-slate-600 whitespace-nowrap">
                    <thead className="bg-slate-50 text-xs uppercase font-semibold text-slate-500">
                        <tr>
                            <th className="px-6 py-4 min-w-[200px]">Campaign Name</th>
                            <th className="px-6 py-4 min-w-[120px]">Type</th>
                            <th className="px-6 py-4 min-w-[120px]">Status</th>
                            <th className="px-6 py-4 text-center min-w-[100px]">Recipients</th>
                            <th className="px-6 py-4 min-w-[200px]">Performance</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {data.map((campaign) => (
                            <tr key={campaign.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-slate-900">{campaign.name}</td>
                                <td className="px-6 py-4"><TypeIcon type={campaign.type} /></td>
                                <td className="px-6 py-4"><StatusBadge status={campaign.status} /></td>
                                <td className="px-6 py-4 text-center">
                                    {campaign.recipients > 0 ? campaign.recipients.toLocaleString() : "—"}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden w-24 min-w-[6rem]">
                                            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${campaign.openRate}%` }} />
                                        </div>
                                        <span className="text-xs font-medium w-8">{campaign.openRate}%</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-100 rounded-full">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};