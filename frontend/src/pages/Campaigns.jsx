import React from "react";
import { Mail, MessageSquare, Podcast, MessageCircle } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { CampaignTypeCard } from "../components/campaigns/CampaignTypeCards";
import { CampaignsTable } from "../components/campaigns/CampaignsOverview";
import { campaignTypes, mockCampaignsList as mockData } from "../mocks/campaignMocks";

const StatusBadge = ({ status }) => {

  const labels = {
    sent: "Sent",
    scheduled: "Scheduled",
    draft: "Drafted"
  };

  const styles = {
    sent: "bg-emerald-100 text-emerald-700 border-emerald-200",
    scheduled: "bg-blue-100 text-blue-700 border-blue-200",
    draft: "bg-slate-100 text-slate-600 border-slate-200",
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
};

const TypeIcon = ({ type }) => {

  if (type === 'email') {
    return (
      <div className="px-1 py-0.5 bg-purple-50 rounded-full text-purple-600 flex items-center justify-center">
        <Mail size={18} />
        <span className="pl-2 text-purple-600">Email</span>
      </div>
    );
  }

  if (type === 'sms') {
    return (
      <div className="px-1 py-0.5 bg-orange-50 rounded-full text-orange-600 flex items-center justify-center">
        <MessageSquare size={18} />
        <span className="pl-2 text-orange-600">Sms</span>
      </div>
    );
  }

  if (type === 'whatsapp') {
    return (
      <div className="px-1 py-0.5 bg-cyan-50 rounded-full text-cyan-600 flex items-center justify-center">
        <MessageCircle size={18} />
        <span className="pl-2 text-cyan-600">WhatsApp</span>
      </div>
    );
  }

  return null;
};

export default function Campaigns(onMenuClick) {

  const handleCreate = (typeId) => {
    console.log("Create a new campaign of type:", typeId);
    alert(`Function of creation campaign of type ${typeId} not implemented`)
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10 px-4 md:px-0">

      {/* Header Pagina */}
      <PageHeader
        title="Campaigns"
        description="Manage all your communication campaigns in one place."
        actionLabel="Create Campaign"
        onActionClick={() => alert("Function of creating campaign not implemented")}
      />

      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 px-1">
          Start a new activity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {campaignTypes.map((type) => (
            <CampaignTypeCard
              key={type.id}
              type={type}
              onClick={() => handleCreate(type.id)}
            />
          ))}
        </div>
      </section>

      {/* This hides the table on mobile devices */}
      <section className="hidden md:block">
        <CampaignsTable data={mockData} />
      </section>

    </div>
  );
}