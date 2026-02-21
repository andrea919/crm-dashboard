export const initialTemplates = [
    {
        id: 1,
        name: "Happy Birthday Classic",
        channel: "sms",
        content: "Hi ${firstName}, happy birthday from the whole team! Come visit us to collect your special gift.",
        lastModified: "2 hours ago",
        stats: { chars: 92, segments: 1 }
    },
    {
        id: 2,
        name: "Summer Newsletter",
        channel: "email",
        content: "<h1>Summer Sale!</h1><p>Discover the new collection with discounts up to 50%...</p>",
        previewImage: "https://via.placeholder.com/300x150/e2e8f0/94a3b8?text=Email+Preview",
        lastModified: "1 day ago",
        stats: { openRate: "45%" }
    },
    {
        id: 3,
        name: "Appointment Reminder",
        channel: "whatsapp",
        content: "Hi ${firstName}, we remind you of your appointment tomorrow at ${time}. Reply NO to cancel.",
        lastModified: "3 days ago",
        stats: { readRate: "92%" }
    },
    {
        id: 4,
        name: "VIP Welcome Pack",
        channel: "email",
        content: "Welcome to our exclusive club...",
        previewImage: "https://via.placeholder.com/300x150/dbeafe/1e40af?text=Welcome+Pack",
        lastModified: "1 week ago",
        stats: { openRate: "60%" }
    },
    {
        id: 5,
        name: "Flash Offer",
        channel: "sms",
        content: "Today only: 20% discount on the entire catalog by showing this SMS at the checkout.",
        lastModified: "2 weeks ago",
        stats: { chars: 88, segments: 1 }
    }
];