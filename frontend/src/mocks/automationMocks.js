export const initialAutomations = [
    {
        id: 1,
        name: "Birthday Greetings",
        active: true,
        trigger: "Birthday day",
        action: "Send Email",
        templateName: "Happy Birthday Classic",
        stats: { sentToday: 3 }
    },
    {
        id: 2,
        name: "Cart Recovery",
        active: true,
        trigger: "Checkout abandoned (1h)",
        action: "Send SMS",
        templateName: "Did you forget something?",
        stats: { sentToday: 1 }
    },
    {
        id: 3,
        name: "Welcome New Customers",
        active: false,
        trigger: "New registration",
        action: "Send WhatsApp",
        templateName: "Welcome Pack 2026",
        stats: { sentToday: 0 }
    }
];