export const initialTemplates = [
    {
        id: 1,
        name: "Buon Compleanno Classic",
        channel: "sms", // sms, email, whatsapp
        content: "Ciao ${nome}, tanti auguri di buon compleanno da tutto il team! Passa a trovarci per il tuo regalo.",
        lastModified: "2 ore fa",
        stats: { chars: 98, segments: 1 }
    },
    {
        id: 2,
        name: "Newsletter Estiva",
        channel: "email",
        content: "<h1>Saldi Estivi!</h1><p>Scopri la nuova collezione con sconti fino al 50%...</p>",
        previewImage: "https://via.placeholder.com/300x150/e2e8f0/94a3b8?text=Email+Preview",
        lastModified: "1 giorno fa",
        stats: { openRate: "45%" }
    },
    {
        id: 3,
        name: "Promemoria Appuntamento",
        channel: "whatsapp",
        content: "Ciao ${nome}, ti ricordiamo il tuo appuntamento domani alle ${ora}. Rispondi NO per disdire.",
        lastModified: "3 giorni fa",
        stats: { readRate: "92%" }
    },
    {
        id: 4,
        name: "Benvenuto VIP",
        channel: "email",
        content: "Benvenuto nel club esclusivo...",
        previewImage: "https://via.placeholder.com/300x150/dbeafe/1e40af?text=Welcome+Pack",
        lastModified: "1 settimana fa",
        stats: { openRate: "60%" }
    },
    {
        id: 5,
        name: "Offerta Lampo",
        channel: "sms",
        content: "Solo per oggi: sconto del 20% su tutto il catalogo mostranddo questo SMS alla cassa.",
        lastModified: "2 settimane fa",
        stats: { chars: 85, segments: 1 }
    }
];