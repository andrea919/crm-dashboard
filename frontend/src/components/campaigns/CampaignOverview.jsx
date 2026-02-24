import React from "react";
import { MoreHorizontal, Mail, MessageSquare, MessageCircle } from "lucide-react";
import { StatusBadge } from "./CampaignStatusBadge";
import { TypeIcon } from "./CampaignTypeIcon";

export const CampaignsTable = ({ data }) => {
    return (
        <div className="flex flex-col w-full min-w-0 gap-6 mt-8">


            <div className="flex flex-col gap-4 lg:hidden border border-slate-200 overflow-hidden border-white rounded-xl">
                {/* HEADER */}
                <div className="flex justify-between items-center px-4 py-3 ">
                    <h3 className="font-bold text-slate-800 whitespace-nowrap">Activity Overview</h3>
                    <button className="text-sm text-blue-600 font-medium hover:underline whitespace-nowrap ml-4">View All</button>
                </div>

                {data.map((campaign) => (
                    <div key={campaign.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4 w-full">

                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <h4 className="font-bold text-slate-900 text-base leading-tight">
                                    {campaign.name}
                                </h4>
                                <TypeIcon type={campaign.type} />
                            </div>
                            <StatusBadge status={campaign.status} />
                        </div>

                        <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-50">
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Recipients</p>
                                <p className="text-sm font-semibold text-slate-700">
                                    {campaign.recipients > 0 ? campaign.recipients.toLocaleString() : "—"}
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Performance</p>
                                <p className="text-sm font-semibold text-slate-700">{campaign.performance}%</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-500 rounded-full"
                                    style={{ width: `${campaign.performance}%` }}
                                />
                            </div>
                            <button className="text-slate-400 p-1">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>


            <div className="hidden lg:block w-full max-w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto">

                {/* HEADER */}
                <div className="px-10 py-4 flex justify-between items-center ">
                    <h3 className="font-bold text-slate-800 whitespace-nowrap">Activity Overview</h3>
                    <button className="text-sm text-blue-600 font-medium hover:underline whitespace-nowrap ml-4">View All</button>
                </div>


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
                                            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${campaign.performance}%` }} />
                                        </div>
                                        <span className="text-xs font-medium w-8">{campaign.performance}%</span>
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