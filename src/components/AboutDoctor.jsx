import React, { useState } from 'react';
import { 
  Award, 
  GraduationCap, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Stethoscope, 
  HeartPulse, 
  UserCheck,
  ArrowRight,
  MapPin,
  Calendar,
  Check,
  Building2
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function AboutDoctor({ language, onOpenContact }) {
  const isHindi = language === 'hi';
  const [doctorSrc, setDoctorSrc] = useState(CLINIC_CONFIG.images?.doctor || '/images/Profile-Image.jpg');
  const [interiorSrc, setInteriorSrc] = useState('/images/clinic-interior.jpg');
  const [baySrc, setBaySrc] = useState('/images/Slider-2.png');

  const handleDoctorError = () => {
    if (doctorSrc !== '/images/Profile-Image.jpg') {
      setDoctorSrc('/images/Profile-Image.jpg');
    } else {
      setDoctorSrc('/doctor-fahad-alam.svg');
    }
  };

  const handleConsultClick = (customMsg) => {
    const defaultMsg = customMsg || (isHindi 
      ? 'नमस्ते डॉ. मोहम्मद फहद आलम, मैं कानपुर फिजियो ऑर्थो स्पाइन क्लीनिक में परामर्श हेतु अपॉइंटमेंट लेना चाहता हूँ।'
      : 'Hello Dr. Mohammad Fahad Alam, I would like to book a physiotherapy consultation at Kanpur Physio Ortho Spine Clinic.');
    
    if (onOpenContact) {
      onOpenContact(defaultMsg);
    } else {
      const phoneClean = CLINIC_CONFIG.contact.phone;
      window.open(`https://wa.me/91${phoneClean}?text=${encodeURIComponent(defaultMsg)}`, '_blank');
    }
  };

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white py-14 sm:py-20 lg:py-24 border-b border-slate-200">
      
      {/* Ambient Decorative Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-64 bg-teal-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            SECTION HEADER
            Mandatory Rule: Dark Black, Extra-Bold, Uppercase Tracking
            ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-2xs mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
              {isHindi ? 'क्लीनिकल नेतृत्व एवं विशेषज्ञ डॉक्टर' : 'CLINICAL LEADERSHIP & DOCTOR PROFILE'}
            </span>
          </div>

          {/* Mandatory Main Section Heading */}
          <h2 className="text-black font-extrabold uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            {isHindi ? 'डॉ. मोहम्मद फहद आलम और हमारे क्लीनिक के बारे में' : 'ABOUT DR. MOHAMMAD FAHAD ALAM & OUR CLINIC'}
          </h2>

          {/* Symmetrical Medical Accent Bar */}
          <div className="flex items-center justify-center gap-2 my-3.5">
            <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-r from-transparent to-teal-500 rounded-full"></div>
            <div className="h-2 w-2 rounded-full bg-teal-600 ring-4 ring-teal-100"></div>
            <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-l from-transparent to-teal-500 rounded-full"></div>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {isHindi 
              ? 'वैज्ञानिक प्रमाणों पर आधारित फिजियोथेरेपी, रीढ़ की हड्डी का विशेषज्ञ उपचार एवं कानपुर में समर्पित 1-ऑन-1 स्वास्थ्य सेवा।' 
              : 'Dedicated to evidence-based musculoskeletal care, advanced non-surgical spine decompression, and compassionate rehabilitation in Kanpur.'}
          </p>
        </div>

        {/* ========================================================
            MAIN PROFILE GRID (5 Cols Left / 7 Cols Right)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ======================================================
              LEFT COLUMN: EXECUTIVE DOCTOR CARD & FACILITY SHOWCASE (5 Cols)
              ====================================================== */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Executive Doctor Spotlight Card */}
            <div className="relative rounded-3xl bg-gradient-to-b from-white via-teal-50/20 to-teal-50/50 p-6 sm:p-7 border border-teal-200/80 shadow-xl overflow-hidden group">
              
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-teal-400/15 blur-2xl pointer-events-none" />

              {/* Doctor Portrait with Ring & Status Pill */}
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-5">
                <div className="w-full h-full rounded-3xl p-1 bg-gradient-to-br from-teal-500 via-teal-600 to-sky-600 shadow-xl ring-4 ring-teal-100/80 overflow-hidden">
                  <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img 
                      src={doctorSrc} 
                      alt="Dr. Mohammad Fahad Alam - Senior Physical Therapist Kanpur"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={handleDoctorError}
                    />
                  </div>
                </div>

                {/* Floating Live Status Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/95 backdrop-blur-md border border-teal-200 px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 z-10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-800">
                    {isHindi ? 'परामर्श हेतु उपलब्ध' : 'AVAILABLE FOR CONSULTATION'}
                  </span>
                </div>
              </div>

              {/* Doctor Details & Credentials */}
              <div className="text-center space-y-1.5 mt-5">
                <h3 className="text-black font-extrabold text-xl sm:text-2xl uppercase tracking-tight">
                  {isHindi ? CLINIC_CONFIG.doctor.nameHindi : CLINIC_CONFIG.doctor.name}
                </h3>
                
                <p className="text-xs sm:text-sm font-bold text-teal-700 uppercase tracking-wider">
                  {isHindi ? 'वरिष्ठ फिजियोथेरेपिस्ट एवं क्लीनिकल निदेशक' : 'Senior Physical Therapist & Clinical Director'}
                </p>

                {/* Qualification Badges */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                  {['DPT', 'BPT', 'CMS&ED'].map((deg) => (
                    <span 
                      key={deg}
                      className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 shadow-2xs"
                    >
                      {deg}
                    </span>
                  ))}
                </div>

                {/* Armed Forces Pedigree */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 mt-2 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{isHindi ? 'पूर्व-इंटर्न, 7 एयर फ़ोर्स हॉस्पिटल, कानपुर कैंट' : 'Ex-Intern, 7 Air Force Hospital, Kanpur Cantt'}</span>
                </div>
              </div>

              {/* 4 Quick Clinical Counters */}
              <div className="grid grid-cols-2 gap-2 pt-4 mt-5 border-t border-teal-200/60 text-center">
                <div className="bg-white/80 border border-teal-100 p-2.5 rounded-2xl shadow-2xs">
                  <div className="text-base sm:text-lg font-black text-black">5+ Yrs</div>
                  <div className="text-[10px] font-bold text-teal-700 uppercase tracking-wider">
                    {isHindi ? 'नैदानिक अनुभव' : 'Clinical Practice'}
                  </div>
                </div>
                <div className="bg-white/80 border border-teal-100 p-2.5 rounded-2xl shadow-2xs">
                  <div className="text-base sm:text-lg font-black text-black">7 Days</div>
                  <div className="text-[10px] font-bold text-teal-700 uppercase tracking-wider">
                    {isHindi ? '9AM - 10PM खुला' : 'Open 9AM - 10PM'}
                  </div>
                </div>
                <div className="bg-white/80 border border-teal-100 p-2.5 rounded-2xl shadow-2xs">
                  <div className="text-base sm:text-lg font-black text-black">100%</div>
                  <div className="text-[10px] font-bold text-teal-700 uppercase tracking-wider">
                    {isHindi ? 'बिना सर्जरी इलाज' : 'Non-Surgical'}
                  </div>
                </div>
                <div className="bg-white/80 border border-teal-100 p-2.5 rounded-2xl shadow-2xs">
                  <div className="text-base sm:text-lg font-black text-black">Kanpur</div>
                  <div className="text-[10px] font-bold text-teal-700 uppercase tracking-wider">
                    {isHindi ? 'होम विजिट सुविधा' : 'Home Visits'}
                  </div>
                </div>
              </div>

              {/* Integrated Call & WhatsApp Action */}
              <div className="pt-4 mt-4">
                <button
                  onClick={() => handleConsultClick()}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-teal-800 hover:bg-teal-900 active:bg-black text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md shadow-teal-900/20 active:scale-98 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>{isHindi ? 'कॉल' : 'CALL'}</span>
                  <span className="text-teal-400 font-bold">/</span>
                  <MessageCircle className="w-4 h-4 text-emerald-300 fill-current shrink-0" />
                  <span>{isHindi ? 'व्हाट्सएप परामर्श' : 'WHATSAPP CONSULT'}</span>
                </button>
              </div>

            </div>

            {/* Clinic Facility Showcase Row (Real HD Photos) */}
            <div className="grid grid-cols-2 gap-3">
              
              {/* Treatment Area Card */}
              <div className="group relative rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="relative w-full h-24 sm:h-28 rounded-xl overflow-hidden bg-slate-100 mb-2">
                  <img 
                    src={interiorSrc} 
                    alt="Clinic Treatment Bay - Kanpur Physio"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={() => setInteriorSrc('/clinic-interior.svg')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-black text-white uppercase tracking-wider">
                    Treatment Bay
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-extrabold text-black uppercase tracking-tight">
                    {isHindi ? 'आधुनिक परामर्श कक्ष' : 'Clinical Exam Setup'}
                  </p>
                  <p className="text-[9px] text-slate-500 font-semibold">
                    {isHindi ? 'व्यक्तिगत 1-ऑन-1 जांच' : '1-on-1 Patient Assessment'}
                  </p>
                </div>
              </div>

              {/* Exercise Bay Card */}
              <div className="group relative rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="relative w-full h-24 sm:h-28 rounded-xl overflow-hidden bg-slate-100 mb-2">
                  <img 
                    src={baySrc} 
                    alt="Rehabilitation & Exercise Bay - Kanpur Physio"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={() => setBaySrc('/exercise-bay.svg')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-black text-white uppercase tracking-wider">
                    Exercise Bay
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-extrabold text-black uppercase tracking-tight">
                    {isHindi ? 'पुनर्वास एवं एक्सरसाइज बे' : 'Mobility & Rehab Bay'}
                  </p>
                  <p className="text-[9px] text-slate-500 font-semibold">
                    {isHindi ? 'ट्रैक्शन व मॉडर्न उपकरण' : 'Active Recovery Modalities'}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ======================================================
              RIGHT COLUMN: CLINICAL TRUST, BIO & COMPETENCIES (7 Cols)
              ====================================================== */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Official Clinic Identification & Credential Banner */}
            <div className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-3xl shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white p-0.5 border-2 border-teal-500/40 shadow-xs flex items-center justify-center shrink-0 overflow-hidden">
                  <img 
                    src="/images/LOgo.png" 
                    alt="Kanpur Physio Ortho Spine Clinic Official Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-black font-extrabold uppercase text-xs sm:text-sm tracking-wide">
                    {isHindi ? CLINIC_CONFIG.clinicNameHindi : CLINIC_CONFIG.clinicName}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                    {isHindi ? CLINIC_CONFIG.taglineHindi : CLINIC_CONFIG.tagline}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-teal-50 border border-teal-200 px-3 py-1.5 rounded-2xl">
                <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-teal-800">
                  {CLINIC_CONFIG.registrationNumber}
                </span>
              </div>
            </div>

            {/* Tri-Fold Credential Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* Card 1: Qualifications */}
              <div className="relative bg-gradient-to-b from-teal-50/70 to-white border border-teal-200/80 p-4 rounded-2xl shadow-2xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-sm mb-2.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-bold text-teal-700 uppercase tracking-wider">
                  {isHindi ? 'शैक्षणिक योग्यता' : 'ACADEMIC EXCELLENCE'}
                </div>
                <div className="text-sm font-extrabold text-black uppercase tracking-tight mt-0.5">
                  DPT • BPT • CMS&ED
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-1">
                  {isHindi ? 'लाइसेंस्ड फिजियोथेरेपिस्ट' : 'Certified Physical Therapist'}
                </div>
              </div>

              {/* Card 2: Clinical Experience */}
              <div className="relative bg-gradient-to-b from-sky-50/70 to-white border border-sky-200/80 p-4 rounded-2xl shadow-2xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-sm mb-2.5">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-bold text-sky-700 uppercase tracking-wider">
                  {isHindi ? 'व्यावहारिक अनुभव' : 'CLINICAL EXPERIENCE'}
                </div>
                <div className="text-sm font-extrabold text-black uppercase tracking-tight mt-0.5">
                  5+ Years Active Practice
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-1">
                  {isHindi ? 'सैकड़ों सफल रिहैबिलिटेशन' : '1,000+ Relieved Patients'}
                </div>
              </div>

              {/* Card 3: Hospital Residency */}
              <div className="relative bg-gradient-to-b from-emerald-50/70 to-white border border-emerald-200/80 p-4 rounded-2xl shadow-2xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm mb-2.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                  {isHindi ? 'अस्पताल प्रशिक्षण' : 'HOSPITAL RESIDENCY'}
                </div>
                <div className="text-sm font-extrabold text-black uppercase tracking-tight mt-0.5">
                  7 Air Force Hospital
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-1">
                  {isHindi ? 'कानपुर कैंट (पूर्व-इंटर्न)' : 'Kanpur Cantt Military Hospital'}
                </div>
              </div>

            </div>

            {/* Profile Narrative & Clinical Philosophy Card */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-sm space-y-4">
              
              {/* Card Header with Status Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center shadow-sm">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-black font-extrabold uppercase text-sm sm:text-base tracking-wide">
                      {isHindi ? 'चिकित्सीय परिचय एवं उपचार दर्शन' : 'CLINICAL PROFILE & TREATMENT PHILOSOPHY'}
                    </h4>
                    <p className="text-[11px] text-teal-700 font-semibold">
                      {isHindi ? 'मरीज-केंद्रित, वैज्ञानिक एवं स्थायी राहत' : 'Patient-Centric, Evidence-Based Restoration'}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-full">
                  {isHindi ? 'मूल कारण का इलाज' : 'Root-Cause Focused'}
                </span>
              </div>

              {/* Lead Doctor Clinical Mission Statement */}
              <div className="relative rounded-2xl bg-gradient-to-r from-teal-50/70 via-slate-50/50 to-white p-4 sm:p-5 border-l-4 border-l-teal-600 border border-teal-100/80 shadow-2xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-teal-800 bg-white/90 border border-teal-200/80 px-2 py-0.5 rounded-md">
                        {isHindi ? 'डॉ. मोहम्मद फहद आलम का क्लिनिकल परिचय' : 'Clinical Leadership & Mission'}
                      </span>
                    </div>
                    <p className="text-slate-800 text-xs sm:text-sm md:text-[15px] font-medium leading-relaxed">
                      {isHindi ? CLINIC_CONFIG.doctor.bioHindi : CLINIC_CONFIG.doctor.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Scientific Methodology & 3-Step Pathway */}
              <div className="relative rounded-2xl bg-gradient-to-br from-white via-sky-50/20 to-teal-50/30 p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600 ring-2 ring-teal-200"></span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800">
                    {isHindi ? 'संपूर्ण जांच से स्थायी सुधार का वैज्ञानिक मार्ग' : 'Comprehensive Evaluation & Recovery Pathway'}
                  </span>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  {isHindi ? (
                    'कानपुर फिजियो ऑर्थो स्पाइन क्लीनिक में प्रत्येक मरीज की व्यक्तिगत ऑर्थोपेडिक व बायोमैकेनिकल जांच की जाती है। हम अस्थायी रूप से दर्द दबाने के बजाय तंत्रिका और मांसपेशियों के मूल कारण का उपचार करने पर जोर देते हैं, जिससे दर्द दोबारा न लौटे और अनावश्यक सर्जरी से बचा जा सके।'
                  ) : (
                    'At Kanpur Physio Ortho Spine Clinic, every patient undergoes a comprehensive orthopedic and biomechanical evaluation. We believe in treating the root origin of neuromuscular dysfunction rather than merely masking temporary symptoms, helping patients achieve lasting relief and avoid unnecessary surgeries.'
                  )}
                </p>

                {/* 3-Step Micro Pathway */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-teal-100 shadow-2xs">
                    <span className="w-6 h-6 rounded-lg bg-teal-600 text-white text-xs font-black flex items-center justify-center shrink-0">1</span>
                    <div>
                      <p className="text-[11px] font-extrabold text-black uppercase tracking-tight">
                        {isHindi ? 'मूल कारण की जांच' : 'Root-Cause Mapping'}
                      </p>
                      <p className="text-[10px] text-slate-500 font-medium">
                        {isHindi ? 'बायोमैकेनिकल असेसमेंट' : 'Spine & Joint Diagnostics'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-sky-100 shadow-2xs">
                    <span className="w-6 h-6 rounded-lg bg-sky-600 text-white text-xs font-black flex items-center justify-center shrink-0">2</span>
                    <div>
                      <p className="text-[11px] font-extrabold text-black uppercase tracking-tight">
                        {isHindi ? 'लक्षित डीकंप्रेशन' : 'Targeted Decompression'}
                      </p>
                      <p className="text-[10px] text-slate-500 font-medium">
                        {isHindi ? 'मैकेनिकल ट्रैक्शन व थेरेपी' : 'Traction & Mobilization'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-emerald-100 shadow-2xs">
                    <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white text-xs font-black flex items-center justify-center shrink-0">3</span>
                    <div>
                      <p className="text-[11px] font-extrabold text-black uppercase tracking-tight">
                        {isHindi ? 'स्थायी रीहैब व मजबूती' : 'Spine Stabilization'}
                      </p>
                      <p className="text-[10px] text-slate-500 font-medium">
                        {isHindi ? 'दर्द से स्थायी मुक्ति' : 'Relapse Prevention Routine'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Golden Principles of Clinical Excellence */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800">
                    {isHindi ? 'क्लीनिक के ४ मुख्य आधार स्तंभ' : '4 Pillars of Clinical Excellence'}
                  </span>
                  <span className="text-[10px] font-bold text-teal-700 uppercase">
                    {isHindi ? '१००% गैर-सर्जिकल' : '100% Non-Surgical'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="group flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-sm transition-all">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold text-black uppercase tracking-tight">
                        {isHindi ? 'दर्द के मूल कारण का सटीक निदान' : 'Root-Cause Biomechanical Diagnosis'}
                      </p>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                        {isHindi ? 'लक्षण दबाने के बजाय नस, डिस्क व हड्डी की सही जांच' : 'Identifying exact pathology rather than masking symptoms'}
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-sm transition-all">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold text-black uppercase tracking-tight">
                        {isHindi ? '१००% गैर-सर्जिकल थेरेपी दृष्टिकोण' : '100% Non-Surgical Protocols'}
                      </p>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                        {isHindi ? 'कंप्यूटरीकृत ट्रैक्शन एवं मैकेंजी प्रोटोकॉल द्वारा सर्जरी से बचाव' : 'Computerized traction & mobilizations to avoid surgery'}
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-sm transition-all">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold text-black uppercase tracking-tight">
                        {isHindi ? '१-ऑन-१ व्यक्तिगत समर्पित समय' : '1-on-1 Dedicated Therapist Time'}
                      </p>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                        {isHindi ? 'प्रत्येक मरीज को पूरा व्यक्तिगत ध्यान एवं निरंतर प्रगति समीक्षा' : 'Unrushed individual care with continuous monitoring'}
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-sm transition-all">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold text-black uppercase tracking-tight">
                        {isHindi ? 'दीर्घकालिक दर्द रोकथाम रूटीन' : 'Long-Term Relapse Prevention'}
                      </p>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                        {isHindi ? 'दर्द दोबारा न लौटे इसके लिए घरेलू व्यायाम व पोस्चर गाइड' : 'Personalized home routine & ergonomic spine correction'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patient Assurance Strip */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-600">
                <div className="flex items-center gap-1.5 text-teal-800">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>{isHindi ? 'पारदर्शी एवं नैतिक चिकित्सकीय सलाह' : 'Transparent & Ethical Clinical Guidance'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-800">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{isHindi ? 'बिना अग्रिम शुल्क' : 'Zero Advance Registration Fee'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>{isHindi ? 'विजिटिंग आवर्स: 8-11 AM • 4-9 PM (सातों दिन)' : 'Visiting Hours: 8-11 AM • 4-9 PM (All 7 Days)'}</span>
                </div>
              </div>

            </div>

            {/* Direct Consultation Bottom Banner */}
            <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 bg-white/10 px-2 py-0.5 rounded-full">
                  {isHindi ? 'प्रत्यक्ष परामर्श या होम विजिट' : 'Direct Consultation & Home Visit'}
                </span>
                <p className="text-sm sm:text-base font-extrabold uppercase tracking-tight">
                  {isHindi ? 'डॉ. फहद आलम से आज ही संपर्क करें' : 'CONSULT DIRECTLY WITH DR. FAHAD ALAM'}
                </p>
                <p className="text-xs text-teal-100/80">
                  {isHindi 
                    ? 'विजिटिंग आवर्स: प्रातः 8:00 से 11:00 • सायं 4:00 से 9:00 (सातों दिन)' 
                    : 'Visiting Hours: 8:00 AM – 11:00 AM • 4:00 PM – 9:00 PM (Mon – Sun)'}
                </p>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => handleConsultClick()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white text-teal-900 hover:bg-teal-50 active:bg-slate-200 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span>{isHindi ? 'कॉल' : 'CALL'}</span>
                  <span className="text-slate-400">/</span>
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-current shrink-0" />
                  <span>{isHindi ? 'व्हाट्सएप' : 'WHATSAPP'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
