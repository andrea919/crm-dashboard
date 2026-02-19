import { mockDashboardData } from "../mocks/dashboardMocks";

const API_URL = "/api";

export const fetchDashboardData = async () => {
    try {

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const [statsRes, topStoresRes, campaignsRes, companyNameRes, customerChartRes] = await Promise.all([
            fetch(`${API_URL}/dashboard/stats`, { signal: controller.signal }),
            fetch(`${API_URL}/dashboard/topStores`, { signal: controller.signal }),
            fetch(`${API_URL}/dashboard/campaigns`, { signal: controller.signal }),
            fetch(`${API_URL}/company/info`, { signal: controller.signal }),
            fetch(`${API_URL}/dashboard/customerChart`, { signal: controller.signal })
        ]);

        clearTimeout(timeoutId);

        // Check if responses are ok, if not return empty data for that section
        const stats = statsRes.ok ? await statsRes.json() : [];
        const topStores = topStoresRes.ok ? await topStoresRes.json() : [];
        const campaigns = campaignsRes.ok ? await campaignsRes.json() : [];
        const companyName = companyNameRes.ok ? await companyNameRes.json() || [] : "La tua azienda";
        const customerChart = customerChartRes.ok ? await customerChartRes.json() : {};

        // Convert it to an array if it's not already
        const customerChartArray = customerChart.trend || [];

        // 3. Return datas with fallback to mock data if any section is missing or not an array
        return {
            stats: Array.isArray(stats) ? stats : mockDashboardData.stats || [],
            topStores: Array.isArray(topStores) ? topStores : mockDashboardData.topStores || [],
            campaigns: Array.isArray(campaigns) ? campaigns : mockDashboardData.campaigns || [],
            companyName: companyName.name || mockDashboardData.companyName || "Your Company",
            customerChart: Array.isArray(customerChartArray) ? customerChartArray : mockDashboardData.customerChart || []
        };

    } catch (error) {
        console.error("Errore nel recupero dati:", error);
        // If there is an error (like network issues), return mock data as fallback
        return mockDashboardData;
    }
};

