import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function Footer({ language, onNavigateToSection }) {
  const isHindi = language === 'hi';

  const handleNav = (id) => {
    if (onNavigateToSection) {
      onNavigateToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-7 sm:pt-9 pb-20 md:pb-7 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 pb-6 border-b border-slate-900 items-start">
          
          {/* Clinic Brand & Doctor Identity (5 Cols) */}
          <div className="md:col-span-5 space-y-3">
            
            {/* Horizontal Brand Lockup: Logo directly beside Clinic Name */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white p-0.5 rounded-full border border-slate-800 shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
                <img 
                  src="/images/LOgo.png" 
                  alt="Kanpur Physio Ortho Spine Clinic Logo" 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-white font-extrabold uppercase tracking-wide text-sm sm:text-base leading-snug">
                  {isHindi ? CLINIC_CONFIG.clinicNameHindi : CLINIC_CONFIG.clinicName}
                </h3>
                <p className="text-[10px] sm:text-[11px] font-bold text-teal-400 uppercase tracking-wider mt-0.5">
                  {isHindi ? CLINIC_CONFIG.taglineHindi : CLINIC_CONFIG.tagline}
                </p>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed max-w-md">
              {isHindi 
                ? 'कानपुर में समर्पित फिजियोथेरेपी, ऑर्थोपेडिक पुनर्वास और स्पाइन केयर केंद्र — वैज्ञानिक एवं बिना ऑपरेशन दर्द निवारण।' 
                : 'Advanced outpatient physiotherapy & bedside home rehabilitation in Kanpur. Evidence-based spine and orthopedic recovery.'}
            </p>

            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-medium">
              <strong className="text-white">{CLINIC_CONFIG.doctor.name}</strong>
              <span className="text-teal-400 font-bold">•</span>
              <span className="text-slate-400">{CLINIC_CONFIG.doctor.qualifications}</span>
              <span className="text-teal-400 font-bold">•</span>
              <span className="text-teal-300 font-bold">{CLINIC_CONFIG.registrationNumberDisplay}</span>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
              <span>{isHindi ? 'त्वरित लिंक' : 'QUICK LINKS'}</span>
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[11px]">
              <button onClick={() => handleNav('home')} className="hover:text-teal-400 text-left transition cursor-pointer">Home</button>
              <button onClick={() => handleNav('about')} className="hover:text-teal-400 text-left transition cursor-pointer">About</button>
              <button onClick={() => handleNav('services')} className="hover:text-teal-400 text-left transition cursor-pointer">Services</button>
              <button onClick={() => handleNav('contact')} className="hover:text-teal-400 text-left transition cursor-pointer">Contact Us</button>
              <button onClick={() => handleNav('home-visit')} className="hover:text-teal-400 text-left transition cursor-pointer">Home Care</button>
              <button onClick={() => handleNav('faq')} className="hover:text-teal-400 text-left transition cursor-pointer">FAQ</button>
              <button onClick={() => handleNav('testimonials')} className="hover:text-teal-400 text-left transition col-span-2 cursor-pointer">Reviews / Testimonials</button>
            </div>
          </div>

          {/* Contact Coordinates (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
              <span>{isHindi ? 'संपर्क एवं समय' : 'CLINIC COORDINATES'}</span>
            </h4>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="truncate">{CLINIC_CONFIG.address.short}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center gap-1.5">
                  <a 
                    href={CLINIC_CONFIG.contact.phoneTel} 
                    className="flex items-center gap-1 text-white hover:text-teal-300 font-bold transition"
                    title="Direct Phone Call"
                  >
                    <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>{CLINIC_CONFIG.contact.phoneDisplay}</span>
                  </a>
                  <a
                    href={CLINIC_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 p-0.5"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  </a>
                </div>
              </div>

              {/* Visiting Hours Pill in Footer */}
              <div className="flex items-center gap-1.5 text-slate-300 bg-slate-900/80 p-1.5 rounded-lg border border-slate-800">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <div className="text-[10px] leading-tight">
                  <span className="text-slate-400 font-semibold block">{isHindi ? 'विजिटिंग आवर्स (सातों दिन):' : 'Visiting Hours (All 7 Days):'}</span>
                  <span className="text-teal-300 font-bold">8:00–11:00 AM</span>
                  <span className="text-slate-500 mx-1">•</span>
                  <span className="text-teal-300 font-bold">4:00–9:00 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={CLINIC_CONFIG.contact.emailMailto} className="hover:text-white truncate">
                  {CLINIC_CONFIG.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Compact Bottom Bar */}
        <div className="pt-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <strong className="text-slate-300">KANPUR PHYSIO ORTHO SPINE CLINIC</strong>. All Rights Reserved.
          </p>
          <p className="text-slate-500">
            {CLINIC_CONFIG.registrationNumberDisplay} • 83/4A-3, B.M. Market, Near Popular Dharam Kanta, Parampurwa, Kanpur - 208014
          </p>
        </div>

      </div>
    </footer>
  );
}
