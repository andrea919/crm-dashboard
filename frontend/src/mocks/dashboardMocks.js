export const mockDashboardData = {
    companyName: "Global Retail Corp",
    stats: [
        { title: "Total Customers", value: "12,845", iconName: "Users", color: "bg-blue-50 text-blue-600", change: "+12%", isNegative: false, subtext: "since last month" },
        { title: "Revenue", value: "$45,200", iconName: "TrendingUp", color: "bg-emerald-50 text-emerald-600", change: "+8%", isNegative: false, subtext: "vs target" },
        { title: "Active Cards", value: "850", iconName: "CreditCard", color: "bg-amber-50 text-amber-600", change: "-3%", isNegative: true, subtext: "expired cards" },
        { title: "Conversion Rate", value: "4.2%", iconName: "Activity", color: "bg-purple-50 text-purple-600", change: "+0.5%", isNegative: false, subtext: "avg session" }
    ],
    topStores: [
        { name: "London Flagship", revenue: 15400, count: 450 },
        { name: "Paris Central", revenue: 12100, count: 320 },
        { name: "Berlin Hub", revenue: 9800, count: 210 },
        { name: "Rome Boutique", revenue: 7500, count: 180 }
    ],
    campaigns: [
        { id: 1, name: "Summer Sale 2026", status: "Active", progress: 75, timeLeft: "4 days left", timeColor: "text-emerald-500", color: "bg-blue-600" },
        { id: 2, name: "Flash Promo", status: "Active", progress: 40, timeLeft: "12 hours left", timeColor: "text-red-500", color: "bg-orange-500" }
    ],
    customerChart: [
        { name: 'Jan', active: 400 }, { name: 'Feb', active: 600 }, { name: 'Mar', active: 550 },
        { name: 'Apr', active: 800 }, { name: 'May', active: 950 }, { name: 'Jun', active: 1100 }
    ]
};