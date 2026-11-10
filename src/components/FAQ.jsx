import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  MessageCircle, 
  Search, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function FAQ({ language, onOpenContact }) {
  const isHindi = language === 'hi';
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const filteredFaqs = CLINIC_CONFIG.faqs.filter((faq) => {
    const q = isHindi ? faq.qHindi : faq.q;
    const a = isHindi ? faq.aHindi : faq.a;
    return q.toLowerCase().includes(searchQuery.toLowerCase()) || 
           a.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isHindi ? 'मरीजों के सामान्य प्रश्न' : 'Clear Patient Guidance'}</span>
          </div>

          {/* MANDATORY HEADING RULE: DARK BLACK, EXTRA-BOLD, UPPERCASE BLOCK LETTERS */}
          <h2 className="text-black font-extrabold uppercase tracking-tight sm:tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
            {isHindi ? 'अक्सर पूछे जाने वाले प्रश्न' : 'FREQUENTLY ASKED QUESTIONS'}
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-teal-600 mx-auto mt-3 sm:mt-4 rounded-full" />

          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-sm md:text-base">
            {isHindi 
              ? 'अपॉइंटमेंट, होम विजिट, क्लीनिक समय और परामर्श शुल्क से संबंधित आवश्यक जानकारी' 
              : 'Answers to key inquiries regarding booking, home visits, operational hours, and treatment expectations.'}
          </p>
        </div>

        {/* Quick Search Box */}
        <div className="mb-6 sm:mb-8 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isHindi ? 'प्रश्न खोजें (उदा: होम विजिट, समय, शुल्क)...' : 'Search question (e.g., home visit, timings, fees)...'}
            className="w-full pl-10 pr-4 py-2.5 bg-white text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:border-teal-600 shadow-2xs"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-xl sm:rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-teal-500 shadow-sm' : 'border-slate-200/90 shadow-2xs hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-3.5 sm:p-5 text-left flex items-start justify-between gap-3 focus:outline-hidden"
                  >
                    <span className="flex items-start gap-2.5 sm:gap-3 min-w-0">
                      <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                        isOpen ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        Q{idx + 1}
                      </span>
                      <span className="text-black font-extrabold uppercase tracking-tight sm:tracking-wide text-xs sm:text-sm md:text-base leading-snug">
                        {isHindi ? faq.qHindi : faq.q}
                      </span>
                    </span>

                    <span className="p-1 rounded-lg bg-slate-50 text-slate-600 shrink-0 ml-2">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-teal-700" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      <p>{isHindi ? faq.aHindi : faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-6 sm:py-8 bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
              No matching questions found. Please call Dr. Mohammad Fahad Alam directly.
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-black font-extrabold uppercase text-xs sm:text-sm md:text-base">
              {isHindi ? 'क्या आपका कोई अन्य प्रश्न है?' : 'HAVE A SPECIFIC MEDICAL OR TIMING INQUIRY?'}
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 sm:mt-1">
              {isHindi 
                ? 'डॉ. मोहम्मद फहद आलम से सीधे फोन या व्हाट्सएप पर परामर्श प्राप्त करें।' 
                : 'Speak directly with Dr. Mohammad Fahad Alam at 9453201140 for personal assessment.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto shrink-0">
            {/* Single button for Call and WhatsApp */}
            <button
              onClick={() => {
                if (onOpenContact) {
                  onOpenContact('Hello Dr. Mohammad Fahad Alam, I have a question regarding physiotherapy treatment at Kanpur Physio Ortho Spine Clinic.');
                } else {
                  window.location.href = CLINIC_CONFIG.contact.phoneTel;
                }
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-teal-800 hover:bg-teal-900 active:bg-black text-white rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition active:scale-98 shadow-sm"
            >
              <div className="flex items-center gap-1.5">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                  <span>{isHindi ? 'कॉल' : 'CALL'}</span>
                </span>
                <span className="text-teal-400/70 font-bold">/</span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-300 fill-current shrink-0" />
                  <span>{isHindi ? 'व्हाट्सएप' : 'WHATSAPP'}</span>
                </span>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
