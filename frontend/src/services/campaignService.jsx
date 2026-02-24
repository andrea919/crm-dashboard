
const API_URL = "/api";

export const fetchCampaignData = async () => {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

        const [campaignsRes] = await Promise.all([
            fetch(`${API_URL}/campaigns/overview`, { signal: controller.signal })
        ]);

        clearTimeout(timeoutId);

        const campaigns = campaignsRes.ok ? await campaignsRes.json() : [];

        return {
            campaigns: Array.isArray(campaigns) ? campaigns : mockDashboardData.campaigns || []
        };
    } catch (error) {
        console.error("Error while retrieving campaign data:", error);
        return { campaigns: mockDashboardData.campaigns || [] };
    }
};