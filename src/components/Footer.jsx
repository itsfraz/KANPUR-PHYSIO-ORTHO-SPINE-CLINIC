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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-8 pb-5 border-b border-slate-900">
          
          {/* Clinic Brand & Doctor Identity (5 Cols) */}
          <div className="md:col-span-5 space-y-2.5">
            <div className="inline-block bg-white p-2 rounded-xl border border-slate-800 shadow-md">
              <img 
                src="/images/LOgo.png" 
                alt="Kanpur Physio Ortho Spine Clinic Logo" 
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
              />
            </div>

            <h3 className="text-white font-extrabold uppercase tracking-wide text-sm sm:text-base lg:text-lg leading-tight">
              {isHindi ? CLINIC_CONFIG.clinicNameHindi : CLINIC_CONFIG.clinicName}
            </h3>

            <p className="text-[10px] sm:text-[11px] font-bold text-teal-400 uppercase tracking-wider">
              {isHindi ? CLINIC_CONFIG.taglineHindi : CLINIC_CONFIG.tagline}
            </p>

            <p className="text-[11px] text-slate-400 leading-relaxed max-w-sm">
              {isHindi 
                ? 'कानपुर में समर्पित फिजियोथेरेपी, ऑर्थोपेडिक पुनर्वास और स्पाइन केयर केंद्र।' 
                : 'Advanced outpatient physiotherapy & home rehabilitation in Kanpur. Evidence-based spine & orthopedic care.'}
            </p>

            <div className="text-[11px] text-slate-300 font-medium">
              <strong className="text-white">{CLINIC_CONFIG.doctor.name}</strong> ({CLINIC_CONFIG.doctor.qualifications})
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-white font-extrabold uppercase text-[11px] tracking-wider">
              {isHindi ? 'त्वरित लिंक' : 'QUICK LINKS'}
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px]">
              <button onClick={() => handleNav('home')} className="hover:text-teal-400 text-left transition">Home</button>
              <button onClick={() => handleNav('about')} className="hover:text-teal-400 text-left transition">About</button>
              <button onClick={() => handleNav('services')} className="hover:text-teal-400 text-left transition">Services</button>
              <button onClick={() => handleNav('home-visit')} className="hover:text-teal-400 text-left transition">Home Care</button>
              <button onClick={() => handleNav('testimonials')} className="hover:text-teal-400 text-left transition">Reviews</button>
              <button onClick={() => handleNav('faq')} className="hover:text-teal-400 text-left transition">FAQ</button>
              <button onClick={() => handleNav('contact')} className="hover:text-teal-400 text-left transition col-span-2">Contact Us</button>
            </div>
          </div>

          {/* Contact Coordinates (4 Cols) */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-white font-extrabold uppercase text-[11px] tracking-wider">
              {isHindi ? 'संपर्क एवं समय' : 'CLINIC COORDINATES'}
            </h4>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="truncate">{CLINIC_CONFIG.address.short}</span>
              </div>
              <div className="flex items-center gap-2">
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
                <span className="text-slate-700">|</span>
                <div className="flex items-center gap-1 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>9 AM – 10 PM</span>
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
            Educational & appointment inquiry portal • Param Purwa, Juhi, Kanpur - 208014
          </p>
        </div>

      </div>
    </footer>
  );
}
