import React from 'react';
import { Mail, MessageSquare, Podcast, MessageCircle } from "lucide-react";

export const TypeIcon = ({ type }) => {

    const t = type ? type.toLowerCase() : "";

    if (t === 'email') {
        return (
            <div className="px-1 py-0.5 bg-purple-50 rounded-full text-purple-600 inline-flex items-center justify-center">
                <Mail size={18} />
                <span className="pl-2 text-purple-600">Email</span>
            </div>
        );
    }

    if (t === 'sms') {
        return (
            <div className="px-1 py-0.5 bg-blue-50 rounded-full text-blue-600 inline-flex items-center justify-center">
                <MessageSquare size={18} />
                <span className="pl-2 text-blue-600">Sms</span>
            </div>
        );
    }

    if (t === 'whatsapp') {
        return (
            <div className="px-1 py-0.5 bg-cyan-50 rounded-full text-cyan-600 inline-flex items-center justify-center">
                <MessageCircle size={18} />
                <span className="pl-2 text-cyan-600">WhatsApp</span>
            </div>
        );
    }

    return (
        <span className="text-sm font-medium text-slate-500">{type || "N/D"}</span>
    );
};