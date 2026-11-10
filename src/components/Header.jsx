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
  viewMode, 
  setViewMode,
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
    { id: 'home-visit', labelEn: 'HOME VISITS', labelHi: 'होम विजिट' },
    { id: 'testimonials', labelEn: 'TESTIMONIALS', labelHi: 'प्रशंसापत्र' },
    { id: 'faq', labelEn: 'FAQ', labelHi: 'प्रश्न-उत्तर' },
    { id: 'contact', labelEn: 'CONTACT US', labelHi: 'संपर्क करें' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);

    if (viewMode === 'tabs') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      
      {/* Top Utility Bar - Clean, Compact & Fully Responsive */}
      <div className="bg-slate-900 text-slate-100 text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Left: Timings & Location */}
          <div className="flex items-center gap-3 sm:gap-5 truncate">
            <div className="flex items-center gap-1.5 text-slate-300 shrink-0">
              <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span className="truncate">
                <strong className="text-white hidden sm:inline">
                  {language === 'hi' ? 'समय:' : 'Timings:'}{' '}
                </strong>
                {language === 'hi' ? CLINIC_CONFIG.schedule.timingsHindi : `${CLINIC_CONFIG.schedule.timings} (${CLINIC_CONFIG.schedule.workingDays})`}
              </span>
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

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Clinic Brand & Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group min-w-0"
          >
            {/* Logo Emblem */}
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-white p-1 sm:p-1.5 rounded-xl sm:rounded-2xl border border-teal-500/30 shadow-xs flex items-center justify-center overflow-hidden shrink-0 group-hover:border-teal-600 transition-all">
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
              <p className="text-[10px] sm:text-[11px] font-bold text-teal-700 uppercase tracking-wider mt-0.5 truncate">
                {language === 'hi' ? CLINIC_CONFIG.navbarSubtitleHindi : CLINIC_CONFIG.navbarSubtitle}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links (CALL NOW & WHATSAPP BUTTONS REMOVED PER REQUEST) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-bold uppercase tracking-wider transition-all ${
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

          {/* Mobile Hamburger Toggle Button (Call and WhatsApp buttons removed from here as well) */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
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
              <div className="w-10 h-10 rounded-xl bg-white p-1 border border-teal-200/80 shadow-2xs shrink-0 flex items-center justify-center">
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
            <p className="text-xs font-black text-black uppercase">
              {CLINIC_CONFIG.doctor.name}
            </p>
            <p className="text-[11px] text-teal-800 font-semibold">
              {CLINIC_CONFIG.doctor.qualifications} • {CLINIC_CONFIG.doctor.internship}
            </p>
            <p className="text-[11px] text-slate-600 mt-1 flex items-center gap-1">
              <Clock className="w-3 h-3 text-teal-600 shrink-0" />
              <span>{CLINIC_CONFIG.schedule.timings} ({CLINIC_CONFIG.schedule.workingDays})</span>
            </p>
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
