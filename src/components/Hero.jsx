import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Home, 
  Clock, 
  MapPin, 
  Award, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Stethoscope,
  HeartPulse,
  Zap,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function Hero({ language, onNavigateToSection, onOpenContact }) {
  const isHindi = language === 'hi';

  const handleScrollTo = (sectionId) => {
    if (onNavigateToSection) {
      onNavigateToSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallWhatsAppClick = () => {
    const defaultMsg = isHindi 
      ? 'नमस्ते डॉ. मोहम्मद फहद आलम, मैं कानपुर फिजियो ऑर्थो स्पाइन क्लीनिक में परामर्श हेतु अपॉइंटमेंट लेना चाहता हूँ।'
      : 'Hello Dr. Mohammad Fahad Alam, I would like to book a physiotherapy consultation at Kanpur Physio Ortho Spine Clinic.';
    
    if (onOpenContact) {
      onOpenContact(defaultMsg);
    } else {
      const phoneClean = CLINIC_CONFIG.contact.phone;
      window.open(`https://wa.me/91${phoneClean}?text=${encodeURIComponent(defaultMsg)}`, '_blank');
    }
  };

  return (
    <section id="hero-overview" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-white pt-8 pb-14 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 border-b border-slate-200">
      
      {/* Decorative Subtle Glowing Background Blur Spots */}
      <div className="absolute top-0 right-0 -mr-28 -mt-28 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-28 w-96 h-96 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            TOP HERO GRID: Command Center (Left) & Specialist Hub (Right)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ----------------- LEFT COLUMN (7 COLS): Core Value & Quick Actions ----------------- */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-7">
            
            <div className="space-y-4 sm:space-y-5">
              {/* Trust Badge with Live Open Status */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100/80 border border-teal-300/80 text-teal-900 text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping shrink-0" />
                  <span>{isHindi ? 'खुला है • सुबह 9 से रात 10 बजे' : 'OPEN TODAY • 9:00 AM – 10:00 PM'}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] sm:text-xs font-semibold shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{isHindi ? 'कानपुर प्रमाणित केंद्र' : 'Kanpur Certified Ortho & Spine Hub'}</span>
                </div>
              </div>

              {/* MANDATORY HEADING RULE: DARK BLACK, EXTRA-BOLD, UPPERCASE BLOCK LETTERS */}
              <div className="space-y-2">
                <h1 className="text-black font-extrabold uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.12]">
                  {isHindi ? CLINIC_CONFIG.clinicNameHindi : CLINIC_CONFIG.clinicName}
                </h1>
                <p className="text-teal-700 font-extrabold text-sm sm:text-base md:text-lg uppercase tracking-wider">
                  {isHindi 
                    ? 'उन्नत फिजियोथेरेपी • ऑर्थोपेडिक पुनर्वास • स्पाइन केयर (रीढ़ उपचार)' 
                    : 'Advanced Physiotherapy • Orthopedic Rehabilitation • Spine Care'}
                </p>
              </div>

              {/* Engaging Clinical Mission Statement */}
              <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed">
                {isHindi ? (
                  <>
                    <strong className="text-black font-bold">डॉ. मोहम्मद फहद आलम</strong> (DPT, BPT, CMS&ED; पूर्व-इंटर्न, 7 एयर फ़ोर्स हॉस्पिटल, कानपुर कैंट) के नेतृत्व में संचालित। बिना सर्जरी स्लिप डिस्क, कमर दर्द, साइटिका, घुटने के दर्द और फ्रैक्चर/ऑपरेशन के बाद संपूर्ण गतिशीलता लौटाने का विश्वसनीय चिकित्सा केंद्र।
                  </>
                ) : (
                  <>
                    Led by experienced Physical Therapist <strong className="text-black font-bold">Dr. Mohammad Fahad Alam</strong> (DPT, BPT, CMS&ED; Ex-Intern, 7 Air Force Hospital, Kanpur Cantt). We deliver evidence-based clinical rehabilitation for acute and chronic spine pain, joint disorders, sports injuries, and post-surgical recovery across Kanpur.
                  </>
                )}
              </p>

              {/* 4 Interactive Clinical Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {[
                  { 
                    en: 'Non-Surgical Spine Decompression', 
                    hi: 'बिना सर्जरी स्लिप डिस्क व स्पाइन डीकंप्रेशन',
                    sub: isHindi ? 'मैकेंजी व ट्रैक्शन थेरेपी' : 'McKenzie & Traction'
                  },
                  { 
                    en: 'Pre & Post TKR / THR Joint Rehab', 
                    hi: 'घुटने व कूल्हे के ऑपरेशन के बाद रिहैब',
                    sub: isHindi ? 'स्वतंत्र चाल प्रशिक्षण' : 'Gait & Balance Training'
                  },
                  { 
                    en: 'Dedicated Home Visit Physiotherapy', 
                    hi: 'पूरे कानपुर में घर पर फिजियोथेरेपी',
                    sub: isHindi ? 'बुजुर्गों व मरीजों हेतु' : 'Bedside Care for Elderly'
                  },
                  { 
                    en: 'Open All 7 Days (9 AM – 10 PM)', 
                    hi: 'सातों दिन खुला (सुबह 9 से रात 10)',
                    sub: isHindi ? 'लचीला परामर्श समय' : 'Emergency & Scheduled OPD'
                  },
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-teal-400 hover:shadow-xs transition"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="text-slate-900 text-xs sm:text-sm font-bold leading-tight">
                        {isHindi ? item.hi : item.en}
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-teal-700 font-medium">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prominent Action Hub */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
                {/* Unified Call & WhatsApp Button */}
                <button
                  onClick={handleCallWhatsAppClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-800 hover:bg-teal-900 active:bg-black text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 active:scale-98"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  <span>{isHindi ? 'कॉल' : 'CALL'}</span>
                  <span className="text-teal-400/60 font-bold">/</span>
                  <MessageCircle className="w-4 h-4 text-emerald-300 fill-current" />
                  <span>{isHindi ? 'व्हाट्सएप' : 'WHATSAPP'}</span>
                </button>

                {/* Request Home Visit Button */}
                <button
                  onClick={() => handleScrollTo('home-visit')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition transform hover:-translate-y-0.5 shadow-sm"
                >
                  <Home className="w-4 h-4 text-teal-400" />
                  <span>{isHindi ? 'होम विजिट सेवा' : 'REQUEST HOME VISIT'}</span>
                </button>

                {/* Fill Appointment Form Button */}
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-600/30 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition"
                >
                  <Calendar className="w-4 h-4 text-teal-700" />
                  <span>{isHindi ? 'अपॉइंटमेंट फॉर्म' : 'BOOK APPOINTMENT'}</span>
                </button>
              </div>

              {/* Fast Reassurance Bar */}
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>
                  {isHindi 
                    ? 'सीधे डॉक्टर से परामर्श • कोई अग्रिम ऑनलाइन भुगतान नहीं • उसी दिन अपॉइंटमेंट' 
                    : 'Direct Doctor Consultation • No Advance Online Fee • Same-Day Appointments'}
                </span>
              </div>
            </div>

          </div>

          {/* ----------------- RIGHT COLUMN (5 COLS): Visual Specialist & Facility Showcase ----------------- */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 shadow-xl border border-slate-200/90 relative overflow-hidden flex flex-col justify-between space-y-5">
              
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600" />

              {/* Clinic Brand & Crest Header */}
              <div className="pb-4 border-b border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white p-1 border-2 border-teal-500/30 shadow-xs flex items-center justify-center shrink-0">
                    <img 
                      src="/images/LOgo.png" 
                      alt="Kanpur Physio Ortho Spine Clinic Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-black font-extrabold uppercase text-xs sm:text-sm tracking-wide">
                      KANPUR PHYSIO
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                      ORTHO & SPINE CLINIC
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-lg shrink-0">
                  {isHindi ? 'प्रमाणित केंद्र' : 'Verified Clinic'}
                </span>
              </div>

              {/* Lead Specialist Profile Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-50/70 via-sky-50/40 to-slate-50 border border-teal-100/80 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-teal-700 text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                    <Stethoscope className="w-7 h-7 text-teal-200" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider block truncate">
                      {isHindi ? 'मुख्य फिजियोथेरेपिस्ट' : 'Lead Physical Therapist'}
                    </span>
                    <h4 className="text-black font-extrabold text-base sm:text-lg uppercase tracking-wide truncate">
                      {isHindi ? CLINIC_CONFIG.doctor.nameHindi : CLINIC_CONFIG.doctor.name}
                    </h4>
                    <p className="text-xs font-semibold text-slate-700 truncate">
                      {CLINIC_CONFIG.doctor.qualifications}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1 text-xs border-t border-teal-200/60">
                  <div className="flex items-center gap-2 text-slate-800 font-medium">
                    <Award className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span><strong>{isHindi ? 'अनुभव:' : 'Experience:'}</strong> {CLINIC_CONFIG.doctor.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                    <span className="truncate"><strong>{isHindi ? 'प्रशिक्षण:' : 'Clinical:'}</strong> {CLINIC_CONFIG.doctor.internship}</span>
                  </div>
                </div>
              </div>

              {/* Location & OPD Fast Summary Card */}
              <div className="space-y-2.5 text-xs">
                
                {/* Timings Strip */}
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="p-2 rounded-lg bg-teal-100 text-teal-800 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">
                      {isHindi ? 'परामर्श समय (सातों दिन खुला)' : 'CONSULTATION OPD (ALL 7 DAYS)'}
                    </span>
                    <p className="text-xs sm:text-sm font-extrabold text-black">
                      {CLINIC_CONFIG.schedule.timings}
                    </p>
                  </div>
                </div>

                {/* Location Strip with Directions Link */}
                <div className="flex items-center justify-between gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-sky-100 text-sky-800 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">
                        {isHindi ? 'क्लीनिक पता (जूही / गोविंद नगर)' : 'CLINIC ADDRESS (PARAM PURWA)'}
                      </span>
                      <p className="text-xs font-bold text-black truncate">
                        {CLINIC_CONFIG.address.short}
                      </p>
                    </div>
                  </div>
                  <a
                    href={CLINIC_CONFIG.address.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white shrink-0 shadow-xs"
                    title={isHindi ? 'गूगल मैप्स पर देखें' : 'View on Google Maps'}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* 1-Click Form Action */}
              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-extrabold text-xs uppercase tracking-wider transition shadow-sm"
              >
                <span>{isHindi ? 'अपॉइंटमेंट फॉर्म भरें' : 'FILL APPOINTMENT FORM'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

        {/* ========================================================
            3 CORE CLINICAL PILLARS ("Why Choose Our Clinic")
            Interactive, visually engaging cards that encourage users to stay & explore
            ======================================================== */}
        <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-slate-200">
          
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
              {isHindi ? 'हमारी विशेष चिकित्सा पद्धतियाँ' : 'OUR CLINICAL EXCELLENCE'}
            </span>
            <h2 className="text-black font-extrabold uppercase tracking-wide text-xl sm:text-2xl md:text-3xl">
              {isHindi ? 'विशेषज्ञता एवं आधुनिक उपचार सुविधाएँ' : 'SPECIALIZED CLINICAL CARE & REHABILITATION'}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              {isHindi 
                ? 'कानपुर में दर्द से तुरंत राहत और स्थायी सुधार के लिए 3 मुख्य स्तंभ' 
                : 'Three dedicated clinical divisions designed to eliminate pain and restore full movement.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Pillar 1: Spine Care */}
            <div 
              onClick={() => handleScrollTo('services')}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-black font-extrabold uppercase text-base sm:text-lg tracking-wide group-hover:text-teal-800 transition-colors">
                  {isHindi ? 'स्पाइन केयर एवं स्लिप डिस्क उपचार' : 'SPINE CARE & DISC DECOMPRESSION'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isHindi 
                    ? 'कंप्यूटरीकृत सर्वाइकल और लम्बर ट्रैक्शन द्वारा बिना ऑपरेशन स्लिप डिस्क, साइटिका और गर्दन-कमर के पुराने दर्द का स्थायी इलाज।' 
                    : 'Targeted mechanical traction and McKenzie protocols designed to relieve pinched nerves, slip disc, and chronic spine stiffness without surgery.'}
                </p>
                <div className="space-y-1.5 pt-1 text-xs text-slate-700 font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isHindi ? 'साइटिका नसों का दबाव मुक्त करना' : 'Sciatica & Pinched Nerve Relief'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isHindi ? 'सर्जरी से बचाव के तरीके' : 'Surgery Avoidance Protocols'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-teal-800 font-extrabold text-xs uppercase tracking-wider">
                <span>{isHindi ? 'स्पाइन सेवाएँ देखें' : 'EXPLORE SPINE CARE'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 2: Orthopedic Joint Rehab */}
            <div 
              onClick={() => handleScrollTo('services')}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="text-black font-extrabold uppercase text-base sm:text-lg tracking-wide group-hover:text-teal-800 transition-colors">
                  {isHindi ? 'ऑर्थोपेडिक पुनर्वास एवं एक्सरसाइज बे' : 'ORTHOPEDIC REHAB & MOBILITY BAY'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isHindi 
                    ? 'घुटने (TKR) व कूल्हे (THR) के ऑपरेशन के बाद रिहैब, फ्रोजन शोल्डर और गठिया के मरीजों के लिए आधुनिक व्यायाम द्वारा गतिशीलता की बहाली।' 
                    : 'Evidence-based exercise therapy for Pre & Post Joint Replacement surgeries, frozen shoulder release, osteoarthritis, and natural gait training.'}
                </p>
                <div className="space-y-1.5 pt-1 text-xs text-slate-700 font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isHindi ? 'नी/हिप रिप्लेसमेंट के बाद रिहैब' : 'Post TKR/THR Recovery'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isHindi ? 'फ्रोजन शोल्डर व जोड़ों का लचीलापन' : 'Frozen Shoulder Mobilization'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-teal-800 font-extrabold text-xs uppercase tracking-wider">
                <span>{isHindi ? 'ऑर्थो रिहैब देखें' : 'EXPLORE JOINT REHAB'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 3: Dedicated Home Visits */}
            <div 
              onClick={() => handleScrollTo('home-visit')}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-black font-extrabold uppercase text-base sm:text-lg tracking-wide group-hover:text-teal-800 transition-colors">
                  {isHindi ? 'पूरे कानपुर में घर पर फिजियोथेरेपी' : 'DEDICATED HOME VISIT CARE'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isHindi 
                    ? 'बुजुर्गों, सर्जरी के बाद बिस्तर पर आराम कर रहे और चलने में असमर्थ मरीजों के लिए कानपुर के सभी इलाकों में घर पर व्यक्तिगत फिजियोथेरेपी सुविधा।' 
                    : 'Compassionate bedside physical therapy across Kanpur for elderly, post-operative, and bedridden patients who cannot travel to the clinic.'}
                </p>
                <div className="space-y-1.5 pt-1 text-xs text-slate-700 font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isHindi ? 'अस्पताल स्तर का घर पर इलाज' : 'Hospital-Grade Home Care'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isHindi ? 'लकवा, स्ट्रोक एवं न्यूरो रिहैब' : 'Stroke & Paralysis Recovery'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-teal-800 font-extrabold text-xs uppercase tracking-wider">
                <span>{isHindi ? 'होम विजिट बुक करें' : 'BOOK HOME VISIT'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
