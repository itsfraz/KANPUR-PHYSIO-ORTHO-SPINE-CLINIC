import React, { useState } from 'react';
import { 
  Activity, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  HelpCircle,
  Stethoscope,
  Flame,
  HeartPulse,
  Home
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function TreatmentPlanner({ language, onNavigateToContact }) {
  const isHindi = language === 'hi';

  const [selectedCondition, setSelectedCondition] = useState('back');
  const [painStage, setPainStage] = useState('chronic');

  const conditions = [
    { id: 'back', labelEn: 'Lower Back & Sciatica', labelHi: 'कमर दर्द एवं साइटिका', icon: 'Flame' },
    { id: 'neck', labelEn: 'Neck & Cervical Spine', labelHi: 'गर्दन दर्द व सर्वाइकल', icon: 'Activity' },
    { id: 'knee', labelEn: 'Knee & Joint Arthritis', labelHi: 'घुटने का दर्द व गठिया', icon: 'Activity' },
    { id: 'shoulder', labelEn: 'Frozen Shoulder & Arm', labelHi: 'फ्रोजन शोल्डर (कंधा जाम)', icon: 'Activity' },
    { id: 'postop', labelEn: 'Post-Surgery (TKR/THR)', labelHi: 'ऑपरेशन के बाद का रिहैब', icon: 'HeartPulse' },
    { id: 'neuro', labelEn: 'Stroke / Paralysis Care', labelHi: 'स्ट्रोक व पैरालिसिस केयर', icon: 'Activity' },
    { id: 'home', labelEn: 'Home Visit Physiotherapy', labelHi: 'घर पर फिजियोथेरेपी', icon: 'Home' },
  ];

  const stages = [
    { id: 'acute', labelEn: 'Recent (< 2 Weeks)', labelHi: 'नया दर्द (2 हफ्ते से कम)', desc: 'Acute onset, sudden spasm' },
    { id: 'subacute', labelEn: 'Moderate (2–6 Weeks)', labelHi: 'मध्यम (2-6 हफ्ते)', desc: 'Persisting or recurring discomfort' },
    { id: 'chronic', labelEn: 'Chronic (6+ Weeks)', labelHi: 'पुराना दर्द (6+ हफ्ते या पुराना)', desc: 'Long-standing, postural or degenerative' },
    { id: 'postop', labelEn: 'Post-Op Recovery', labelHi: 'सर्जरी के बाद का समय', desc: 'Protected rehabilitation phase' },
  ];

  const getPlanDetails = () => {
    switch (selectedCondition) {
      case 'back':
        return {
          titleEn: 'Spine Decompression & Core Stabilization Protocol',
          titleHi: 'स्पाइन डिकम्प्रेशन एवं कोर स्टेबिलाइज़ेशन प्रोटोकॉल',
          duration: '45 – 55 Minutes per session',
          durationHi: '45 – 55 मिनट प्रति सत्र',
          focusEn: 'Sciatic nerve mobilization, McKenzie extension drills, lumbar mechanical traction, and core muscle re-education.',
          focusHi: 'साइटिका नर्व मोबिलाइज़ेशन, मैकेंजी एक्सटेंशन व्यायाम, लंबर ट्रैक्शन और कोर मांसपेशियों का मजबूतीकरण।',
          modalitiesEn: 'IFT (Interferential Therapy) for deep pain relief, Therapeutic Ultrasound, and lumbar ergonomic counseling.',
          modalitiesHi: 'गहरे दर्द निवारण हेतु IFT, थेराप्यूटिक अल्ट्रासाउंड और एर्गोनोमिक मार्गदर्शन।'
        };
      case 'neck':
        return {
          titleEn: 'Cervical Spine & Postural Realignment Protocol',
          titleHi: 'सर्वाइकल स्पाइन एवं पोस्चरल री-अलाइनमेंट प्रोटोकॉल',
          duration: '40 – 50 Minutes per session',
          durationHi: '40 – 50 मिनट प्रति सत्र',
          focusEn: 'Cervical facet joint mobilization, deep neck flexor strengthening, thoracic spine loosening, and screen-time posture correction.',
          focusHi: 'गर्दन के जोड़ों की गतिशीलता, गर्दन की गहरी मांसपेशियों को मजबूत करना और स्क्रीन टाइम पोस्चर सुधार।',
          modalitiesEn: 'IFT, Heat Therapy, Trigger Point Dry Needling (if indicated), and isometric neck resistance.',
          modalitiesHi: 'IFT, हीट थेरेपी, ट्रिगर पॉइंट ड्राई नीडलिंग और आइसोमेट्रिक व्यायाम।'
        };
      case 'knee':
        return {
          titleEn: 'Joint Decompression & Osteoarthritis Mobility Protocol',
          titleHi: 'घुटने का जोड़ डिकम्प्रेशन एवं मोबिलिटी प्रोटोकॉल',
          duration: '40 – 50 Minutes per session',
          durationHi: '40 – 50 मिनट प्रति सत्र',
          focusEn: 'Patellofemoral gliding, vastus medialis (VMO) strengthening, hamstring flexibility, and joint shock absorption training.',
          focusHi: 'घुटने की कटोरी (पटेला) का ग्लाइडिंग, जांघ की मांसपेशियों की ताकत और लचीलेपन का प्रशिक्षण।',
          modalitiesEn: 'Therapeutic Ultrasound to promote joint circulation, IFT, and protected resistance band loading.',
          modalitiesHi: 'जोड़ों के रक्त संचार हेतु अल्ट्रासाउंड, IFT और सुरक्षित रेसिस्टेंस बैंड व्यायाम।'
        };
      case 'shoulder':
        return {
          titleEn: 'Adhesive Capsulitis (Frozen Shoulder) Release Protocol',
          titleHi: 'फ्रोजन शोल्डर (कंधे की अकड़न) रिलीज प्रोटोकॉल',
          duration: '45 – 55 Minutes per session',
          durationHi: '45 – 55 मिनट प्रति सत्र',
          focusEn: 'Glenohumeral joint mobilization (Maitland techniques), capsule stretching, rotator cuff strengthening, and pulley exercises.',
          focusHi: 'कंधे के जोड़ का मैनुअल मोबिलाइज़ेशन, कैप्सूल स्ट्रेचिंग, रोटेटर कफ की मजबूती और पुली एक्सरसाइज।',
          modalitiesEn: 'Deep Ultrasound, IFT for periarticular swelling, and moist thermal heat therapy.',
          modalitiesHi: 'डीप अल्ट्रासाउंड, सूजन कम करने हेतु IFT और थर्मल थेरेपी।'
        };
      case 'postop':
        return {
          titleEn: 'Structured Post-Surgical Orthopedic Recovery (TKR / THR)',
          titleHi: 'सर्जरी (नी रिप्लेसमेंट) के बाद का चरणबद्ध पुनर्वास',
          duration: '50 – 60 Minutes per session',
          durationHi: '50 – 60 मिनट प्रति सत्र',
          focusEn: 'Early safe knee bending (0-110°+), quadriceps extension lag correction, scar mobilization, and assistive walker gait retraining.',
          focusHi: 'सुरक्षित घुटना मोड़ना, जांघ की ताकत वापस लाना, घाव के निशान की अकड़न खोलना और वॉकर से सुरक्षित चलना।',
          modalitiesEn: 'Edema compression, safe cryotherapy, active-assisted range of motion, and physician protocol compliance.',
          modalitiesHi: 'सूजन कम करने की तकनीक, एक्टिव-असिस्टेड व्यायाम और सर्जन के प्रोटोकॉल का पालन।'
        };
      case 'neuro':
        return {
          titleEn: 'Neuroplastic Motor Re-Education & Stroke Recovery',
          titleHi: 'स्ट्रोक एवं न्यूरोलॉजिकल मोटर री-एजुकेशन',
          duration: '50 – 60 Minutes per session',
          durationHi: '50 – 60 मिनट प्रति सत्र',
          focusEn: 'Task-specific repetitive motor drills, PNF patterns, weight-shifting and balance training, and functional independence.',
          focusHi: 'दैनिक क्रियाओं का अभ्यास, संतुलन और वजन संभालने का प्रशिक्षण, और स्वतंत्रता बहाल करना।',
          modalitiesEn: 'Neuromuscular electrical stimulation, sensory integration, and assistive gait training.',
          modalitiesHi: 'न्यूरोमस्कुलर स्टिमुलेशन और सहायक चाल प्रशिक्षण।'
        };
      case 'home':
        return {
          titleEn: 'Dedicated Home Visit Physiotherapy Assessment (Kanpur)',
          titleHi: 'कानपुर घर पर फिजियोथेरेपी सेवा मूल्यांकन',
          duration: '45 – 60 Minutes bedside',
          durationHi: '45 – 60 मिनट बेडसाइड',
          focusEn: 'Safe bedside transfers, fall prevention, joint loosening, and family attendant ergonomic coaching in Kanpur.',
          focusHi: 'बिस्तर से उठना-बैठना, गिरने से बचाव, जोड़ों की अकड़न दूर करना और परिजनों को सही देखभाल का प्रशिक्षण।',
          modalitiesEn: 'Portable therapeutic modalities, sanitized bedside treatment, and customized home exercise sheet.',
          modalitiesHi: 'पोर्टेबल इलेक्ट्रोथेरेपी उपकरण, स्वच्छ उपचार और व्यक्तिगत घरेलू व्यायाम चार्ट।'
        };
      default:
        return {
          titleEn: 'Personalized Clinical Assessment',
          titleHi: 'व्यक्तिगत नैदानिक मूल्यांकन',
          duration: '45 Minutes',
          durationHi: '45 मिनट',
          focusEn: 'Comprehensive musculoskeletal physical evaluation.',
          focusHi: 'संपूर्ण शारीरिक परीक्षण।',
          modalitiesEn: 'As clinically indicated by Dr. Mohammad Fahad Alam.',
          modalitiesHi: 'डॉ. मोहम्मद फहद आलम की सलाह अनुसार।'
        };
    }
  };

  const plan = getPlanDetails();
  const currentConditionObj = conditions.find(c => c.id === selectedCondition);
  const currentStageObj = stages.find(s => s.id === painStage);

  const handleWhatsAppConsultation = () => {
    const text = 
      `*PATIENT TREATMENT PLAN INQUIRY*\n` +
      `*Condition:* ${currentConditionObj?.labelEn}\n` +
      `*Pain Duration:* ${currentStageObj?.labelEn}\n` +
      `*Generated Plan:* ${plan.titleEn}\n` +
      `*Estimated Session Time:* ${plan.duration}\n\n` +
      `Hello Dr. Mohammad Fahad Alam, I would like to consult about this treatment plan and confirm slot availability and fees at Kanpur Physio Ortho Spine Clinic.`;

    const url = `${CLINIC_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="treatment-planner" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>{isHindi ? 'इंटरेक्टिव उपचार मार्गदर्शिका' : 'Interactive Recovery Planner'}</span>
          </div>

          <h2 className="text-black font-extrabold uppercase tracking-tight sm:tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
            {isHindi ? 'अपनी समस्या अनुसार सत्र एवं उपचार योजना जानें' : 'INTERACTIVE TREATMENT & RECOVERY PLANNER'}
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-teal-600 mx-auto mt-3 rounded-full" />

          <p className="mt-3 text-slate-600 text-xs sm:text-sm md:text-base">
            {isHindi 
              ? 'अपनी स्थिति और दर्द की अवधि चुनें। हमारी प्रणाली अनुमानित सत्र समय और उपयुक्त थेरेपी प्रोटोकॉल प्रदर्शित करेगी।' 
              : 'Select your condition and pain stage to explore clinical session duration, recommended modalities, and targeted protocols.'}
          </p>
        </div>

        {/* 2-Step Interactive Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Condition & Stage Selectors (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Step 1: Affected Area */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase text-black tracking-wider flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center text-[10px]">1</span>
                  <span>{isHindi ? 'अपनी समस्या या अंग चुनें:' : 'SELECT AFFECTED CONDITION:'}</span>
                </span>
                <span className="text-[10px] text-teal-700 font-bold uppercase">{currentConditionObj?.labelEn}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {conditions.map((cond) => {
                  const isSelected = selectedCondition === cond.id;
                  return (
                    <button
                      key={cond.id}
                      onClick={() => setSelectedCondition(cond.id)}
                      className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${
                        isSelected 
                          ? 'border-teal-600 bg-teal-50 text-black shadow-2xs font-extrabold' 
                          : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-700 font-semibold'
                      }`}
                    >
                      <span className="text-xs leading-snug">
                        {isHindi ? cond.labelHi : cond.labelEn}
                      </span>
                      {isSelected && (
                        <span className="mt-1 text-[9px] text-teal-700 font-black uppercase flex items-center gap-0.5">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Selected
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Pain Stage */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase text-black tracking-wider flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center text-[10px]">2</span>
                  <span>{isHindi ? 'दर्द की अवधि / स्थिति चुनें:' : 'SELECT DURATION OR RECOVERY STAGE:'}</span>
                </span>
                <span className="text-[10px] text-teal-700 font-bold uppercase">{currentStageObj?.labelEn}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {stages.map((st) => {
                  const isSelected = painStage === st.id;
                  return (
                    <button
                      key={st.id}
                      onClick={() => setPainStage(st.id)}
                      className={`p-3 rounded-xl border text-left transition ${
                        isSelected 
                          ? 'border-teal-600 bg-teal-50 text-black shadow-2xs font-bold' 
                          : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-700 font-medium'
                      }`}
                    >
                      <div className="text-xs font-extrabold text-black uppercase">
                        {isHindi ? st.labelHi : st.labelEn}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        {st.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Tailored Treatment Card (5 Cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-2 border-teal-500/40 shadow-lg relative overflow-hidden">
              
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-sky-500 to-emerald-500" />

              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-teal-800 bg-teal-100 px-2 py-0.5 rounded-full">
                    Tailored Clinical Protocol
                  </span>
                  <h3 className="text-black font-extrabold uppercase text-sm sm:text-base mt-1">
                    {isHindi ? plan.titleHi : plan.titleEn}
                  </h3>
                </div>
              </div>

              {/* Protocol Spec Highlights */}
              <div className="space-y-3 text-xs">
                
                <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-100 flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-black font-extrabold uppercase block text-[10px]">
                      {isHindi ? 'अनुमानित सत्र समय:' : 'ESTIMATED SESSION TIME:'}
                    </span>
                    <span className="text-slate-800 font-bold">{isHindi ? plan.durationHi : plan.duration}</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-black font-extrabold uppercase block text-[10px] mb-1">
                    {isHindi ? 'प्रमुख पुनर्वास पद्धति:' : 'REHABILITATION FOCUS:'}
                  </span>
                  <p className="text-slate-700 leading-relaxed text-[11px]">
                    {isHindi ? plan.focusHi : plan.focusEn}
                  </p>
                </div>

                <div className="p-3 bg-sky-50/60 rounded-xl border border-sky-100">
                  <span className="text-sky-900 font-extrabold uppercase block text-[10px] mb-1">
                    {isHindi ? 'संभावित उपकरण व थेरेपी:' : 'SUITABLE MODALITIES & EQUIPMENT:'}
                  </span>
                  <p className="text-slate-700 leading-relaxed text-[11px]">
                    {isHindi ? plan.modalitiesHi : plan.modalitiesEn}
                  </p>
                </div>

              </div>

              {/* Consultation Trigger Button */}
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                <button
                  onClick={handleWhatsAppConsultation}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-extrabold text-xs uppercase tracking-wider transition shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>{isHindi ? 'डॉक्टर से यह योजना पूछें' : 'CONSULT DOCTOR ON WHATSAPP'}</span>
                </button>

                <p className="text-[10px] text-center text-slate-500 leading-tight">
                  * Session duration & fees confirmed strictly after direct physical assessment by Dr. Mohammad Fahad Alam.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

