export const campaignTypes = [
  {
    id: 'pointsCollection',
    title: 'Points Collection',
    description: 'Manage loyalty points for your customers.',
    action: 'Create points collection',
    icon: 'Mail', 
    color: 'bg-purple-50 text-purple-600'
  },
  {
    id: 'discountCard',
    title: 'Discount Card',
    description: 'Send reminders and offers via SMS.',
    action: 'Create discount card',
    icon: 'MessageSquare',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'giftCard',
    title: 'Gift Card',
    description: 'Communicate with customers via WhatsApp.',
    action: 'Create gift card',
    icon: 'MessageCircle',
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    id: 'membershipCard',
    title: 'Membership Card',
    description: 'Custom loyalty campaigns for your clients.',
    action: 'Create membership',
    icon: 'Podcast',
    color: 'bg-slate-50 text-slate-600'
  }
];

export const mockCampaignsList = [
  { 
    id: '1', 
    name: 'Summer Promo', 
    type: 'email', 
    status: 'sent', 
    sendDate: '2025-03-21', 
    recipients: 1250, 
    openRate: 45 
  },
  { 
    id: '2', 
    name: 'Appointment Reminder', 
    type: 'sms', 
    status: 'scheduled', 
    sendDate: '2025-07-25', 
    recipients: 31, 
    openRate: 0 
  },
  { 
    id: '3', 
    name: 'Early Black Friday', 
    type: 'whatsapp', 
    status: 'draft', 
    sendDate: null, 
    recipients: 0, 
    openRate: 0 
  },
];