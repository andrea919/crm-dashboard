import React from "react";
import { PageHeader } from "../components/layout/PageHeader";

export default function Settings(onMenuClick) {

    const handleNewSettings = () => {
        console.log("New operator");
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10 px-4 md:px-0">

            <PageHeader
                title="General Settings"
                description="Configure your store details and system preferences."
                onMenuClick={onMenuClick}
                onActionClick={handleNewSettings}
                actionLabel="New Setting"
            />


            <div className="w-full bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
                <div>
                    <h3 className="font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">Company Details</h3>
                    <div className="grid gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Store Name</label>
                            <input type="text" defaultValue="Il Mio Negozio" className="w-full p-2 border border-slate-300 rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Support Email</label>
                            <input type="email" defaultValue="support@negozio.it" className="w-full p-2 border border-slate-300 rounded-lg" />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">System Preferences</h3>
                    <div className="flex items-center justify-between py-2">
                        <span className="text-slate-600">Enable email notifications</span>
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded" />
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <span className="text-slate-600">Dark Mode (Beta)</span>
                        <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                    </div>
                </div>

                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
                    Save Changes
                </button>
            </div>
        </div>
    );
}