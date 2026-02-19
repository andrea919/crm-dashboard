import React from "react";
import { Mail, MessageSquare, Smartphone, Edit, Trash2, Copy } from "lucide-react";

const TemplateCard = ({ data, onEdit, onDelete, onDuplicate }) => {

    // Configurazione icone e colori per canale
    const channelConfig = {
        sms: {
            icon: Smartphone,
            color: "text-orange-600",
            bg: "bg-orange-50",
            label: "SMS",
            border: "border-slate-200"
        },
        email: {
            icon: Mail,
            color: "text-purple-600",
            bg: "bg-purple-50",
            label: "Email",
            border: "border-purple-100"
        },
        whatsapp: {
            icon: MessageSquare,
            color: "text-cyan-600",
            bg: "bg-cyan-50",
            label: "WhatsApp",
            border: "border-cyan-100"
        }
    };

    const config = channelConfig[data.channel];
    const Icon = config.icon;

    return (
        <div className={`group flex flex-col justify-between rounded-2xl border bg-white p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${config.border}`}>

            {/* HEADER: Nome e Badge Canale */}
            <div className="flex items-start justify-between p-5 pb-3">
                <div>
                    <div className={`mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${config.bg} ${config.color}`}>
                        <Icon size={12} strokeWidth={3} />
                        {config.label}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 line-clamp-1" title={data.name}>
                        {data.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Modificato: {data.lastModified}</p>
                </div>
            </div>

            {/* BODY: Preview Contenuto */}
            <div className="flex-1 px-5 py-2">
                {data.channel === 'email' ? (
                    // Preview Visuale per Email
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-50 border border-slate-100">
                        {data.previewImage ? (
                            <img src={data.previewImage} alt="Preview" className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" />
                        ) : (
                            <div className="flex h-full items-center justify-center text-slate-300">
                                <Mail size={32} />
                            </div>
                        )}
                    </div>
                ) : (
                    // Chat Bubble per SMS/WhatsApp
                    <div className={`relative rounded-lg p-4 text-sm font-medium leading-relaxed text-slate-600 ${config.bg}`}>
                        <p className="line-clamp-3">
                            {data.content.split(/(\$\{.*?\})/).map((part, index) =>
                                // Evidenzia le variabili come ${nome}
                                part.match(/^\$\{.*\}$/) ? (
                                    <span key={index} className="rounded bg-yellow-200 px-1 text-yellow-800 border border-yellow-300 mx-0.5 font-bold text-xs font-mono">
                                        {part}
                                    </span>
                                ) : (
                                    part
                                )
                            )}
                        </p>
                    </div>
                )}
            </div>

            {/* FOOTER: Statistiche e Azioni */}
            <div className="mt-4 flex items-center justify-between border-t border-slate-50 bg-slate-50/50 px-5 py-3 rounded-b-2xl">

                {/* Info contestuali (Caratteri per SMS, OpenRate per Email) */}
                <div className="text-xs font-medium text-slate-500">
                    {data.channel === 'sms' && (
                        <span>{data.stats.chars} caratteri <span className="text-slate-300 mx-1">|</span> {data.stats.segments} SMS</span>
                    )}
                    {data.channel === 'email' && (
                        <span className="text-blue-600">Open Rate: {data.stats.openRate}</span>
                    )}
                    {data.channel === 'whatsapp' && (
                        <span className="text-green-600">Read Rate: {data.stats.readRate}</span>
                    )}
                </div>

                {/* Bottoni Azione */}
                <div className="flex gap-1 opacity-60 transition-opacity group-hover:opacity-100">
                    <button onClick={() => onDuplicate(data.id)} className="rounded-md p-2 hover:bg-white hover:text-blue-600 hover:shadow-sm" title="Duplica">
                        <Copy size={16} />
                    </button>
                    <button onClick={() => onEdit(data.id)} className="rounded-md p-2 hover:bg-white hover:text-slate-900 hover:shadow-sm" title="Modifica">
                        <Edit size={16} />
                    </button>
                    <button onClick={() => onDelete(data.id)} className="rounded-md p-2 hover:bg-white hover:text-red-600 hover:shadow-sm" title="Elimina">
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TemplateCard;