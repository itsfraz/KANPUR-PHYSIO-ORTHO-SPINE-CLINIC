import React from 'react';
import { 
  Home, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  HeartPulse, 
  UserCheck, 
  ArrowRight,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function HomeVisit({ language, onSelectHomeVisit, onOpenContact }) {
  const isHindi = language === 'hi';

  const homeBenefits = [
    {
      titleEn: "Senior Citizens & Geriatric Mobility",
      titleHi: "बुजुर्गों एवं वरिष्ठ नागरिकों हेतु विशेष देखभाल",
      descEn: "Safe, compassionate mobility training, fall prevention exercises, and joint loosening at the patient's bedside without transit fatigue.",
      descHi: "बिना यात्रा की परेशानी के घर पर ही संतुलन सुधारने, जोड़ों का दर्द कम करने और गिरने से बचाव के वैज्ञानिक व्यायाम।"
    },
    {
      titleEn: "Post-Surgical Bedside Recovery",
      titleHi: "सर्जरी के बाद बेडसाइड पुनर्वास",
      descEn: "Crucial early-stage mobilization following Total Knee Replacement (TKR), Total Hip Replacement (THR), and spine surgeries.",
      descHi: "नी रिप्लेसमेंट, हिप रिप्लेसमेंट और स्पाइन सर्जरी के बाद घर पर ही सुरक्षित चलना-फिरना और जोड़ मोड़ना सिखाना।"
    },
    {
      titleEn: "Neurological & Stroke Rehabilitation",
      titleHi: "स्ट्रोक एवं पैरालिसिस होम थेरेपी",
      descEn: "Intensive neuro-developmental therapy in the home environment, promoting functional recovery and activities of daily living.",
      descHi: "लकवाग्रस्त मरीजों के लिए उनके अपने घर के परिचित माहौल में दैनिक क्रियाएं फिर से सीखने हेतु गहन फिजियोथेरेपी।"
    },
    {
      titleEn: "Caregiver & Family Training",
      titleHi: "परिवार एवं सहायकों को प्रशिक्षण",
      descEn: "We guide family members on safe patient transfer techniques, ergonomic positioning, and assistance during daily movements.",
      descHi: "मरीज को सुरक्षित उठाने, बैठाने, करवट दिलाने और पोजीशनिंग के सही वैज्ञानिक तरीके परिजनों को सिखाए जाते हैं।"
    }
  ];

  const steps = [
    {
      step: "01",
      titleEn: "Call or WhatsApp",
      titleHi: "कॉल या व्हाट्सएप करें",
      descEn: "Reach Dr. Mohammad Fahad Alam directly at 9453201140.",
      descHi: "9453201140 पर सीधे संपर्क करें।"
    },
    {
      step: "02",
      titleEn: "Share Location & Condition",
      titleHi: "स्थान एवं समस्या बताएं",
      descEn: "Inform your address in Kanpur and medical history.",
      descHi: "कानपुर में अपना इलाका और मरीज की समस्या बताएं।"
    },
    {
      step: "03",
      titleEn: "Confirm Slot & Charges",
      titleHi: "समय व शुल्क तय करें",
      descEn: "Confirm therapist visit time and fee structure.",
      descHi: "विजिट का उचित समय और विजिट शुल्क तय करें।"
    },
    {
      step: "04",
      titleEn: "Bedside Treatment Begins",
      titleHi: "घर पर उपचार प्रारंभ",
      descEn: "Receive professional, sanitized care in home comfort.",
      descHi: "घर के आरामदायक माहौल में उच्च स्तरीय फिजियोथेरेपी।"
    }
  ];

  return (
    <section id="home-visit" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white via-teal-50/40 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card Header */}
        <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 text-white shadow-xl relative overflow-hidden mb-12 sm:mb-16">
          
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-teal-500/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/80 border border-teal-500/40 text-teal-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
              <Home className="w-3.5 h-3.5 shrink-0" />
              <span>{isHindi ? 'कानपुर होम केयर सेवा' : 'Dedicated Home Physiotherapy Service'}</span>
            </div>

            <h2 className="text-white font-extrabold uppercase tracking-tight sm:tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight mb-3 sm:mb-4">
              {isHindi ? 'कानपुर में घर पर फिजियोथेरेपी सेवा' : 'HOME VISIT PHYSIOTHERAPY IN KANPUR'}
            </h2>

            <p className="text-teal-100 text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6 font-normal">
              {isHindi ? (
                'यदि मरीज चलने-फिरने में असमर्थ हैं, बुजुर्ग हैं या हाल ही में सर्जरी हुई है, तो क्लीनिक आने की असुविधा से बचें। डॉ. मोहम्मद फहद आलम व्यक्तिगत रूप से आपके घर आकर पेशेवर फिजियोथेरेपी उपचार प्रदान करते हैं।'
              ) : (
                'Professional, one-on-one physiotherapy delivered right to your doorstep across Kanpur. Specifically designed for senior citizens, post-operative orthopedic recovery, neurological trauma, and patients with restricted mobility.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3.5 pt-1">
              {/* Single Button for Call and WhatsApp */}
              <button
                onClick={() => {
                  if (onOpenContact) {
                    onOpenContact('Hello Dr. Mohammad Fahad Alam, I would like to check availability and charges for Home Visit Physiotherapy in Kanpur.');
                  } else {
                    window.location.href = CLINIC_CONFIG.contact.phoneTel;
                  }
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md transition active:scale-98"
              >
                <div className="flex items-center gap-1.5">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 shrink-0" />
                    <span>{isHindi ? 'कॉल' : 'CALL'}</span>
                  </span>
                  <span className="text-slate-950/60 font-bold">/</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 fill-current shrink-0" />
                    <span>{isHindi ? 'व्हाट्सएप' : 'WHATSAPP'}</span>
                  </span>
                  <span className="text-[11px] font-bold text-slate-950/90 ml-0.5">(9453201140)</span>
                </div>
              </button>

              <button
                onClick={() => {
                  if (onSelectHomeVisit) {
                    onSelectHomeVisit();
                  } else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition border border-white/20"
              >
                <span>{isHindi ? 'ऑनलाइन फॉर्म भरें' : 'FILL HOME VISIT FORM'}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-teal-200/90">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>All Major Kanpur Localities Covered</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Flexible Slots (Morning to Evening)</span>
              </span>
            </div>

          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-black font-extrabold uppercase tracking-wide text-lg sm:text-xl md:text-2xl">
              {isHindi ? 'घर पर फिजियोथेरेपी किसके लिए आवश्यक है?' : 'WHO BENEFITS FROM HOME PHYSIOTHERAPY?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {isHindi ? 'अस्पताल के चक्कर काटने से बचें, घर पर सुरक्षित आराम से ठीक हों' : 'Clinical rehabilitation delivered in a familiar, comfortable domestic setting'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {homeBenefits.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs hover:border-teal-300 transition-all flex items-start gap-3 sm:gap-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-black font-extrabold uppercase tracking-wide text-xs sm:text-sm md:text-base mb-1">
                    {isHindi ? item.titleHi : item.titleEn}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {isHindi ? item.descHi : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Steps How Home Visit Works */}
        <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <h3 className="text-black font-extrabold uppercase tracking-wide text-base sm:text-lg md:text-xl">
              {isHindi ? 'होम विजिट प्रक्रिया (4 आसान चरण)' : 'HOW HOME VISIT SERVICE WORKS'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Simple, transparent, and prompt scheduling for Kanpur patients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {steps.map((st, i) => (
              <div key={i} className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200/90 text-left relative">
                <span className="text-xl sm:text-2xl font-black text-teal-600/30 absolute top-3 sm:top-4 right-3 sm:right-4">
                  {st.step}
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-teal-600 text-white font-bold flex items-center justify-center text-xs mb-2.5 sm:mb-3">
                  {st.step}
                </div>
                <h5 className="text-black font-extrabold uppercase tracking-wide text-xs sm:text-sm mb-1">
                  {isHindi ? st.titleHi : st.titleEn}
                </h5>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {isHindi ? st.descHi : st.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
