import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  MessageCircle 
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function HomeTopSlider({ 
  language = 'en', 
  onNavigateToSection, 
  onOpenContact 
}) {
  const isHindi = language === 'hi';

  // Base clinical images from public/images/
  const slides = [
    {
      id: 1,
      image: '/images/sli-1.jpg',
      alt: 'Kanpur Physio Ortho Spine Clinic - Spine Care & Decompression Bay'
    },
    {
      id: 2,
      image: '/images/sli-2.jpg',
      alt: 'Kanpur Physio Ortho Spine Clinic - Orthopedic Rehabilitation & Exercise Bay'
    },
    {
      id: 3,
      image: '/images/sli-3.jpg',
      alt: 'Kanpur Physio Ortho Spine Clinic - Advanced Modalities & Patient Care'
    },
    {
      id: 4,
      image: '/images/sli-4.webp',
      alt: 'Kanpur Physio Ortho Spine Clinic - Clinical Therapy & Treatment Equipment'
    },
    {
      id: 5,
      image: '/images/sli.png',
      alt: 'Kanpur Physio Ortho Spine Clinic - Comprehensive Musculoskeletal Rehabilitation'
    }
  ];

  // Extended slides array for seamless infinite looping: [cloneLast, slide1, slide2, slide3, cloneFirst]
  const extendedSlides = [
    { ...slides[slides.length - 1], id: 'clone-last' },
    ...slides,
    { ...slides[0], id: 'clone-first' }
  ];

  // Start at index 1 (the first real slide)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Automatic 3-Second Infinite Slide Timer (resets on each slide change so each image displays for 3 full seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000); // 3 seconds delay

    return () => clearInterval(timer);
  }, [currentIndex]);

  // Seamless Infinite Loop Boundary Handler (instantly snaps without animation when reaching clone)
  const handleTransitionEnd = () => {
    if (currentIndex >= extendedSlides.length - 1) {
      // Reached clone of slide 1 at index 4 -> instantly snap back to real slide 1 at index 1
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      // Reached clone of slide 3 at index 0 -> instantly snap back to real slide 3 at index 3
      setIsTransitioning(false);
      setCurrentIndex(slides.length);
    }
  };

  const nextSlide = () => {
    if (currentIndex >= extendedSlides.length - 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (idx) => {
    setIsTransitioning(true);
    setCurrentIndex(idx + 1);
  };

  // Compute active dot index (0, 1, or 2)
  const getActiveDotIndex = () => {
    if (currentIndex <= 0) return slides.length - 1;
    if (currentIndex >= extendedSlides.length - 1) return 0;
    return currentIndex - 1;
  };
  const activeDotIndex = getActiveDotIndex();

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Bottom Center Contact Button Click Handler
  const handleContactClick = () => {
    const defaultMsg = isHindi 
      ? 'नमस्ते डॉ. मोहम्मद फहद आलम, मैं कानपुर फिजियो ऑर्थो स्पाइन क्लीनिक में अपॉइंटमेंट बुक करना चाहता हूँ।'
      : 'Hello Dr. Mohammad Fahad Alam, I would like to book a physiotherapy appointment at Kanpur Physio Ortho Spine Clinic.';
    
    if (onOpenContact) {
      onOpenContact(defaultMsg);
    } else {
      const phoneClean = CLINIC_CONFIG.contact.phone;
      window.open(`https://wa.me/91${phoneClean}?text=${encodeURIComponent(defaultMsg)}`, '_blank');
    }
  };

  return (
    <div 
      className="relative w-full bg-slate-950 overflow-hidden select-none border-b border-slate-200"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Home Image Carousel Slider"
    >
      {/* Infinite Loop Whole Image Sliding Track */}
      <div 
        className="flex w-full"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, idx) => (
          <div 
            key={`${slide.id}-${idx}`}
            className="w-full flex-shrink-0 relative h-[320px] sm:h-[420px] md:h-[500px] lg:h-[560px] xl:h-[620px] bg-slate-950 flex items-center justify-center overflow-hidden"
          >
            {/* Ambient Blurred Backdrop for seamless color harmony without cropping */}
            <div 
              className="absolute inset-0 bg-cover bg-center filter blur-2xl scale-110 opacity-30 pointer-events-none"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* 100% Full Uncropped Image (Never cut off or sliced) */}
            <img 
              src={slide.image} 
              alt={slide.alt}
              className="relative z-10 w-full h-full object-contain object-center"
              onError={(e) => {
                if (slide.image === '/images/sli-4.webp') {
                  e.currentTarget.src = '/images/sli 4.webp';
                } else {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/clinic-interior.svg';
                }
              }}
            />

            {/* Subtle soft gradient scrim at bottom so the contact button remains readable */}
            <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-15" />
          </div>
        ))}
      </div>

      {/* Floating Navigation Controls (Left & Right Arrow Buttons) */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 text-white shadow-xl backdrop-blur-md flex items-center justify-center transition hover:scale-110 active:scale-95 border border-white/20"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 text-white shadow-xl backdrop-blur-md flex items-center justify-center transition hover:scale-110 active:scale-95 border border-white/20"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* BOTTOM CENTER: Contact Button (Call / WhatsApp) + Indicator Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2.5 w-auto max-w-[90%] pointer-events-auto">
        
        {/* Contact Button in Bottom Center */}
        <button
          onClick={handleContactClick}
          className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-teal-800 hover:bg-teal-900 active:bg-black text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xl backdrop-blur-md border border-white/30 transition-all transform hover:scale-105 active:scale-95 group"
        >
          <Phone className="w-4 h-4 text-teal-300 shrink-0 group-hover:rotate-12 transition-transform" />
          <span>{isHindi ? 'कॉल' : 'CALL'}</span>
          <span className="text-teal-400/60 font-bold">/</span>
          <MessageCircle className="w-4 h-4 text-emerald-300 fill-current shrink-0" />
          <span>{isHindi ? 'व्हाट्सएप' : 'WHATSAPP'}</span>
        </button>

        {/* Slide Indicator Dots */}
        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeDotIndex === idx 
                  ? 'w-6 bg-teal-400 shadow-xs' 
                  : 'w-2 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
