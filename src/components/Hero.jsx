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
          
          {/* ----------------- LEFT COLUMN (7 COLS): Core Value, Modern Typography & Quick Actions ----------------- */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-xl border border-slate-200/90 relative overflow-hidden flex flex-col justify-between space-y-5">
              
              {/* Top Accent Gradient Bar matching Right Card */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600" />

              <div className="space-y-4 sm:space-y-5">
                
                {/* Live Status & Verification Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping shrink-0" />
                    <span>{isHindi ? 'विजिटिंग आवर्स: 8-11 AM • 4-9 PM' : 'VISITING: 8:00–11:00 AM • 4:00–9:00 PM'}</span>
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{isHindi ? 'कानपुर प्रमाणित केंद्र' : 'Kanpur Ortho & Spine Hub'}</span>
                  </div>
                </div>

                {/* MANDATORY HEADING RULE: DARK BLACK, EXTRA-BOLD, UPPERCASE BLOCK LETTERS */}
                <div className="space-y-2">
                  <h1 className="text-black font-extrabold uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.12]">
                    {isHindi ? CLINIC_CONFIG.clinicNameHindi : CLINIC_CONFIG.clinicName}
                  </h1>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-50 via-sky-50 to-emerald-50 border border-teal-200 text-teal-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>
                      {isHindi 
                        ? 'उन्नत फिजियोथेरेपी • ऑर्थोपेडिक पुनर्वास • स्पाइन केयर' 
                        : 'Advanced Physiotherapy • Orthopedic Rehabilitation • Spine Care'}
                    </span>
                  </div>
                </div>

                {/* Modern Highlight Lead-In Callout with Left Accent Border */}
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-teal-50/90 via-sky-50/50 to-slate-50 border-l-4 border-teal-600 shadow-2xs text-slate-800 text-xs sm:text-sm md:text-base leading-relaxed">
                  {isHindi ? (
                    <>
                      <strong className="text-black font-black">डॉ. मोहम्मद फहद आलम</strong> (DPT, BPT, CMS&ED; पूर्व-इंटर्न, 7 एयर फ़ोर्स हॉस्पिटल, कानपुर कैंट) के मार्गदर्शन में विशेष फिजियोथेरेपी। बिना सर्जरी स्लिप डिस्क, साइटिका, सर्वाइकल, जोड़ों के दर्द और ऑपरेशन के बाद संपूर्ण गतिशीलता बहाली का आधुनिक केंद्र।
                    </>
                  ) : (
                    <>
                      Led by experienced Physical Therapist <strong className="text-black font-black">Dr. Mohammad Fahad Alam</strong> (DPT, BPT, CMS&ED; Ex-Intern, 7 Air Force Hospital, Kanpur Cantt). We deliver evidence-based clinical rehabilitation for acute and chronic spine pain, joint disorders, sports injuries, and post-surgical recovery across Kanpur.
                    </>
                  )}
                </div>

                {/* 4 Quick Stat Counter Badges (Instant Credibility) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-0.5">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
                    <p className="text-base sm:text-lg font-black text-teal-700 leading-none">5+ Yrs</p>
                    <p className="text-[10px] text-slate-600 font-bold uppercase mt-1 truncate">
                      {isHindi ? 'क्लिनिकल अनुभव' : 'Clinical Exp.'}
                    </p>
                  </div>

                  <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
                    <p className="text-base sm:text-lg font-black text-sky-700 leading-none">7 Days</p>
                    <p className="text-[10px] text-slate-600 font-bold uppercase mt-1 truncate">
                      {isHindi ? 'विजिटिंग: 8-11 व 4-9' : '8-11 AM & 4-9 PM'}
                    </p>
                  </div>

                  <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
                    <p className="text-base sm:text-lg font-black text-emerald-700 leading-none">100%</p>
                    <p className="text-[10px] text-slate-600 font-bold uppercase mt-1 truncate">
                      {isHindi ? 'नॉन-सर्जिकल' : 'Non-Surgical'}
                    </p>
                  </div>

                  <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
                    <p className="text-base sm:text-lg font-black text-amber-600 leading-none">Kanpur</p>
                    <p className="text-[10px] text-slate-600 font-bold uppercase mt-1 truncate">
                      {isHindi ? 'होम विजिट सेवा' : 'Home Visits'}
                    </p>
                  </div>
                </div>

                {/* 4 Interactive Clinical Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                  {[
                    { 
                      en: 'Non-Surgical Spine Decompression', 
                      hi: 'बिना सर्जरी स्लिप डिस्क व स्पाइन डीकंप्रेशन',
                      sub: isHindi ? 'मैकेंजी व ट्रैक्शन थेरेपी' : 'McKenzie & Traction Therapy'
                    },
                    { 
                      en: 'Pre & Post TKR / THR Joint Rehab', 
                      hi: 'घुटने व कूल्हे के ऑपरेशन के बाद रिहैब',
                      sub: isHindi ? 'स्वतंत्र चाल प्रशिक्षण' : 'Natural Gait & Balance Bay'
                    },
                    { 
                      en: 'Dedicated Home Visit Physiotherapy', 
                      hi: 'पूरे कानपुर में घर पर फिजियोथेरेपी',
                      sub: isHindi ? 'बुजुर्गों व गंभीर मरीजों हेतु' : 'Bedside Care for Elderly'
                    },
                    { 
                      en: 'Visiting: 8-11 AM & 4-9 PM', 
                      hi: 'विजिटिंग: सुबह 8-11 व शाम 4-9',
                      sub: isHindi ? 'सोमवार से रविवार (सातों दिन)' : 'Open All 7 Days • Mon - Sun'
                    },
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/90 shadow-2xs hover:border-teal-400 hover:bg-white transition"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <p className="text-slate-900 text-xs sm:text-sm font-bold leading-tight">
                          {isHindi ? item.hi : item.en}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-teal-700 font-semibold truncate">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Buttons Hub */}
              <div className="space-y-2.5 pt-2">
                <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
                  
                  {/* Primary CTA (Call / WhatsApp) */}
                  <button
                    onClick={handleCallWhatsAppClick}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-800 to-teal-900 hover:from-teal-900 hover:to-black text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 active:scale-98"
                  >
                    <Phone className="w-4 h-4 text-teal-300" />
                    <span>{isHindi ? 'कॉल' : 'CALL'}</span>
                    <span className="text-teal-400/60 font-bold">/</span>
                    <MessageCircle className="w-4 h-4 text-emerald-300 fill-current" />
                    <span>{isHindi ? 'व्हाट्सएप' : 'WHATSAPP'}</span>
                  </button>

                  {/* Request Home Visit */}
                  <button
                    onClick={() => handleScrollTo('home-visit')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition transform hover:-translate-y-0.5 shadow-sm"
                  >
                    <Home className="w-4 h-4 text-teal-400" />
                    <span>{isHindi ? 'होम विजिट सेवा' : 'REQUEST HOME VISIT'}</span>
                  </button>

                  {/* Fill Appointment Form */}
                  <button
                    onClick={() => handleScrollTo('contact')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-600/30 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition"
                  >
                    <Calendar className="w-4 h-4 text-teal-700" />
                    <span>{isHindi ? 'अपॉइंटमेंट फॉर्म' : 'BOOK APPOINTMENT'}</span>
                  </button>

                </div>

                {/* Reassurance Note */}
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 pt-0.5">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>
                    {isHindi 
                      ? 'सीधे डॉक्टर से परामर्श • कोई अग्रिम ऑनलाइन शुल्क नहीं • उसी दिन अपॉइंटमेंट' 
                      : 'Direct Doctor Consultation • No Advance Online Fee • Same-Day Appointments'}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ----------------- RIGHT COLUMN (5 COLS): Visual Specialist & Facility Showcase ----------------- */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-200/90 relative overflow-hidden flex flex-col justify-between space-y-4">
              
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600" />

              {/* Clinic Brand & Crest Header */}
              <div className="pb-3.5 border-b border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white p-0.5 border-2 border-teal-500/40 shadow-xs flex items-center justify-center shrink-0 overflow-hidden">
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
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-lg shrink-0 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-teal-600" />
                  <span>{CLINIC_CONFIG.registrationNumber}</span>
                </span>
              </div>

              {/* Lead Specialist Profile Card - Premium Medical Gradient Theme */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-teal-900 via-slate-900 to-teal-950 text-white shadow-lg border border-teal-800/60 relative overflow-hidden space-y-3">
                
                {/* Subtle Stethoscope Watermark */}
                <Stethoscope className="absolute -right-3 -bottom-3 w-28 h-28 text-white/5 pointer-events-none" />

                <div className="flex items-center gap-3.5 relative z-10">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-0.5 bg-gradient-to-tr from-teal-400 via-teal-500 to-emerald-400 shadow-md shrink-0 ring-2 ring-teal-300/40 overflow-hidden">
                    <img 
                      src={CLINIC_CONFIG.images?.doctor || '/images/Profile-Image.jpg'} 
                      alt="Dr. Mohammad Fahad Alam - Physical Therapist"
                      className="w-full h-full object-cover rounded-[14px]"
                      onError={(e) => { e.currentTarget.src = '/doctor-fahad-alam.svg'; }}
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-900 flex items-center justify-center shadow-xs" title="Available Today">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-950" />
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-teal-800/80 border border-teal-600/50 text-[10px] font-bold text-teal-200 uppercase tracking-wider mb-1">
                      <Sparkles className="w-2.5 h-2.5 text-teal-300" />
                      <span>{isHindi ? 'मुख्य फिजियोथेरेपिस्ट' : 'Lead Physical Therapist'}</span>
                    </div>
                    <h4 className="text-white font-black text-base sm:text-lg uppercase tracking-wide truncate">
                      {isHindi ? CLINIC_CONFIG.doctor.nameHindi : CLINIC_CONFIG.doctor.name}
                    </h4>
                    <p className="text-xs font-bold text-teal-300 tracking-wide">
                      {CLINIC_CONFIG.doctor.qualifications}
                    </p>
                  </div>
                </div>

                {/* Key Doctor Badges */}
                <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs relative z-10">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Award className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span><strong className="text-white">{isHindi ? 'अनुभव:' : 'Experience:'}</strong> {CLINIC_CONFIG.doctor.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="truncate"><strong className="text-white">{isHindi ? 'प्रशिक्षण:' : 'Clinical:'}</strong> {CLINIC_CONFIG.doctor.internship}</span>
                  </div>
                </div>

              </div>

              {/* Core Clinical Expertise 2x2 Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 sm:p-2.5 rounded-xl bg-teal-50/70 border border-teal-100 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-teal-700 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-extrabold text-black uppercase leading-tight truncate">
                      {isHindi ? 'स्पाइन डीकंप्रेशन' : 'Spine Traction'}
                    </p>
                    <p className="text-[9px] text-teal-700 font-semibold truncate">
                      {isHindi ? 'स्लिप डिस्क व साइटिका' : 'Slip Disc & Sciatica'}
                    </p>
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-sky-50/70 border border-sky-100 flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-sky-700 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-extrabold text-black uppercase leading-tight truncate">
                      {isHindi ? 'जोड़ों का रिहैब' : 'Joint Rehab'}
                    </p>
                    <p className="text-[9px] text-sky-700 font-semibold truncate">
                      {isHindi ? 'TKR / THR सर्जरी' : 'Post TKR/THR Care'}
                    </p>
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-700 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-extrabold text-black uppercase leading-tight truncate">
                      {isHindi ? 'इलेक्ट्रोथेरेपी' : 'Electrotherapy'}
                    </p>
                    <p className="text-[9px] text-purple-700 font-semibold truncate">
                      {isHindi ? 'IFT, TENS, अल्ट्रासाउंड' : 'IFT, Ultrasound, Laser'}
                    </p>
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center gap-2">
                  <Home className="w-4 h-4 text-amber-700 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-extrabold text-black uppercase leading-tight truncate">
                      {isHindi ? 'होम विजिट सेवा' : 'Home Visits'}
                    </p>
                    <p className="text-[9px] text-amber-700 font-semibold truncate">
                      {isHindi ? 'पूरे कानपुर में' : 'Bedside in Kanpur'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Location & OPD Fast Summary Cards */}
              <div className="space-y-2 text-xs">
                
                {/* Visiting Hours Strip with Dual Session Slots */}
                <div className="p-2.5 sm:p-3 bg-gradient-to-br from-slate-50 via-teal-50/20 to-sky-50/20 rounded-xl border border-slate-200/90 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-slate-200/70">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="p-1.5 rounded-lg bg-teal-600 text-white shrink-0 shadow-2xs">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-extrabold uppercase tracking-wide text-black block leading-tight">
                          {isHindi ? 'विजिटिंग आवर्स' : 'VISITING HOURS'}
                        </span>
                        <span className="text-[9px] text-teal-800 font-semibold block">
                          {isHindi ? 'सोमवार से रविवार (सातों दिन)' : 'Monday to Sunday (All 7 Days)'}
                        </span>
                      </div>
                    </div>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 border border-emerald-300 px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span>{isHindi ? 'सक्रिय' : 'Open'}</span>
                    </span>
                  </div>

                  {/* 2 Session Pill Cards */}
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-white p-2 rounded-lg border border-teal-200/70 shadow-2xs">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-teal-800 block">
                        {isHindi ? 'सुबह का समय' : 'Morning Slot'}
                      </span>
                      <strong className="text-xs sm:text-[13px] font-black text-black block">
                        8:00 AM – 11:00 AM
                      </strong>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-teal-200/70 shadow-2xs">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-teal-800 block">
                        {isHindi ? 'शाम का समय' : 'Evening Slot'}
                      </span>
                      <strong className="text-xs sm:text-[13px] font-black text-black block">
                        4:00 PM – 9:00 PM
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Location Strip with Directions Link */}
                <div className="flex items-center justify-between gap-3 p-2.5 sm:p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="p-1.5 rounded-lg bg-sky-100 text-sky-800 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] text-slate-500 font-bold uppercase block leading-none mb-0.5">
                        {isHindi ? 'क्लीनिक पता (परम पुरवा)' : 'CLINIC LOCATION (B.M. MARKET)'}
                      </span>
                      <p className="text-xs font-bold text-black truncate leading-tight">
                        {CLINIC_CONFIG.address.short}
                      </p>
                    </div>
                  </div>
                  <a
                    href={CLINIC_CONFIG.address.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white shrink-0 shadow-xs transition"
                    title={isHindi ? 'गूगल मैप्स पर देखें' : 'View on Google Maps'}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Action Buttons: Unified Call/WhatsApp & Fill Appointment Form */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <button
                  onClick={handleCallWhatsAppClick}
                  className="w-full flex items-center justify-center gap-1.5 py-3 px-3 bg-teal-800 hover:bg-teal-900 active:bg-black text-white rounded-xl font-extrabold text-xs uppercase tracking-wider transition shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-300" />
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-300 fill-current" />
                  <span>{isHindi ? 'कॉल / व्हाट्सएप' : 'CALL / WHATSAPP'}</span>
                </button>

                <button
                  onClick={() => handleScrollTo('contact')}
                  className="w-full flex items-center justify-center gap-1.5 py-3 px-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-extrabold text-xs uppercase tracking-wider border border-slate-300 transition"
                >
                  <span>{isHindi ? 'अपॉइंटमेंट फॉर्म' : 'APPOINTMENT FORM'}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-teal-700" />
                </button>
              </div>

              {/* Card Footer Reassurance Note */}
              <div className="pt-1 text-center">
                <p className="text-[10px] text-slate-500 font-medium">
                  {isHindi 
                    ? '✓ 1-ऑन-1 व्यक्तिगत देखभाल • बिना अग्रिम शुल्क • तत्काल परामर्श' 
                    : '✓ 1-on-1 Personalized Care • Zero Advance Fee • Instant Consultation'}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================
            3 CORE CLINICAL PILLARS ("OUR CLINICAL EXCELLENCE")
            Enhanced with modern medical aesthetics, gradient badges,
            interactive tactile hover cards, and high-impact CTAs
            ======================================================== */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-slate-200">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-2xs mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                {isHindi ? 'हमारी विशेष चिकित्सा पद्धतियाँ' : 'OUR CLINICAL EXCELLENCE'}
              </span>
            </div>

            <h2 className="text-black font-extrabold uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl leading-tight">
              {isHindi ? 'विशेषज्ञता एवं आधुनिक उपचार सुविधाएँ' : 'SPECIALIZED CLINICAL CARE & REHABILITATION'}
            </h2>

            {/* Subtle decorative divider */}
            <div className="flex items-center justify-center gap-2 my-3">
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent to-teal-500 rounded-full"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-teal-600"></div>
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-l from-transparent to-teal-500 rounded-full"></div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {isHindi 
                ? 'कानपुर में दर्द से तुरंत राहत और स्थायी सुधार के लिए 3 मुख्य नैदानिक स्तंभ — बिना ऑपरेशन, आधुनिक फिजियोथेरेपी तकनीक द्वारा।' 
                : 'Three dedicated clinical divisions designed to eliminate pain, restore complete mobility, and help you avoid unnecessary spine or joint surgeries.'}
            </p>
          </div>

          {/* 3 Pillars Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            
            {/* Pillar 1: Spine Care & Disc Decompression */}
            <div 
              onClick={() => handleScrollTo('services')}
              className="relative group bg-white rounded-3xl p-6 sm:p-7 border border-teal-100 shadow-md hover:shadow-2xl hover:border-teal-400 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Ambient Hover Backdrop Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 via-white to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10 space-y-4">
                {/* Top Badge & Icon Row */}
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center shadow-lg shadow-teal-600/25 ring-4 ring-teal-50 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                    <Activity className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200/80 px-2.5 py-1 rounded-full">
                    {isHindi ? 'स्तंभ ०१ • स्पाइन केयर' : 'PILLAR 01 • SPINE'}
                  </span>
                </div>

                {/* Title & Tag */}
                <div className="space-y-1">
                  <div className="inline-block text-[11px] font-semibold text-teal-600 uppercase tracking-wide">
                    {isHindi ? 'बिना ऑपरेशन स्लिप डिस्क इलाज' : '100% Non-Surgical Decompression'}
                  </div>
                  <h3 className="text-black font-extrabold uppercase text-lg sm:text-xl tracking-tight group-hover:text-teal-700 transition-colors">
                    {isHindi ? 'स्पाइन केयर एवं स्लिप डिस्क उपचार' : 'SPINE CARE & DISC DECOMPRESSION'}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isHindi 
                    ? 'कंप्यूटरीकृत सर्वाइकल और लम्बर ट्रैक्शन द्वारा बिना ऑपरेशन स्लिप डिस्क, साइटिका और गर्दन-कमर के पुराने दर्द का सटीक और स्थायी इलाज।' 
                    : 'Targeted mechanical traction and McKenzie protocols designed to relieve pinched nerves, slip disc, and chronic stiffness without surgery.'}
                </p>

                {/* Feature Points */}
                <div className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-start gap-2 bg-slate-50/80 p-2 rounded-xl border border-slate-100 group-hover:bg-white/80 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isHindi ? 'कंप्यूटरीकृत सर्वाइकल व लम्बर ट्रैक्शन' : 'Computerized Cervical & Lumbar Traction'}</span>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-50/80 p-2 rounded-xl border border-slate-100 group-hover:bg-white/80 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isHindi ? 'साइटिका नसों का दबाव मुक्त करना' : 'Sciatica & Pinched Nerve Decompression'}</span>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-50/80 p-2 rounded-xl border border-slate-100 group-hover:bg-white/80 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isHindi ? 'स्पाइन सर्जरी से बचाव की विशेष पद्धति' : 'Surgery Avoidance Rehab Protocol'}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Tactile Action */}
              <div className="relative z-10 pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  {isHindi ? 'क्लिनिक में उपलब्ध' : 'Available At Clinic'}
                </span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-50 text-teal-800 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300 font-extrabold text-xs uppercase tracking-wide shadow-2xs">
                  <span>{isHindi ? 'स्पाइन सेवाएँ' : 'EXPLORE SPINE'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Pillar 2: Orthopedic Rehab & Mobility Bay */}
            <div 
              onClick={() => handleScrollTo('services')}
              className="relative group bg-white rounded-3xl p-6 sm:p-7 border border-sky-100 shadow-md hover:shadow-2xl hover:border-sky-400 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Ambient Hover Backdrop Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 via-white to-sky-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10 space-y-4">
                {/* Top Badge & Icon Row */}
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 text-white flex items-center justify-center shadow-lg shadow-sky-600/25 ring-4 ring-sky-50 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                    <HeartPulse className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/80 px-2.5 py-1 rounded-full">
                    {isHindi ? 'स्तंभ ०२ • ऑर्थो रिहैब' : 'PILLAR 02 • ORTHO'}
                  </span>
                </div>

                {/* Title & Tag */}
                <div className="space-y-1">
                  <div className="inline-block text-[11px] font-semibold text-sky-600 uppercase tracking-wide">
                    {isHindi ? 'जोड़ गतिशीलता एवं सर्जरी रिहैब' : 'Active Motion & Post-Surgery Lab'}
                  </div>
                  <h3 className="text-black font-extrabold uppercase text-lg sm:text-xl tracking-tight group-hover:text-sky-700 transition-colors">
                    {isHindi ? 'ऑर्थोपेडिक पुनर्वास एवं एक्सरसाइज बे' : 'ORTHOPEDIC REHAB & MOBILITY BAY'}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isHindi 
                    ? 'घुटने (TKR) व कूल्हे (THR) के ऑपरेशन के बाद रिहैब, फ्रोजन शोल्डर और आर्थराइटिस में आधुनिक व्यायाम द्वारा पूर्ण गतिशीलता की त्वरित बहाली।' 
                    : 'Evidence-based exercise therapy for Pre & Post Joint Replacement, frozen shoulder mobilization, osteoarthritis, and natural gait training.'}
                </p>

                {/* Feature Points */}
                <div className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-start gap-2 bg-slate-50/80 p-2 rounded-xl border border-slate-100 group-hover:bg-white/80 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isHindi ? 'नी (TKR) एवं हिप (THR) रिप्लेसमेंट रिहैब' : 'Pre & Post TKR / THR Joint Recovery'}</span>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-50/80 p-2 rounded-xl border border-slate-100 group-hover:bg-white/80 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isHindi ? 'फ्रोजन शोल्डर एवं जाम जोड़ों का लचीलापन' : 'Frozen Shoulder & Joint Mobilization'}</span>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-50/80 p-2 rounded-xl border border-slate-100 group-hover:bg-white/80 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isHindi ? 'वैज्ञानिक चाल (Gait) व संतुलन प्रशिक्षण' : 'Scientific Gait & Balance Training'}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Tactile Action */}
              <div className="relative z-10 pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  {isHindi ? 'क्लिनिक में उपलब्ध' : 'Available At Clinic'}
                </span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 text-sky-800 group-hover:bg-sky-700 group-hover:text-white transition-all duration-300 font-extrabold text-xs uppercase tracking-wide shadow-2xs">
                  <span>{isHindi ? 'ऑर्थो रिहैब' : 'EXPLORE ORTHO'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Pillar 3: Dedicated Home Visit Care */}
            <div 
              onClick={() => handleScrollTo('home-visit')}
              className="relative group bg-white rounded-3xl p-6 sm:p-7 border border-emerald-100 shadow-md hover:shadow-2xl hover:border-emerald-400 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Ambient Hover Backdrop Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10 space-y-4">
                {/* Top Badge & Icon Row */}
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center shadow-lg shadow-emerald-600/25 ring-4 ring-emerald-50 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                    <Home className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                    {isHindi ? 'स्तंभ ०३ • होम केयर' : 'PILLAR 03 • HOME CARE'}
                  </span>
                </div>

                {/* Title & Tag */}
                <div className="space-y-1">
                  <div className="inline-block text-[11px] font-semibold text-emerald-600 uppercase tracking-wide">
                    {isHindi ? 'पूरे कानपुर में घर पर सेवा' : 'Doorstep Bedside Therapy Across Kanpur'}
                  </div>
                  <h3 className="text-black font-extrabold uppercase text-lg sm:text-xl tracking-tight group-hover:text-emerald-700 transition-colors">
                    {isHindi ? 'पूरे कानपुर में घर पर फिजियोथेरेपी' : 'DEDICATED HOME VISIT CARE'}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isHindi 
                    ? 'बुजुर्गों, सर्जरी के बाद बिस्तर पर आराम कर रहे और चलने में असमर्थ मरीजों के लिए कानपुर के सभी प्रमुख इलाकों में घर पर उच्चस्तरीय व्यक्तिगत फिजियोथेरेपी।' 
                    : 'Compassionate bedside physical therapy across Kanpur for elderly, post-operative, and bedridden patients who cannot travel to the clinic.'}
                </p>

                {/* Feature Points */}
                <div className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-start gap-2 bg-slate-50/80 p-2 rounded-xl border border-slate-100 group-hover:bg-white/80 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isHindi ? 'अस्पताल स्तर का पोर्टेबल फिजियो उपकरण' : 'Hospital-Grade Portable Modalities'}</span>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-50/80 p-2 rounded-xl border border-slate-100 group-hover:bg-white/80 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isHindi ? 'लकवा, स्ट्रोक व न्यूरोलॉजिकल रिकवरी' : 'Stroke, Paralysis & Neurological Care'}</span>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-50/80 p-2 rounded-xl border border-slate-100 group-hover:bg-white/80 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isHindi ? 'वरिष्ठ नागरिकों हेतु 1-ऑन-1 बेडसाइड सेवा' : 'Elderly Comfort & 1-on-1 Bedside Care'}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Tactile Action */}
              <div className="relative z-10 pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  {isHindi ? 'घर पर उपलब्ध' : 'Home Visits Active'}
                </span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300 font-extrabold text-xs uppercase tracking-wide shadow-2xs">
                  <span>{isHindi ? 'होम विजिट बुक करें' : 'BOOK HOME VISIT'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
