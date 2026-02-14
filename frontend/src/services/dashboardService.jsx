
const API_URL = "/api";

export const fetchDashboardData = async () => {
    try {
        const [statsRes, topStoresRes, campaignsRes, companyNameRes, customerChartRes] = await Promise.all([
            fetch(`${API_URL}/dashboard/stats`),
            fetch(`${API_URL}/dashboard/topStores`),
            fetch(`${API_URL}/dashboard/campaigns`),
            fetch(`${API_URL}/company/info`),
            fetch(`${API_URL}/dashboard/customerChart`)
        ]);

        // Controlliamo se ci sono errori, altrimenti convertiamo in JSON
        const stats = statsRes.ok ? await statsRes.json() : [];
        const topStores = topStoresRes.ok ? await topStoresRes.json() : [];
        const campaigns = campaignsRes.ok ? await campaignsRes.json() : [];
        const companyName = companyNameRes.ok ? await companyNameRes.json() || [] : "La tua azienda";
        const customerChart = customerChartRes.ok ? await customerChartRes.json() : {};

        // Convert it to an array if it's not already
        const customerChartArray = customerChart.trend || [];

        // 3. Ritorniamo i dati al componente React
        return {
            stats: Array.isArray(stats) ? stats : [],
            topStores: Array.isArray(topStores) ? topStores : [],
            campaigns: Array.isArray(campaigns) ? campaigns : [],
            companyName: companyName.name || "La tua azienda",
            customerChart: Array.isArray(customerChartArray) ? customerChartArray : []
        };

    } catch (error) {
        console.error("Errore nel recupero dati:", error);
        // Se c'è un errore, restituisce un oggetto vuoto per non rompere la pagina
        return { stats: [], topStores: [], campaigns: [], companyName: "La tua azienda", customerChart: [] };
    }
};

