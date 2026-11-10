import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HomeTopSlider from './components/HomeTopSlider';
import AboutDoctor from './components/AboutDoctor';
import Services from './components/Services';
import TreatmentPlanner from './components/TreatmentPlanner';
import HomeVisit from './components/HomeVisit';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import QuickContactModal from './components/QuickContactModal';
import { CLINIC_CONFIG } from './config/clinicData';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState('en'); // 'en' | 'hi'
  const [activeSection, setActiveSection] = useState('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalMessage, setContactModalMessage] = useState('');
  const [defaultAppointmentType, setDefaultAppointmentType] = useState('Clinic Visit');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Open the unified Call / WhatsApp contact modal
  const handleOpenContact = (customMessage = '') => {
    setContactModalMessage(customMessage);
    setIsContactModalOpen(true);
  };

  // Monitor scroll for active section highlight and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'about', 'services', 'home-visit', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateToSection = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectHomeVisit = () => {
    setDefaultAppointmentType('Home Visit');
    handleNavigateToSection('contact');
    setTimeout(() => {
      const el = document.getElementById('homeAddressInput');
      if (el) {
        el.focus();
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 450);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-teal-600 selection:text-white relative overflow-x-hidden w-full max-w-full">
      
      {/* Main Sticky Header */}
      <Header
        language={language}
        setLanguage={setLanguage}
        activeSection={activeSection}
        setActiveSection={handleNavigateToSection}
        onOpenContact={handleOpenContact}
      />

      {/* Main Single Page Flow */}
      <main className="w-full overflow-x-hidden">
        <div id="home">
          <HomeTopSlider 
            language={language} 
            onNavigateToSection={handleNavigateToSection}
            onOpenContact={handleOpenContact}
            onSelectHomeVisit={handleSelectHomeVisit}
          />
          <Hero 
            language={language} 
            onNavigateToSection={handleNavigateToSection}
            onOpenContact={handleOpenContact}
          />
        </div>
        <AboutDoctor 
          language={language} 
          onOpenContact={handleOpenContact}
        />
        <Services 
          language={language} 
          onOpenContact={handleOpenContact}
        />
        <TreatmentPlanner 
          language={language} 
          onNavigateToContact={() => handleNavigateToSection('contact')} 
        />
        <HomeVisit 
          language={language} 
          onSelectHomeVisit={handleSelectHomeVisit} 
          onOpenContact={handleOpenContact}
        />
        <Testimonials language={language} />
        <FAQ 
          language={language} 
          onOpenContact={handleOpenContact}
        />
        <ContactSection 
          language={language} 
          defaultAppointmentType={defaultAppointmentType} 
        />
      </main>

      {/* Footer */}
      <Footer 
        language={language} 
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Sticky Mobile Bottom Bar (Single unified Call / WhatsApp button) */}
      <MobileBottomBar 
        language={language} 
        onOpenContact={handleOpenContact}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp language={language} />

      {/* Back to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-6 left-4 sm:left-6 z-40 p-2.5 sm:p-3 rounded-full bg-slate-900/90 hover:bg-black text-white shadow-xl backdrop-blur-xs transition transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Quick Contact Choice Modal (Single Button Triggers Both Call & WhatsApp) */}
      <QuickContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        language={language}
        customMessage={contactModalMessage}
      />

    </div>
  );
}
