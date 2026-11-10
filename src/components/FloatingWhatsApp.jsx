import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function FloatingWhatsApp({ language }) {
  const isHindi = language === 'hi';
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end">
      
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-2 animate-bounce">
          <span className="font-extrabold text-teal-800 uppercase">
            {isHindi ? 'ऑनलाइन परामर्श चाहिए?' : 'Need Physiotherapy Advice?'}
          </span>
          <span className="text-[11px] text-slate-600">
            {isHindi ? 'व्हाट्सएप पर बात करें' : 'Chat on WhatsApp'}
          </span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-black ml-1 font-bold text-xs"
            aria-label="Close tooltip"
          >
            ✕
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={`${CLINIC_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent('Hello Dr. Mohammad Fahad Alam, I would like to consult with you at Kanpur Physio Ortho Spine Clinic.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 group relative"
        title="Chat with Dr. Mohammad Fahad Alam on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}

