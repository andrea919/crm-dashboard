import React from "react";
import { Mail, MessageSquare, Podcast, MessageCircle } from "lucide-react";
import { PageHeader } from "../layout/PageHeader";
import { CampaignTypeCard } from "./CampaignTypeCards";
import { CampaignsTable } from "./CampaignsOverview";

const campaignTypes = [
  {
    id: 'raccoltaPunti',
    title: 'Raccolta Punti',
    description: 'Invia comunicazioni via email ai tuoi contatti.',
    action: 'Crea raccolta punti',
    icon: Mail,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    id: 'tesseraSconto',
    title: 'Tessera Sconto',
    description: 'Invia promemoria e offerte via SMS.',
    action: 'Crea tessera sconto',
    icon: MessageSquare,
    color: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'cartaRegalo',
    title: 'Carta Regalo',
    description: 'Comunica con i tuoi clienti tramite WhatsApp.',
    action: 'Crea carta regalo',
    icon: MessageCircle,
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    id: 'tesseraAbbonamenti',
    title: 'Tessera Abbonamenti',
    description: 'Crea campagne personalizzate per fidelizzare i tuoi clienti.',
    action: 'Crea tessera abbonamenti',
    icon: Podcast,
    color: 'bg-slate-50 text-slate-600'
  }
];

const mockData = [
  {
    id: '1',
    name: 'Promo Estiva',
    type: 'email',
    status: 'inviata',
    sendDate: '21/03/2025',
    recipients: 1250,
    openRate: 45
  },
  {
    id: '2',
    name: 'Reminder Appuntamento',
    type: 'sms',
    status: 'pianificata',
    sendDate: '25/07/2025',
    recipients: 31,
    openRate: 0
  },
  {
    id: '3',
    name: 'Black Friday Anticipato',
    type: 'whatsapp',
    status: 'bozza',
    sendDate: null,
    recipients: 0,
    openRate: 0
  },
];

const StatusBadge = ({ status }) => {
  // Mappa i colori in base allo stato
  const styles = {
    inviata: "bg-emerald-100 text-emerald-700 border-emerald-200",
    pianificata: "bg-blue-100 text-blue-700 border-blue-200",
    bozza: "bg-slate-100 text-slate-600 border-slate-200",
  };

  const labels = {
    inviata: "Inviata",
    pianificata: "Pianificata",
    bozza: "Bozza",
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
    console.log("Crea nuova campagna di tipo:", typeId);
    alert(`Funzione di creazione campagna di tipo ${typeId} non implementata`)
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10 px-4 md:px-0">

      {/* Header Pagina */}
      <PageHeader
        title="Campagne"
        description="Gestisci tutte le tue campagne di comunicazione in un unico posto."
        actionLabel="Crea Campagna"
        onActionClick={() => alert("Funzione di creazione campagna non implementata")}
      />

      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 px-1">
          Inizia una nuova attività
        </h2>
        {/* campaignTypes ora è importato correttamente */}
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

      {/* Nasconde la tabella su mobile per scroll orizzontale */}
      <section className="hidden md:block">
        <CampaignsTable data={mockData} />
      </section>

    </div>
  );
}