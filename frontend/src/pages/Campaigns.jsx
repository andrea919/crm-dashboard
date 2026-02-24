import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { CampaignTypeCard } from "../components/campaigns/CampaignTypeCards";
import { CampaignsTable } from "../components/campaigns/CampaignOverview";
import { StatusBadge } from "../components/campaigns/CampaignStatusBadge";
import { TypeIcon } from "../components/campaigns/CampaignTypeIcon";
import { campaignTypes, mockCampaignsList as mockData } from "../mocks/campaignMocks";
import { fetchCampaignData } from "../services/campaignService";
import { CampaingStatsChart } from "../components/campaigns/CampaignStatsChart";

export default function CampaignsPage() {

  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCampaignData();
        console.log("Received from DB:", data.campaigns[0]);
        setCampaigns(data.campaigns || []);
      } catch (error) {
        console.error("Error while retrieving Campaign Overview:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [])

  const handleCreate = (typeId) => {
    console.log("Create a new campaign of type:", typeId);
    alert(`Function of creation campaign of type ${typeId} not implemented`)
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10 px-4 md:px-0">

      {/* Header Page */}
      <PageHeader
        title="Campaigns"
        description="Manage all your communication campaigns in one place."
        actionLabel="Create Campaign"
        onActionClick={() => alert("Function of creating campaign not implemented")}
      />

      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 px-1">
          Start a new campaign
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

      <section className="w-full">
        <CampaingStatsChart data={campaigns}>

        </CampaingStatsChart>
      </section>

      {/* This hides the table on mobile devices */}
      <section className="w-full mt-8">
        <CampaignsTable data={campaigns} />
      </section>

    </div>
  );
}