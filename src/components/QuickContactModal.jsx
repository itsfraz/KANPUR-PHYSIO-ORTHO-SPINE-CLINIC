import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  X, 
  Copy, 
  Check, 
  Clock, 
  MapPin, 
  ShieldCheck,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function QuickContactModal({ 
  isOpen, 
  onClose, 
  language = 'en',
  customMessage = '' 
}) {
  const [copied, setCopied] = useState(false);
  const isHindi = language === 'hi';

  if (!isOpen) return null;

  const handleCopy = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(CLINIC_CONFIG.contact.phoneRaw);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const messageText = customMessage || (isHindi 
    ? 'नमस्ते डॉ. फहद आलम, मैं कानपुर फिजियो ऑर्थो स्पाइन क्लीनिक में अपॉइंटमेंट / परामर्श के लिए संपर्क करना चाहता हूँ।'
    : 'Hello Dr. Mohammad Fahad Alam, I would like to consult with you at Kanpur Physio Ortho Spine Clinic.');

  const whatsappHref = `${CLINIC_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(messageText)}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 relative border-b border-slate-800">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div className="bg-white px-2 py-1 rounded-lg border border-slate-700 shadow-2xs inline-flex items-center">
              <img 
                src="/images/LOgo.png" 
                alt="Clinic Logo" 
                className="h-6 sm:h-7 w-auto max-w-[150px] object-contain" 
              />
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-[10px] font-extrabold uppercase tracking-wider">
              <span>{isHindi ? 'एक ही नंबर पर दोनों' : 'Same Number for Both'}</span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-white flex items-center gap-1.5">
            <span className="flex items-center gap-1.5 text-teal-300">
              <Phone className="w-4 h-4 text-teal-300 shrink-0" />
              <span>{isHindi ? 'कॉल' : 'CALL'}</span>
            </span>
            <span className="text-teal-500 font-bold">/</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-current shrink-0" />
              <span>{isHindi ? 'व्हाट्सएप' : 'WHATSAPP'}</span>
            </span>
          </h3>
          <p className="text-xs text-slate-300 mt-0.5 font-medium">
            {CLINIC_CONFIG.doctor.name} • {CLINIC_CONFIG.clinicName}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 space-y-3.5 overflow-y-auto">
          
          {/* Quick Helpline Strip with Copy */}
          <div className="text-xs text-slate-700 bg-slate-100 border border-slate-200 p-3 rounded-xl flex items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                {isHindi ? 'आधिकारिक हेल्पलाइन' : 'Official Clinic Line'}
              </p>
              <p className="text-base font-extrabold text-black tracking-wide">
                {CLINIC_CONFIG.contact.phoneDisplay}
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="text-[11px] font-bold text-teal-800 hover:text-teal-950 flex items-center gap-1 shrink-0 px-2.5 py-1.5 rounded-lg bg-white hover:bg-teal-50 border border-slate-300 shadow-2xs transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (isHindi ? 'कॉपी हुआ!' : 'Copied!') : (isHindi ? 'कॉपी करें' : 'Copy')}</span>
            </button>
          </div>

          {/* Action 1: Call Phone */}
          <a
            href={CLINIC_CONFIG.contact.phoneTel}
            onClick={onClose}
            className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-slate-900 hover:bg-black text-white shadow-md active:scale-98 transition group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-teal-300" />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                  {isHindi ? 'सीधे फोन कॉल करें' : 'DIRECT PHONE CALL'}
                </p>
                <p className="text-[11px] text-slate-300">
                  {CLINIC_CONFIG.contact.phoneDisplay}
                </p>
              </div>
            </div>
            <span className="text-[11px] font-bold text-teal-300 group-hover:translate-x-0.5 transition-transform uppercase tracking-wider">
              {isHindi ? 'कॉल करें' : 'CALL'} &rarr;
            </span>
          </a>

          {/* Action 2: WhatsApp Chat */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md active:scale-98 transition group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                  {isHindi ? 'व्हाट्सएप चैट करें' : 'WHATSAPP CHAT'}
                </p>
                <p className="text-[11px] text-emerald-100">
                  {isHindi ? 'परामर्श या एक्स-रे/रिपोर्ट भेजें' : 'Send message or share reports'}
                </p>
              </div>
            </div>
            <span className="text-[11px] font-bold text-emerald-100 group-hover:translate-x-0.5 transition-transform uppercase tracking-wider">
              {isHindi ? 'चैट करें' : 'CHAT'} &rarr;
            </span>
          </a>

          {/* Quick Clinic Timings Info */}
          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600 space-y-1.5">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>
                {isHindi 
                  ? `समय: ${CLINIC_CONFIG.schedule.timingsHindi} (सातों दिन खुला)` 
                  : `Operating Hours: ${CLINIC_CONFIG.schedule.timings} (${CLINIC_CONFIG.schedule.workingDays})`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>
                {isHindi 
                  ? 'तत्काल प्रतिक्रिया • कोई अग्रिम ऑनलाइन भुगतान आवश्यक नहीं' 
                  : 'Fast Response • Direct Doctor Contact • No Advance Online Payment'}
              </span>
            </div>
          </div>

        </div>

        {/* Footer cancel button for mobile */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 sm:hidden">
          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs font-bold text-slate-600 hover:text-black uppercase tracking-wider text-center"
          >
            {isHindi ? 'रद्द करें' : 'Cancel'}
          </button>
        </div>

      </div>
    </div>
  );
}

