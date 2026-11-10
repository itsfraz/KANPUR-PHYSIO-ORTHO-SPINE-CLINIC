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
  HelpCircle,
  ShieldCheck,
  Check,
  ArrowRight
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

  const filterCategories = [
    { id: 'all', label: isHindi ? 'सभी सेवाएं (६)' : 'ALL SERVICES (6)' },
    { id: 'back-neck-pain', label: isHindi ? 'कमर व गर्दन दर्द' : 'Back & Neck Pain' },
    { id: 'joint-pain-stiffness', label: isHindi ? 'जोड़ों का दर्द' : 'Joint Pain & Stiffness' },
    { id: 'sports-injury', label: isHindi ? 'स्पोर्ट्स इंजरी' : 'Sports Injury' },
    { id: 'post-surgery-rehab', label: isHindi ? 'सर्जरी के बाद' : 'Post-Surgery' },
    { id: 'orthopedic-rehab', label: isHindi ? 'ऑर्थोपेडिक' : 'Orthopedic' },
    { id: 'neuro-rehab', label: isHindi ? 'न्यूरो व पैरालिसिस' : 'Neuro & Paralysis' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? CLINIC_CONFIG.services 
    : CLINIC_CONFIG.services.filter(s => s.id === activeCategory);

  const handleEnquire = (serviceName) => {
    const defaultMsg = isHindi 
      ? `नमस्ते डॉ. मोहम्मद फहद आलम, मैं कानपुर फिजियो ऑर्थो स्पाइन क्लीनिक में ${serviceName} के परामर्श के बारे में जानकारी चाहता हूँ।`
      : `Hello Dr. Mohammad Fahad Alam, I would like to consult regarding ${serviceName} at Kanpur Physio Ortho Spine Clinic.`;

    if (onOpenContact) {
      onOpenContact(defaultMsg);
    } else {
      const phoneClean = CLINIC_CONFIG.contact.phone;
      window.open(`https://wa.me/91${phoneClean}?text=${encodeURIComponent(defaultMsg)}`, '_blank');
    }
  };

  return (
    <section id="services" className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white border-b border-slate-200">
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            SECTION HEADER
            Mandatory Rule: Dark Black, Extra-Bold, Uppercase Tracking
            ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-2xs mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
              {isHindi ? 'वैज्ञानिक एवं प्रमाण-आधारित उपचार' : 'EVIDENCE-BASED REHABILITATION'}
            </span>
          </div>

          <h2 className="text-black font-extrabold uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            {isHindi ? 'हमारी फिजियोथेरेपी एवं पुनर्वास सेवाएं' : 'OUR PHYSIOTHERAPY & REHABILITATION SERVICES'}
          </h2>

          {/* Symmetrical Medical Accent Bar */}
          <div className="flex items-center justify-center gap-2 my-3.5">
            <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-r from-transparent to-teal-500 rounded-full"></div>
            <div className="h-2 w-2 rounded-full bg-teal-600 ring-4 ring-teal-100"></div>
            <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-l from-transparent to-teal-500 rounded-full"></div>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {isHindi 
              ? 'प्रत्येक मरीज के लिए व्यक्तिगत जांच, 100% गैर-सर्जिकल दर्द निवारक पद्धतियां और स्थायी सुधार के लिए पुनर्वास प्रोटोकॉल।' 
              : 'Targeted physical therapy protocols designed to eliminate acute and chronic pain, prevent surgery, and optimize functional mobility.'}
          </p>
        </div>

        {/* ========================================================
            3 CORE FOCUS PILLARS (Top Featured Cards)
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-14 sm:mb-20">
          {CLINIC_CONFIG.specialties.map((spec, index) => {
            const isPhysio = spec.id === 'physiotherapy';
            const isOrtho = spec.id === 'ortho-rehab';
            const isSpine = spec.id === 'spine-care';

            const accentTheme = isPhysio
              ? {
                  badge: 'bg-teal-50 text-teal-800 border-teal-200',
                  iconBg: 'bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-teal-600/25 ring-teal-50',
                  border: 'border-teal-200/80 hover:border-teal-400',
                  pill: isHindi ? 'स्तंभ ०१' : 'CORE 01',
                  btnBg: 'bg-teal-800 hover:bg-teal-900'
                }
              : isOrtho
              ? {
                  badge: 'bg-sky-50 text-sky-800 border-sky-200',
                  iconBg: 'bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-sky-600/25 ring-sky-50',
                  border: 'border-sky-200/80 hover:border-sky-400',
                  pill: isHindi ? 'स्तंभ ०२' : 'CORE 02',
                  btnBg: 'bg-sky-800 hover:bg-sky-900'
                }
              : {
                  badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
                  iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-emerald-600/25 ring-emerald-50',
                  border: 'border-emerald-200/80 hover:border-emerald-400',
                  pill: isHindi ? 'स्तंभ ०३' : 'CORE 03',
                  btnBg: 'bg-emerald-800 hover:bg-emerald-900'
                };

            return (
              <div 
                key={spec.id} 
                className={`relative group bg-white rounded-3xl p-6 sm:p-7 border ${accentTheme.border} shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden`}
              >
                {/* Ambient Top Subtle Glow */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-sky-500 to-emerald-500" />

                <div className="space-y-4">
                  {/* Icon & Category Tag Row */}
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl ${accentTheme.iconBg} flex items-center justify-center shadow-lg ring-4 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300`}>
                      {isPhysio && <Activity className="w-7 h-7" />}
                      {isOrtho && <Bone className="w-7 h-7" />}
                      {isSpine && <ShieldAlert className="w-7 h-7" />}
                    </div>
                    <span className={`text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${accentTheme.badge}`}>
                      {accentTheme.pill}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-black font-extrabold text-lg sm:text-xl uppercase tracking-tight group-hover:text-teal-700 transition-colors">
                      {isHindi ? spec.titleHindi : spec.title}
                    </h3>
                    <p className="text-xs font-bold text-teal-700 uppercase tracking-wide">
                      {spec.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {spec.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {spec.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-slate-50/80 p-2 rounded-xl border border-slate-100/90 text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultation Button */}
                <div className="pt-5 mt-5 border-t border-slate-100">
                  <button
                    onClick={() => handleEnquire(spec.title)}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 ${accentTheme.btnBg} text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-sm active:scale-98 cursor-pointer`}
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300 fill-current shrink-0" />
                    <span>{isHindi ? 'परामर्श हेतु संपर्क करें' : 'ENQUIRE ON WHATSAPP'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            6 TARGETED REHABILITATION CATEGORIES (With Filter Pills)
            ======================================================== */}
        <div className="mb-14 sm:mb-20">
          
          {/* Header & Filter Controls Bar */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-sm mb-6 sm:mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                  {isHindi ? 'विस्तृत उपचार श्रेणियां' : 'TARGETED CLINICAL CONDITIONS'}
                </span>
                <h3 className="text-black font-extrabold uppercase tracking-wide text-lg sm:text-xl md:text-2xl">
                  {isHindi ? 'लक्षित रिहैबिलिटेशन श्रेणियां' : 'SPECIALIZED REHABILITATION PROTOCOLS'}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {isHindi 
                    ? 'अपनी समस्या के अनुसार विशिष्ट प्रोटोकॉल और थैरेपी दृष्टिकोण देखें' 
                    : 'Select a clinical category to view evidence-based treatment protocols and therapeutic approaches'}
                </p>
              </div>

              {/* Refined Filter Pills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {filterCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wide transition-all shadow-2xs cursor-pointer ${
                        isActive
                          ? 'bg-teal-800 text-white shadow-md shadow-teal-900/20'
                          : 'bg-slate-50 text-slate-700 hover:bg-teal-50 hover:text-teal-900 border border-slate-200/90'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 6 Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className="group relative bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200/80 group-hover:bg-teal-50 group-hover:border-teal-200 flex items-center justify-center shrink-0 transition-colors">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200/80">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h4 className="text-black font-extrabold uppercase tracking-tight text-base sm:text-lg group-hover:text-teal-800 transition-colors">
                      {isHindi ? service.nameHindi : service.name}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1">
                      {service.summary}
                    </p>
                  </div>

                  {/* Conditions Treated Box */}
                  <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-100">
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                      <span>{isHindi ? 'प्रमुख लक्षण एवं स्थितियां:' : 'Conditions Treated:'}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {service.conditions.map((cond, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{cond}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Therapeutic Approach Box */}
                  <div className="p-3 bg-teal-50/40 rounded-2xl border border-teal-100/80">
                    <span className="text-[9px] font-black uppercase tracking-wider text-teal-800 block mb-1">
                      {isHindi ? 'नैदानिक दृष्टिकोण:' : 'Therapeutic Approach:'}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {service.approach}
                    </p>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-4 mt-5 border-t border-slate-100">
                  <button
                    onClick={() => handleEnquire(service.name)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-teal-50 hover:bg-teal-700 text-teal-900 hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 border border-teal-200 group-hover:border-teal-700 cursor-pointer shadow-2xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white fill-current shrink-0 transition-colors" />
                    <span>{isHindi ? 'व्हाट्सएप पर पूछें' : 'CONSULT ON WHATSAPP'}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ========================================================
            SPECIALIZED THERAPIES & MODALITIES SUB-SECTION
            ======================================================== */}
        {CLINIC_CONFIG.featureFlags.showModalitiesSection && (
          <div className="mb-14 sm:mb-20 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-black text-teal-800 uppercase tracking-widest bg-teal-50 border border-teal-200 px-3 py-1 rounded-full mb-2">
                  <Zap className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{isHindi ? 'उन्नत फिजियो उपकरण' : 'Advanced Clinical Modalities'}</span>
                </div>
                <h3 className="text-black font-extrabold uppercase tracking-wide text-xl sm:text-2xl md:text-3xl">
                  {isHindi ? 'विशेष इलेक्ट्रोथेरेपी एवं मैनुअल तकनीक' : 'SPECIALIZED THERAPIES & MODALITIES'}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {isHindi 
                    ? 'अत्याधुनिक फिजियोथेरेपी उपकरण दर्द को तेजी से कम करने और मांसपेशियों को सक्रिय करने हेतु' 
                    : 'Targeted physical agents and advanced manual therapy tools used to accelerate tissue healing'}
                </p>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => handleEnquire('Clinical Therapy Modalities (IFT, Traction, Ultrasound, Needling)')}
                  className="w-full sm:w-auto px-5 py-3 bg-teal-800 hover:bg-teal-900 active:bg-black text-white rounded-2xl text-xs font-extrabold uppercase tracking-wider transition-all shadow-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-300 fill-current shrink-0" />
                  <span>{isHindi ? 'उपयुक्तता जानें' : 'CONFIRM SUITABILITY'}</span>
                </button>
              </div>
            </div>

            {/* Modalities Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 pt-6">
              {CLINIC_CONFIG.modalities.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50/80 hover:bg-teal-50/60 p-4 rounded-2xl border border-slate-200/80 hover:border-teal-300 transition-all text-left flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-teal-800 bg-white border border-teal-200/80 px-2 py-0.5 rounded-md inline-block mb-2 shadow-2xs">
                      {item.badge}
                    </span>
                    <h5 className="text-black font-extrabold text-xs sm:text-sm uppercase tracking-tight mb-1.5 group-hover:text-teal-800 transition-colors">
                      {item.name}
                    </h5>
                    <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                      {item.desc}
                    </p>
                  </div>
                  <div className="text-[10px] text-teal-700 font-extrabold uppercase tracking-wider flex items-center gap-1 pt-2 border-t border-slate-200/60">
                    <span>Clinical Use</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Clinical Evaluation Note */}
            <div className="mt-6 p-4 bg-amber-50/90 border border-amber-200 rounded-2xl flex items-start gap-3">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-950 leading-relaxed">
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

        {/* ========================================================
            CLINICAL PATIENT SAFETY / RED FLAG ADVISORY
            ======================================================== */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-red-200 shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-600 shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                  Emergency Care Notice
                </span>
                <h4 className="text-black font-extrabold uppercase text-sm sm:text-base tracking-wide">
                  {isHindi ? 'स्पाइन मरीज सुरक्षा एवं रेड फ्लैग सूचना' : 'CLINICAL SAFETY & RED FLAG ADVISORY'}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                {isHindi 
                  ? 'यदि रीढ़ या गर्दन में दर्द के साथ अचानक मूत्राशय/मल नियंत्रण में कमी, दोनों पैरों में तेजी से कमजोरी, या सुन्नता महसूस हो, तो तुरंत आपातकालीन अस्पताल चिकित्सा जांच कराएं।' 
                  : 'If severe back or neck pain is accompanied by sudden bowel/bladder dysfunction, progressive bilateral lower limb weakness, or saddle numbness, seek immediate emergency medical evaluation prior to elective outpatient therapy.'}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            <button
              onClick={() => {
                if (onOpenContact) {
                  onOpenContact('Hello Dr. Mohammad Fahad Alam, I have acute spine or joint symptoms and need immediate clinical guidance.');
                } else {
                  window.location.href = CLINIC_CONFIG.contact.phoneTel;
                }
              }}
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-black hover:bg-slate-900 active:bg-slate-800 text-white rounded-2xl text-xs font-extrabold uppercase tracking-wider transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>{isHindi ? 'तत्काल कॉल' : 'CALL'}</span>
              <span className="text-slate-500">/</span>
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-current shrink-0" />
              <span>{isHindi ? 'व्हाट्सएप सलाह' : 'WHATSAPP ADVISORY'}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
