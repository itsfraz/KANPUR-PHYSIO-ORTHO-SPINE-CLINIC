import React, { useState } from 'react';
import { 
  Activity, 
  Bone, 
  ShieldAlert, 
  Flame, 
  Trophy, 
  HeartPulse, 
  Stethoscope, 
  Brain, 
  MessageCircle, 
  Phone, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function Services({ language, onOpenContact }) {
  const isHindi = language === 'hi';
  const [activeCategory, setActiveCategory] = useState('all');

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-red-500" />;
      case 'Activity': return <Activity className="w-5 h-5 text-teal-600" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-500" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-sky-600" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-600" />;
      default: return <Activity className="w-5 h-5 text-teal-600" />;
    }
  };

  const filteredServices = activeCategory === 'all' 
    ? CLINIC_CONFIG.services 
    : CLINIC_CONFIG.services.filter(s => s.id === activeCategory);

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>{isHindi ? 'उपचार एवं रिहैबिलिटेशन' : 'Evidence-Based Treatments'}</span>
          </div>

          {/* MANDATORY HEADING RULE: DARK BLACK, EXTRA-BOLD, UPPERCASE BLOCK LETTERS */}
          <h2 className="text-black font-extrabold uppercase tracking-tight sm:tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
            {isHindi ? 'हमारी फिजियोथेरेपी एवं पुनर्वास सेवाएं' : 'OUR PHYSIOTHERAPY & REHABILITATION SERVICES'}
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-teal-600 mx-auto mt-3 sm:mt-4 rounded-full" />

          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-sm md:text-base">
            {isHindi 
              ? 'प्रत्येक मरीज के लिए विशिष्ट जांच, दर्द निवारक व्यायाम और पुनर्वास प्रोटोकॉल' 
              : 'Targeted physical therapy protocols designed to restore pain-free movement, prevent surgery, and optimize functional recovery.'}
          </p>
        </div>

        {/* 3 Core Focus Pillars (Featured Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {CLINIC_CONFIG.specialties.map((spec) => (
            <div 
              key={spec.id} 
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 to-sky-600 group-hover:h-2 transition-all" />

              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 group-hover:bg-teal-700 group-hover:text-white transition-all">
                  {spec.id === 'physiotherapy' && <Activity className="w-6 h-6 sm:w-7 sm:h-7" />}
                  {spec.id === 'ortho-rehab' && <Bone className="w-6 h-6 sm:w-7 sm:h-7" />}
                  {spec.id === 'spine-care' && <ShieldAlert className="w-6 h-6 sm:w-7 sm:h-7" />}
                </div>

                <h3 className="text-black font-extrabold text-base sm:text-lg lg:text-xl uppercase tracking-wide mb-1">
                  {isHindi ? spec.titleHindi : spec.title}
                </h3>
                
                <p className="text-[11px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider mb-2.5 sm:mb-3">
                  {spec.subtitle}
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {spec.description}
                </p>

                <ul className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                  {spec.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`${CLINIC_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Dr. Mohammad Fahad Alam, I would like to enquire about ${spec.title} at Kanpur Physio Ortho Spine Clinic.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-teal-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition"
              >
                <MessageCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{isHindi ? 'व्हाट्सएप पर पूछें' : 'ENQUIRE ON WHATSAPP'}</span>
              </a>
            </div>
          ))}
        </div>

        {/* 6 Condition & Rehabilitation Categories Grid */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6">
            <div>
              <h3 className="text-black font-extrabold uppercase tracking-wide text-base sm:text-lg md:text-xl">
                {isHindi ? 'विस्तृत उपचार श्रेणियां' : 'TARGETED REHABILITATION CATEGORIES'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {isHindi ? 'अपनी समस्या के अनुसार उपचार की जानकारी प्राप्त करें' : 'Browse clinical protocols tailored to specific orthopedic & spine conditions'}
              </p>
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-bold uppercase transition ${
                  activeCategory === 'all' 
                    ? 'bg-black text-white' 
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {isHindi ? 'सभी देखें' : 'ALL (6)'}
              </button>
              {CLINIC_CONFIG.services.map(s => (
                <button
                  key={s.id}
                  onClick={() => setActiveCategory(s.id)}
                  className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold uppercase transition ${
                    activeCategory === s.id 
                      ? 'bg-teal-700 text-white' 
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {s.id.split('-')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 truncate">
                      {service.tag}
                    </span>
                  </div>

                  <h4 className="text-black font-extrabold uppercase tracking-wide text-sm sm:text-base mb-1.5 sm:mb-2">
                    {isHindi ? service.nameHindi : service.name}
                  </h4>

                  <p className="text-slate-600 text-xs leading-relaxed mb-3 sm:mb-4">
                    {service.summary}
                  </p>

                  <div className="mb-3 sm:mb-4">
                    <div className="text-[10px] sm:text-[11px] font-black uppercase text-slate-800 mb-1.5">
                      {isHindi ? 'प्रमुख लक्षण एवं स्थितियां:' : 'Conditions Treated:'}
                    </div>
                    <ul className="space-y-1 sm:space-y-1.5">
                      {service.conditions.map((cond, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
                          <span className="text-teal-600 font-bold shrink-0">•</span>
                          <span>{cond}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-2.5 sm:p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4 sm:mb-5">
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase text-slate-500 block mb-1">
                      {isHindi ? 'नैदानिक दृष्टिकोण:' : 'Therapeutic Approach:'}
                    </span>
                    <p className="text-[11px] text-slate-700 font-medium leading-relaxed">
                      {service.approach}
                    </p>
                  </div>
                </div>

                <a
                  href={`${CLINIC_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Dr. Mohammad Fahad Alam, I would like to consult about ${service.name} at Kanpur Physio Ortho Spine Clinic.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span>{isHindi ? 'व्हाट्सएप पूछताछ' : 'ENQUIRE ON WHATSAPP'}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Therapies & Modalities Sub-Section */}
        {CLINIC_CONFIG.featureFlags.showModalitiesSection && (
          <div className="mt-12 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 uppercase tracking-widest mb-1">
                  <Zap className="w-3.5 h-3.5 shrink-0" />
                  <span>{isHindi ? 'उन्नत थेरेपी उपकरण' : 'Specialized Modalities & Equipment'}</span>
                </div>
                <h3 className="text-black font-extrabold uppercase tracking-wide text-lg sm:text-xl md:text-2xl">
                  {isHindi ? 'विशेष इलेक्ट्रोथेरेपी एवं मैनुअल तकनीक' : 'SPECIALIZED THERAPIES & MODALITIES'}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`${CLINIC_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent('Hello Dr. Mohammad Fahad Alam, I would like to check which therapy modality (IFT, Ultrasound, Dry Needling, Laser, Cupping) is suitable for my pain condition.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 bg-black hover:bg-slate-800 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider transition inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>{isHindi ? 'उपयुक्तता जानें' : 'CONFIRM SUITABILITY'}</span>
                </a>
              </div>
            </div>

            {/* Modalities Pill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 pt-5 sm:pt-6">
              {CLINIC_CONFIG.modalities.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50 hover:bg-teal-50/50 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 transition-all text-left flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded-full inline-block mb-1.5 sm:mb-2">
                      {item.badge}
                    </span>
                    <h5 className="text-black font-extrabold text-xs sm:text-sm uppercase tracking-wide mb-1">
                      {item.name}
                    </h5>
                    <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                      {item.desc}
                    </p>
                  </div>
                  <div className="text-[10px] text-teal-700 font-bold flex items-center gap-1">
                    <span>Clinical Assessment</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>

            {/* Mandatory Clinical Evaluation Disclaimer Note */}
            <div className="mt-5 sm:mt-6 p-3.5 sm:p-4 bg-amber-50/80 border border-amber-200/80 rounded-xl sm:rounded-2xl flex items-start gap-2.5 sm:gap-3">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-[11px] sm:text-xs text-amber-950 leading-relaxed">
                <strong className="font-extrabold uppercase tracking-wide">
                  {isHindi ? 'क्लीनिकल परामर्श नोट:' : 'Clinical Consultation & Suitability Note:'}
                </strong>{' '}
                {isHindi 
                  ? 'कृपया ध्यान दें: सभी उपकरण (IFT, अल्ट्रासाउंड, लेजर, ड्राई नीडलिंग, हिजामा आदि) मरीज की शारीरिक जांच के बाद ही आवश्यकतानुसार निर्धारित किए जाते हैं। अनुकूलित उपचार योजना हेतु डॉ. मोहम्मद फहद आलम से परामर्श करें।' 
                  : 'Please confirm with clinic for a tailored treatment plan. Modalities are prescribed strictly following a physical evaluation by Dr. Mohammad Fahad Alam.'}
              </div>
            </div>

          </div>
        )}

        {/* Clinical Patient Safety / Red Flag Advisory */}
        <div className="mt-12 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-red-50 text-red-600 shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-black font-extrabold uppercase text-xs sm:text-sm tracking-wide">
                {isHindi ? 'स्पाइन मरीज सुरक्षा एवं रेड फ्लैग सूचना' : 'CLINICAL SAFETY & RED FLAG ADVISORY'}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed max-w-2xl">
                {isHindi 
                  ? 'यदि रीढ़ या गर्दन में दर्द के साथ अचानक मूत्राशय/मल नियंत्रण में कमी, दोनों पैरों में तेजी से कमजोरी, या सुन्नता महसूस हो, तो तुरंत आपातकालीन अस्पताल चिकित्सा जांच कराएं।' 
                  : 'If severe back or neck pain is accompanied by sudden bowel/bladder dysfunction, progressive bilateral lower limb weakness, or saddle anesthesia, seek immediate emergency medical evaluation prior to elective outpatient therapy.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              if (onOpenContact) {
                onOpenContact('Hello Dr. Mohammad Fahad Alam, I have acute spine or joint symptoms and need immediate clinical guidance.');
              } else {
                window.location.href = CLINIC_CONFIG.contact.phoneTel;
              }
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-black hover:bg-slate-800 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider transition shrink-0 text-center flex items-center justify-center gap-1.5 active:scale-98 shadow-sm"
          >
            <div className="flex items-center gap-1.5">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{isHindi ? 'कॉल' : 'CALL'}</span>
              </span>
              <span className="text-teal-400/70 font-bold">/</span>
              <span className="flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-current shrink-0" />
                <span>{isHindi ? 'व्हाट्सएप' : 'WHATSAPP'}</span>
              </span>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
