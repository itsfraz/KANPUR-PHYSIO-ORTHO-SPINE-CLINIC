import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle,
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Globe, 
  ChevronRight
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function Header({ 
  language, 
  setLanguage, 
  activeSection, 
  setActiveSection, 
  onOpenContact
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState(CLINIC_CONFIG.images?.logo || '/logo.svg');
  const [logoError, setLogoError] = useState(false);

  const handleLogoError = () => {
    if (logoSrc !== (CLINIC_CONFIG.images?.logoFallback || '/logo.svg')) {
      setLogoSrc(CLINIC_CONFIG.images?.logoFallback || '/logo.svg');
    } else {
      setLogoError(true);
    }
  };

  const navItems = [
    { id: 'home', labelEn: 'HOME', labelHi: 'होम' },
    { id: 'about', labelEn: 'ABOUT DOCTOR', labelHi: 'डॉक्टर' },
    { id: 'services', labelEn: 'SERVICES', labelHi: 'सेवाएं' },
    { id: 'contact', labelEn: 'CONTACT US', labelHi: 'संपर्क करें' },
    { id: 'home-visit', labelEn: 'HOME VISITS', labelHi: 'होम विजिट' },
    { id: 'faq', labelEn: 'FAQ', labelHi: 'प्रश्न-उत्तर' },
    { id: 'testimonials', labelEn: 'TESTIMONIALS', labelHi: 'प्रशंसापत्र' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      
      {/* Top Utility Bar - Clean, Compact & Fully Responsive */}
      <div className="bg-slate-900 text-slate-100 text-[11px] sm:text-xs py-1.5 pl-[5px] pr-3 sm:pr-6 lg:pr-8 border-b border-slate-800">
        <div className="w-full flex items-center justify-between gap-2">
          
          {/* Left: Timings & Location */}
          <div className="flex items-center gap-3 sm:gap-5 truncate">
            <div className="flex items-center gap-1.5 text-slate-300 shrink-0">
              <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                <span className="font-extrabold uppercase tracking-wide text-white hidden sm:inline">
                  {language === 'hi' ? 'विजिटिंग आवर्स:' : 'Visiting Hours:'}
                </span>
                <span className="bg-teal-950/80 text-teal-300 px-1.5 py-0.5 rounded border border-teal-800/80 font-bold">
                  8:00 AM – 11:00 AM
                </span>
                <span className="text-slate-500 font-bold">•</span>
                <span className="bg-teal-950/80 text-teal-300 px-1.5 py-0.5 rounded border border-teal-800/80 font-bold">
                  4:00 PM – 9:00 PM
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-slate-300 truncate">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="truncate">
                {language === 'hi' ? CLINIC_CONFIG.address.shortHindi : CLINIC_CONFIG.address.short}
              </span>
            </div>
          </div>

          {/* Right: Phone & Language */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button 
              onClick={() => {
                if (onOpenContact) {
                  onOpenContact();
                } else {
                  window.location.href = CLINIC_CONFIG.contact.phoneTel;
                }
              }}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-teal-300 transition-colors bg-slate-800/90 hover:bg-slate-800 px-2 py-0.5 rounded text-[11px] sm:text-xs cursor-pointer"
              title="Call / WhatsApp: +91 9453201140"
            >
              <div className="flex items-center gap-1 shrink-0">
                <Phone className="w-3 h-3 text-teal-400" />
                <MessageCircle className="w-3 h-3 text-emerald-400 fill-current" />
              </div>
              <span className="tracking-wide">{CLINIC_CONFIG.contact.phoneDisplay}</span>
            </button>

            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1 bg-teal-600 hover:bg-teal-500 text-white font-bold px-2 py-0.5 rounded text-[11px] sm:text-xs transition shadow-2xs"
              title="Switch Language / भाषा बदलें"
            >
              <Globe className="w-3 h-3 shrink-0" />
              <span>{language === 'en' ? 'हिंदी' : 'EN'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navbar - Aligned to left with 5px margin from corner */}
      <div className="w-full pl-[5px] pr-3 sm:pr-6 lg:pr-8 py-2 sm:py-2.5">
        <div className="flex items-center justify-between gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          
          {/* Clinic Brand & Logo with exactly 5px left margin from corner */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0 mr-4 sm:mr-6 lg:mr-8 xl:mr-10"
          >
            {/* Logo Emblem */}
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-white p-0.5 rounded-full border-2 border-teal-500/40 shadow-xs flex items-center justify-center overflow-hidden shrink-0 group-hover:border-teal-600 transition-all">
              {!logoError ? (
                <img 
                  src={logoSrc} 
                  alt="Kanpur Physio Ortho Spine Clinic Official Logo"
                  className="w-full h-full object-contain"
                  onError={handleLogoError}
                />
              ) : (
                <div className="text-center px-1">
                  <div className="text-[9px] font-black text-teal-800 leading-tight">KANPUR PHYSIO</div>
                </div>
              )}
            </div>

            {/* Shortened, Elegant Clinic Brand Lockup for Navbar */}
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-black font-black uppercase tracking-tight sm:tracking-wide text-sm sm:text-base md:text-lg lg:text-xl leading-none">
                  {language === 'hi' ? CLINIC_CONFIG.shortNameHindi : CLINIC_CONFIG.shortName}
                </span>
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded border border-teal-200 shrink-0">
                  {language === 'hi' ? 'ऑर्थो • स्पाइन' : 'ORTHO • SPINE'}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-bold text-teal-700 uppercase tracking-wider mt-1 truncate">
                {language === 'hi' ? CLINIC_CONFIG.navbarSubtitleHindi : CLINIC_CONFIG.navbarSubtitle}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links cleanly aligned with ml-auto and comfortable gap */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 shrink-0 ml-auto">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 xl:px-3.5 py-1.5 rounded-lg text-xs xl:text-sm font-bold uppercase tracking-wider transition-all ${
                    isActive 
                      ? 'bg-teal-700 text-white shadow-xs' 
                      : 'text-slate-800 hover:text-teal-700 hover:bg-teal-50'
                  }`}
                >
                  {language === 'hi' ? item.labelHi : item.labelEn}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden shrink-0 ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-900 hover:bg-slate-100 rounded-xl transition border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation (Call and WhatsApp buttons removed from drawer footer) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-5 shadow-xl animate-fadeIn">
          
          {/* Quick Doctor Summary */}
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 mb-3">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-10 h-10 rounded-full bg-white p-0.5 border border-teal-200/80 shadow-2xs shrink-0 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/LOgo.png" 
                  alt="Kanpur Physio Ortho Spine Clinic" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-black text-black uppercase">
                  {CLINIC_CONFIG.shortName}
                </p>
                <p className="text-[10px] text-teal-700 font-bold uppercase">
                  {CLINIC_CONFIG.navbarSubtitle}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 pt-2 border-t border-teal-200/60">
              <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 ring-1 ring-teal-300">
                <img 
                  src="/images/Profile-Image.jpg" 
                  alt="Dr. Mohammad Fahad Alam"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { e.currentTarget.src = '/doctor-fahad-alam.svg'; }}
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-black text-black uppercase truncate">
                  {CLINIC_CONFIG.doctor.name}
                </p>
                <p className="text-[11px] text-teal-800 font-semibold truncate">
                  {CLINIC_CONFIG.doctor.qualifications} • {CLINIC_CONFIG.doctor.internship}
                </p>
              </div>
            </div>
            <div className="mt-2.5 p-2 rounded-xl bg-teal-50 border border-teal-200/90 text-[11px] text-slate-800 space-y-1">
              <div className="flex items-center justify-between font-bold text-teal-900">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span>{language === 'hi' ? 'विजिटिंग आवर्स' : 'Visiting Hours'}</span>
                </span>
                <span className="text-[10px] bg-teal-200/80 text-teal-950 px-1.5 py-0.2 rounded font-extrabold">All 7 Days</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-center pt-0.5">
                <span className="bg-white py-1 px-1 rounded-lg border border-teal-100 font-extrabold text-black text-[10px]">
                  8:00 AM – 11:00 AM
                </span>
                <span className="bg-white py-1 px-1 rounded-lg border border-teal-100 font-extrabold text-black text-[10px]">
                  4:00 PM – 9:00 PM
                </span>
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wide transition ${
                    isActive 
                      ? 'bg-teal-700 text-white shadow-xs' 
                      : 'text-slate-900 hover:bg-teal-50'
                  }`}
                >
                  <span>{language === 'hi' ? item.labelHi : item.labelEn}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
