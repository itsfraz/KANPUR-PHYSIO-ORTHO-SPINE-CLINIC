import React, { useState } from 'react';
import { 
  Award, 
  GraduationCap, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Camera, 
  Sparkles, 
  Stethoscope, 
  HeartPulse, 
  Activity, 
  UserCheck 
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function AboutDoctor({ language, onOpenContact }) {
  const isHindi = language === 'hi';
  const [doctorSrc, setDoctorSrc] = useState(CLINIC_CONFIG.images?.doctor || '/doctor-fahad-alam.svg');
  const [interiorSrc, setInteriorSrc] = useState(CLINIC_CONFIG.images?.clinicInterior || '/clinic-interior.svg');
  const [baySrc, setBaySrc] = useState(CLINIC_CONFIG.images?.exerciseBay || '/exercise-bay.svg');
  const [photoError, setPhotoError] = useState(false);

  const handleDoctorError = () => {
    if (doctorSrc !== (CLINIC_CONFIG.images?.doctorFallback || '/doctor-fahad-alam.svg')) {
      setDoctorSrc(CLINIC_CONFIG.images?.doctorFallback || '/doctor-fahad-alam.svg');
    } else {
      setPhotoError(true);
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>{isHindi ? 'क्लीनिकल विशेषज्ञता' : 'Clinical Leadership & Experience'}</span>
          </div>

          {/* MANDATORY HEADING RULE: DARK BLACK, EXTRA-BOLD, UPPERCASE BLOCK LETTERS */}
          <h2 className="text-black font-extrabold uppercase tracking-tight sm:tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
            {isHindi ? 'डॉ. मोहम्मद फहद आलम और हमारे क्लीनिक के बारे में' : 'ABOUT DR. MOHAMMAD FAHAD ALAM & OUR CLINIC'}
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-teal-600 mx-auto mt-3 sm:mt-4 rounded-full" />

          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-sm md:text-base">
            {isHindi 
              ? 'वैज्ञानिक प्रमाणों पर आधारित फिजियोथेरेपी और रीढ़ की हड्डी का विशेषज्ञ उपचार' 
              : 'Dedicated to evidence-based musculoskeletal care, spine stabilization, and holistic patient recovery in Kanpur.'}
          </p>
        </div>

        {/* Doctor Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Dedicated High-Resolution Photo Frame (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Main Doctor Frame */}
            <div className="relative rounded-2xl sm:rounded-3xl border-2 border-dashed border-teal-500/50 bg-gradient-to-br from-teal-50/70 via-slate-50 to-sky-50/70 p-4 sm:p-6 text-center shadow-md overflow-hidden group">
              
              {/* Doctor Avatar / Image Slot */}
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 mx-auto rounded-2xl bg-white border-2 border-teal-200 shadow-sm flex flex-col items-center justify-center p-1.5 overflow-hidden mb-4">
                {!photoError ? (
                  <img 
                    src={doctorSrc} 
                    alt="Dr. Mohammad Fahad Alam - Physical Therapist"
                    className="w-full h-full object-cover rounded-xl"
                    onError={handleDoctorError}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center h-full p-2">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mb-1.5">
                      <Stethoscope className="w-6 h-6 sm:w-8 h-8" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-black uppercase text-teal-800 tracking-wider">
                      DOCTOR'S HD PHOTO SLOT
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-medium text-slate-500 mt-0.5">
                      {CLINIC_CONFIG.doctor.name}
                    </span>
                    <span className="text-[7px] sm:text-[8px] text-teal-600 font-semibold bg-teal-50 px-2 py-0.5 rounded-full mt-1 border border-teal-200">
                      Upload Pending per brief
                    </span>
                  </div>
                )}
              </div>

              {/* Doctor Card Badge */}
              <div className="space-y-1">
                <h3 className="text-black font-extrabold text-base sm:text-xl uppercase tracking-wide">
                  {isHindi ? CLINIC_CONFIG.doctor.nameHindi : CLINIC_CONFIG.doctor.name}
                </h3>
                <p className="text-[11px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider">
                  {isHindi ? CLINIC_CONFIG.doctor.titleHindi : CLINIC_CONFIG.doctor.title}
                </p>
                <p className="text-xs font-semibold text-slate-700">
                  {CLINIC_CONFIG.doctor.qualifications}
                </p>
              </div>

              {/* Photo replacement guide pill for owner */}
              <div className="mt-3 pt-3 border-t border-teal-200/60 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-slate-500 font-medium">
                <Camera className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Original High-Resolution Photo Slot</span>
              </div>
            </div>

            {/* Clinic Facility Photos Row Placeholder */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center group overflow-hidden">
                <div className="w-full h-20 sm:h-24 rounded-lg overflow-hidden border border-slate-200 mb-1.5 shadow-2xs">
                  <img 
                    src={interiorSrc} 
                    alt="Clinic Treatment Area"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => setInteriorSrc('/clinic-interior.svg')}
                  />
                </div>
                <p className="text-[10px] sm:text-[11px] font-bold text-slate-800 uppercase tracking-wide">Treatment Area</p>
                <p className="text-[9px] text-slate-500 font-medium">Modern Consultation Setup</p>
              </div>

              <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center group overflow-hidden">
                <div className="w-full h-20 sm:h-24 rounded-lg overflow-hidden border border-slate-200 mb-1.5 shadow-2xs">
                  <img 
                    src={baySrc} 
                    alt="Rehabilitation & Exercise Bay"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => setBaySrc('/exercise-bay.svg')}
                  />
                </div>
                <p className="text-[10px] sm:text-[11px] font-bold text-slate-800 uppercase tracking-wide">Exercise Bay</p>
                <p className="text-[9px] text-slate-500 font-medium">Rehabilitation Equipment</p>
              </div>
            </div>

          </div>

          {/* Right Column: Bio, Qualifications & Experience (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Official Clinic Logo Identification Banner */}
            <div className="p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-2xs">
              <div className="h-10 sm:h-12 max-w-[210px] sm:max-w-[260px] flex items-center">
                <img 
                  src="/images/LOgo.png" 
                  alt="Kanpur Physio Ortho Spine Clinic Official Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="text-right">
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-teal-800 bg-teal-100/80 px-2.5 py-1 rounded-lg border border-teal-200 inline-block">
                  {isHindi ? 'मुख्य फिजियोथेरेपिस्ट' : 'Lead Physical Therapist'}
                </span>
              </div>
            </div>

            {/* Credential Badges Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              
              <div className="bg-teal-50/70 border border-teal-200 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-teal-800 uppercase">
                    {isHindi ? 'शैक्षणिक योग्यता' : 'QUALIFICATIONS'}
                  </div>
                  <div className="text-xs font-black text-black uppercase">
                    {CLINIC_CONFIG.doctor.qualifications}
                  </div>
                </div>
              </div>

              <div className="bg-sky-50/70 border border-sky-200 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl flex items-start gap-2.5">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-sky-800 uppercase">
                    {isHindi ? 'नैदानिक अनुभव' : 'EXPERIENCE'}
                  </div>
                  <div className="text-xs font-black text-black uppercase">
                    {CLINIC_CONFIG.doctor.experience}
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-emerald-800 uppercase">
                    {isHindi ? 'अस्पताल प्रशिक्षण' : 'HOSPITAL TRAINING'}
                  </div>
                  <div className="text-xs font-black text-black uppercase">
                    7 AIR FORCE HOSPITAL
                  </div>
                  <div className="text-[9px] text-slate-600">Kanpur Cantt</div>
                </div>
              </div>

            </div>

            {/* Profile Narrative */}
            <div className="bg-slate-50 border border-slate-200/80 p-4 sm:p-5 rounded-xl sm:rounded-2xl space-y-2.5 sm:space-y-3">
              <h4 className="text-black font-extrabold uppercase text-xs sm:text-sm tracking-wide flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{isHindi ? 'चिकित्सीय परिचय एवं दृष्टिकोण' : 'CLINICAL PROFILE & TREATMENT PHILOSOPHY'}</span>
              </h4>
              <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">
                {isHindi ? CLINIC_CONFIG.doctor.bioHindi : CLINIC_CONFIG.doctor.bio}
              </p>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {isHindi ? (
                  'क्लीनिक में प्रत्येक मरीज की व्यक्तिगत जांच की जाती है और दर्द के मूल कारण का पता लगाकर एक सटीक फिजियोथेरेपी योजना बनाई जाती है। हमारा लक्ष्य केवल दर्द दबाना नहीं बल्कि रीढ़ की स्थिरता, मांसपेशियों की ताकत और प्राकृतिक गतिशीलता को हमेशा के लिए बहाल करना है।'
                ) : (
                  'At Kanpur Physio Ortho Spine Clinic, every patient undergoes a comprehensive orthopedic and biomechanical evaluation. We believe in treating the root origin of neuromuscular dysfunction rather than merely masking temporary symptoms, preventing chronic recurrence.'
                )}
              </p>
            </div>

            {/* Key Clinical Focus Areas */}
            <div className="space-y-2.5">
              <h4 className="text-black font-extrabold uppercase text-[11px] sm:text-xs tracking-wider">
                {isHindi ? 'विशेष विशेषज्ञता क्षेत्र:' : 'CORE CLINICAL COMPETENCIES:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CLINIC_CONFIG.doctor.specializations.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white border border-slate-200 p-2 sm:p-2.5 rounded-xl shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 shrink-0" />
                    <span className="truncate">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Consultation Single CTA */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
              <button
                onClick={() => {
                  if (onOpenContact) {
                    onOpenContact('Hello Dr. Mohammad Fahad Alam, I would like to consult with you regarding a physiotherapy condition.');
                  } else {
                    window.location.href = CLINIC_CONFIG.contact.phoneTel;
                  }
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 active:bg-black text-white font-extrabold text-xs uppercase tracking-wider transition shadow-sm active:scale-98"
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
                <span className="text-[11px] text-teal-200 font-semibold">({CLINIC_CONFIG.contact.phoneRaw})</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
