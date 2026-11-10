import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function MobileBottomBar({ language, onOpenContact }) {
  const isHindi = language === 'hi';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-300 px-3 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="max-w-md mx-auto">
        
        {/* Single unified button for Call and WhatsApp */}
        <button
          onClick={() => {
            if (onOpenContact) {
              onOpenContact();
            } else {
              window.location.href = CLINIC_CONFIG.contact.phoneTel;
            }
          }}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-teal-800 hover:bg-teal-900 active:bg-black text-white rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg active:scale-98 transition-all"
        >
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-teal-300" />
              <span>{isHindi ? 'कॉल' : 'CALL'}</span>
            </span>
            <span className="text-teal-400/70 font-bold">/</span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-300 fill-current" />
              <span>{isHindi ? 'व्हाट्सएप' : 'WHATSAPP'}</span>
            </span>
          </div>
          <span className="text-[11px] text-teal-200 font-semibold tracking-normal ml-0.5">
            ({CLINIC_CONFIG.contact.phoneRaw})
          </span>
        </button>

      </div>
    </div>
  );
}
