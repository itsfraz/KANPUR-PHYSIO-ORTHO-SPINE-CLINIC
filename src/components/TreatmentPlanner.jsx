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
  Home,
  Bone,
  Brain,
  Zap,
  Check,
  Phone,
  Calendar,
  Layers,
  FileText,
  ChevronRight
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function TreatmentPlanner({ language, onNavigateToContact }) {
  const isHindi = language === 'hi';

  const [selectedCondition, setSelectedCondition] = useState('back');
  const [painStage, setPainStage] = useState('chronic');

  const conditions = [
    { id: 'back', labelEn: 'Lower Back & Sciatica', labelHi: 'कमर दर्द एवं साइटिका', tag: 'Spine & Disc', icon: 'Flame' },
    { id: 'neck', labelEn: 'Neck & Cervical Spine', labelHi: 'गर्दन दर्द व सर्वाइकल', tag: 'Cervical Facet', icon: 'Activity' },
    { id: 'knee', labelEn: 'Knee & Joint Arthritis', labelHi: 'घुटने का दर्द व गठिया', tag: 'Cartilage & OA', icon: 'Bone' },
    { id: 'shoulder', labelEn: 'Frozen Shoulder & Arm', labelHi: 'फ्रोजन शोल्डर (कंधा जाम)', tag: 'Joint Capsule', icon: 'Activity' },
    { id: 'postop', labelEn: 'Post-Surgery (TKR/THR)', labelHi: 'ऑपरेशन के बाद का रिहैब', tag: 'Surgical Rehab', icon: 'HeartPulse' },
    { id: 'neuro', labelEn: 'Stroke / Paralysis Care', labelHi: 'स्ट्रोक व पैरालिसिस केयर', tag: 'Neuro Motor', icon: 'Brain' },
    { id: 'home', labelEn: 'Home Visit Physiotherapy', labelHi: 'घर पर फिजियोथेरेपी', tag: 'Kanpur Doorstep', icon: 'Home' },
  ];

  const stages = [
    { 
      id: 'acute', 
      labelEn: 'Recent (< 2 Weeks)', 
      labelHi: 'नया दर्द (२ हफ्ते से कम)', 
      descEn: 'Sudden onset, muscle spasm or acute pinch',
      descHi: 'अचानक उठा दर्द, नसों का खिंचाव या मोच'
    },
    { 
      id: 'subacute', 
      labelEn: 'Moderate (2–6 Weeks)', 
      labelHi: 'मध्यम दर्द (२-६ हफ्ते)', 
      descEn: 'Persistent discomfort, restricted movement',
      descHi: 'लगातार बना रहने वाला दर्द या अकड़न'
    },
    { 
      id: 'chronic', 
      labelEn: 'Chronic (6+ Weeks)', 
      labelHi: 'पुराना दर्द (६+ हफ्ते या पुराना)', 
      descEn: 'Long-standing postural or degenerative stiffness',
      descHi: 'महीनों पुराना दर्द, डिस्क या जोड़ों का घिसाव'
    },
    { 
      id: 'postop', 
      labelEn: 'Post-Surgical Phase', 
      labelHi: 'ऑपरेशन के बाद का समय', 
      descEn: 'Guided physician-coordinated recovery',
      descHi: 'डॉक्टर द्वारा निर्देशित सुरक्षित रिकवरी'
    },
  ];

  const getConditionIcon = (iconName) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Activity': return <Activity className="w-5 h-5 text-teal-600" />;
      case 'Bone': return <Bone className="w-5 h-5 text-sky-600" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-500" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-600" />;
      case 'Home': return <Home className="w-5 h-5 text-emerald-600" />;
      default: return <Activity className="w-5 h-5 text-teal-600" />;
    }
  };

  const getPlanDetails = () => {
    switch (selectedCondition) {
      case 'back':
        return {
          titleEn: 'Spine Decompression & Core Stabilization Protocol',
          titleHi: 'स्पाइन डिकम्प्रेशन एवं कोर स्टेबिलाइज़ेशन प्रोटोकॉल',
          durationEn: '45 – 55 Minutes per session',
          durationHi: '45 – 55 मिनट प्रति सत्र',
          focusEn: 'Sciatic nerve mobilization, McKenzie extension drills, lumbar mechanical traction, and core muscle re-education.',
          focusHi: 'साइटिका नर्व मोबिलाइज़ेशन, मैकेंजी एक्सटेंशन व्यायाम, लंबर ट्रैक्शन और कोर मांसपेशियों का मजबूतीकरण।',
          modalitiesList: ['IFT Therapy', 'Computerized Traction', 'Therapeutic Ultrasound', 'McKenzie Protocol', 'Lumbar Ergonomics'],
          milestones: [
            { phase: 'Phase 1', textEn: 'Nerve Decompression & Pain Relief', textHi: 'नसों का दबाव मुक्त करना व दर्द निवारण' },
            { phase: 'Phase 2', textEn: 'Spine Flexibility & Disc Realignment', textHi: 'रीढ़ की लचीलापन एवं डिस्क सुधार' },
            { phase: 'Phase 3', textEn: 'Deep Core Strength & Relapse Prevention', textHi: 'कोर मजबूती एवं स्थायी रोकथाम' }
          ]
        };
      case 'neck':
        return {
          titleEn: 'Cervical Spine & Postural Realignment Protocol',
          titleHi: 'सर्वाइकल स्पाइन एवं पोस्चरल री-अलाइनमेंट प्रोटोकॉल',
          durationEn: '40 – 50 Minutes per session',
          durationHi: '40 – 50 मिनट प्रति सत्र',
          focusEn: 'Cervical facet joint mobilization, deep neck flexor strengthening, thoracic spine loosening, and screen-time posture correction.',
          focusHi: 'गर्दन के जोड़ों की गतिशीलता, गर्दन की गहरी मांसपेशियों को मजबूत करना और स्क्रीन टाइम पोस्चर सुधार।',
          modalitiesList: ['IFT Electrotherapy', 'Moist Thermal Therapy', 'Isometric Strengthening', 'Dry Needling (If Indicated)', 'Ergonomic Guide'],
          milestones: [
            { phase: 'Phase 1', textEn: 'Cervical Spasm & Radiating Pain Relief', textHi: 'गर्दन की अकड़न व नसों के दर्द से राहत' },
            { phase: 'Phase 2', textEn: 'Neck Flexor & Trapezius Muscle Balance', textHi: 'गर्दन व कंधे की मांसपेशियों का संतुलन' },
            { phase: 'Phase 3', textEn: 'Ergonomic Screen Routine & Posture Lock', textHi: 'एर्गोनोमिक पोस्चर व दीर्घकालिक स्थिरता' }
          ]
        };
      case 'knee':
        return {
          titleEn: 'Joint Decompression & Osteoarthritis Mobility Protocol',
          titleHi: 'घुटने का जोड़ डिकम्प्रेशन एवं मोबिलिटी प्रोटोकॉल',
          durationEn: '40 – 50 Minutes per session',
          durationHi: '40 – 50 मिनट प्रति सत्र',
          focusEn: 'Patellofemoral gliding, vastus medialis (VMO) strengthening, hamstring flexibility, and joint shock absorption training.',
          focusHi: 'घुटने की कटोरी (पटेला) का ग्लाइडिंग, जांघ की मांसपेशियों की ताकत और लचीलेपन का प्रशिक्षण।',
          modalitiesList: ['Therapeutic Ultrasound', 'Synovial Mobilization', 'VMO Muscle Activation', 'IFT Electrotherapy', 'Resistance Band Loading'],
          milestones: [
            { phase: 'Phase 1', textEn: 'Joint Inflammation & Swelling Reduction', textHi: 'जोड़ों की सूजन व जलन में त्वरित कमी' },
            { phase: 'Phase 2', textEn: 'Patella Gliding & Full Extension Return', textHi: 'घुटने का सीधा होना व चाल में सुधार' },
            { phase: 'Phase 3', textEn: 'Quadriceps Power & Stair Climbing Ease', textHi: 'मांसपेशियों की मजबूती व सीढ़ी चढ़ने में आसानी' }
          ]
        };
      case 'shoulder':
        return {
          titleEn: 'Adhesive Capsulitis (Frozen Shoulder) Release Protocol',
          titleHi: 'फ्रोजन शोल्डर (कंधे की अकड़न) रिलीज प्रोटोकॉल',
          durationEn: '45 – 55 Minutes per session',
          durationHi: '45 – 55 मिनट प्रति सत्र',
          focusEn: 'Glenohumeral joint mobilization (Maitland techniques), capsule stretching, rotator cuff strengthening, and pulley exercises.',
          focusHi: 'कंधे के जोड़ का मैनुअल मोबिलाइज़ेशन, कैप्सूल स्ट्रेचिंग, रोटेटर कफ की मजबूती और पुली एक्सरसाइज।',
          modalitiesList: ['Deep Ultrasound', 'Maitland Mobilization', 'Thermal Therapy', 'Shoulder Pulley Drills', 'Rotator Cuff Exercise'],
          milestones: [
            { phase: 'Phase 1', textEn: 'Night Pain & Joint Throbbing Reduction', textHi: 'रात के दर्द व चुभन में तुरंत आराम' },
            { phase: 'Phase 2', textEn: 'Overhead Reach & Capsule Loosening', textHi: 'हाथ ऊपर उठाने व पीछे ले जाने की बहाली' },
            { phase: 'Phase 3', textEn: 'Full Rotator Strength & Arm Function', textHi: 'कंधे की पूर्ण कार्यक्षमता की पुनर्स्थापना' }
          ]
        };
      case 'postop':
        return {
          titleEn: 'Structured Post-Surgical Orthopedic Recovery (TKR / THR)',
          titleHi: 'सर्जरी (नी/हिप रिप्लेसमेंट) के बाद का चरणबद्ध पुनर्वास',
          durationEn: '50 – 60 Minutes per session',
          durationHi: '50 – 60 मिनट प्रति सत्र',
          focusEn: 'Early safe knee bending (0-110°+), quadriceps extension lag correction, scar mobilization, and assistive walker gait retraining.',
          focusHi: 'सुरक्षित घुटना मोड़ना, जांघ की ताकत वापस लाना, घाव के निशान की अकड़न खोलना और वॉकर से सुरक्षित चलना।',
          modalitiesList: ['Edema Compression', 'Active-Assisted ROM', 'Gait Retraining', 'Safe Cryotherapy', 'Surgeon Protocol Alignment'],
          milestones: [
            { phase: 'Phase 1', textEn: 'Post-Op Edema Control & Safe Bedside Moves', textHi: 'सर्जरी उपरांत सूजन नियंत्रण व सुरक्षित उठना-बैठना' },
            { phase: 'Phase 2', textEn: '0-110° Range-of-Motion & Walker Weaning', textHi: 'पूरा घुटना मोड़ना व वॉकर की निर्भरता घटाना' },
            { phase: 'Phase 3', textEn: 'Independent Walking & Stair Climbing', textHi: 'बिना सहारे स्वतंत्र चाल व सीढ़ी चढ़ना' }
          ]
        };
      case 'neuro':
        return {
          titleEn: 'Neuroplastic Motor Re-Education & Stroke Recovery',
          titleHi: 'स्ट्रोक एवं न्यूरोलॉजिकल मोटर री-एजुकेशन',
          durationEn: '50 – 60 Minutes per session',
          durationHi: '50 – 60 मिनट प्रति सत्र',
          focusEn: 'Task-specific repetitive motor drills, PNF patterns, weight-shifting and balance training, and functional independence.',
          focusHi: 'दैनिक क्रियाओं का अभ्यास, संतुलन और वजन संभालने का प्रशिक्षण, और स्वतंत्रता बहाल करना।',
          modalitiesList: ['Neuromuscular Stimulation (NMES)', 'PNF Therapy Patterns', 'Balance & Gait Retraining', 'Sensory Re-education'],
          milestones: [
            { phase: 'Phase 1', textEn: 'Muscle Spasticity Control & Limb Protection', textHi: 'मांसपेशियों के तनाव पर नियंत्रण व हाथ-पैर की सुरक्षा' },
            { phase: 'Phase 2', textEn: 'Motor Relearning & Weight-Bearing Drills', textHi: 'वजन संभालना व तंत्रिका संकेतों का पुनर्प्रशिक्षण' },
            { phase: 'Phase 3', textEn: 'Functional Independence & Coordinated Gait', textHi: 'दैनिक कार्यों में आत्मनिर्भरता व संतुलित चाल' }
          ]
        };
      case 'home':
        return {
          titleEn: 'Dedicated Home Visit Physiotherapy Assessment (Kanpur)',
          titleHi: 'कानपुर घर पर फिजियोथेरेपी सेवा मूल्यांकन',
          durationEn: '45 – 60 Minutes bedside',
          durationHi: '45 – 60 मिनट बेडसाइड',
          focusEn: 'Safe bedside transfers, fall prevention, joint loosening, and family attendant ergonomic coaching in Kanpur.',
          focusHi: 'बिस्तर से उठना-बैठना, गिरने से बचाव, जोड़ों की अकड़न दूर करना और परिजनों को सही देखभाल का प्रशिक्षण।',
          modalitiesList: ['Portable Electrotherapy Modalities', 'Bedside Joint Mobilization', 'Fall Prevention Protocol', 'Home Exercise Sheet'],
          milestones: [
            { phase: 'Phase 1', textEn: 'In-Home Pain Relief & Bed Mobility', textHi: 'घर पर दर्द निवारण व बिस्तर में आरामदायक गतिशीलता' },
            { phase: 'Phase 2', textEn: 'Safe Sit-to-Stand & Fall-Safe Transfers', textHi: 'बिस्तर से कुर्सी तक सुरक्षित उठने-बैठने का अभ्यास' },
            { phase: 'Phase 3', textEn: 'Independent Room-to-Room Walking', textHi: 'घर के अंदर आत्मविश्वास के साथ सुरक्षित चाल' }
          ]
        };
      default:
        return {
          titleEn: 'Personalized Clinical Assessment',
          titleHi: 'व्यक्तिगत नैदानिक मूल्यांकन',
          durationEn: '45 Minutes',
          durationHi: '45 मिनट',
          focusEn: 'Comprehensive musculoskeletal physical evaluation.',
          focusHi: 'संपूर्ण शारीरिक परीक्षण।',
          modalitiesList: ['Physical Biomechanical Evaluation', 'Therapeutic Exercise', 'Ergonomic Advice'],
          milestones: [
            { phase: 'Phase 1', textEn: 'Root-Cause Diagnosis', textHi: 'मूल कारण का परीक्षण' },
            { phase: 'Phase 2', textEn: 'Therapeutic Relief', textHi: 'उपचार द्वारा राहत' },
            { phase: 'Phase 3', textEn: 'Long-Term Health', textHi: 'दीर्घकालिक स्वास्थ्य' }
          ]
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
      `*Estimated Session Time:* ${plan.durationEn}\n\n` +
      `Hello Dr. Mohammad Fahad Alam, I would like to consult about this treatment plan and confirm slot availability and fees at Kanpur Physio Ortho Spine Clinic.`;

    const url = `${CLINIC_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="treatment-planner" className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-teal-50/20 to-slate-50 border-b border-slate-200">
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            SECTION HEADER
            Mandatory Rule: Dark Black, Extra-Bold, Uppercase Tracking
            ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-2xs mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
              {isHindi ? 'स्मार्ट क्लिनिकल प्रोटोकॉल एवं रिकवरी गाइड' : 'SMART RECOVERY BLUEPRINT ESTIMATOR'}
            </span>
          </div>

          <h2 className="text-black font-extrabold uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            {isHindi ? 'अपनी समस्या अनुसार सत्र एवं उपचार योजना जानें' : 'INTERACTIVE TREATMENT & RECOVERY PLANNER'}
          </h2>

          {/* Symmetrical Medical Accent Bar */}
          <div className="flex items-center justify-center gap-2 my-3.5">
            <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-r from-transparent to-teal-500 rounded-full"></div>
            <div className="h-2 w-2 rounded-full bg-teal-600 ring-4 ring-teal-100"></div>
            <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-l from-transparent to-teal-500 rounded-full"></div>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {isHindi 
              ? 'यह इंटरेक्टिव टूल आपको अपनी समस्या और दर्द की अवधि के अनुसार सटीक क्लिनिकल सत्र समय, अनुशंसित थेरेपी और पुनर्वास के चरण पहले से जानने में मदद करता है।' 
              : 'Designed by Dr. Mohammad Fahad Alam: Select your condition and pain stage to explore expected session duration, evidence-based modalities, and progressive recovery milestones.'}
          </p>
        </div>

        {/* ========================================================
            "WHAT IS THIS TOOL & HOW IT WORKS" 3-STEP EXPLANATION BANNER
            ======================================================== */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-teal-600" />
            <span className="text-xs font-black uppercase tracking-wider text-teal-900">
              {isHindi ? 'यह टूल कैसे काम करता है? (३ आसान कदम)' : 'HOW THIS INTERACTIVE PLANNER WORKS (3 SIMPLE STEPS)'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-start gap-3 p-3 rounded-2xl bg-teal-50/50 border border-teal-100">
              <span className="w-7 h-7 rounded-xl bg-teal-700 text-white text-xs font-black flex items-center justify-center shrink-0">1</span>
              <div>
                <p className="text-xs font-extrabold text-black uppercase tracking-tight">
                  {isHindi ? '१. प्रभावित अंग चुनें' : '1. Select Affected Area'}
                </p>
                <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
                  {isHindi ? 'कमर, गर्दन, घुटना, कंधा या ऑपरेशन के बाद' : 'Spine, knee, shoulder, post-op, or home care'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-sky-50/50 border border-sky-100">
              <span className="w-7 h-7 rounded-xl bg-sky-700 text-white text-xs font-black flex items-center justify-center shrink-0">2</span>
              <div>
                <p className="text-xs font-extrabold text-black uppercase tracking-tight">
                  {isHindi ? '२. दर्द की अवधि चुनें' : '2. Choose Duration Stage'}
                </p>
                <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
                  {isHindi ? 'नया दर्द, मध्यम या हफ्तों पुराना दर्द' : 'Acute (<2 wks), moderate, or chronic (6+ wks)'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-50/50 border border-emerald-100">
              <span className="w-7 h-7 rounded-xl bg-emerald-700 text-white text-xs font-black flex items-center justify-center shrink-0">3</span>
              <div>
                <p className="text-xs font-extrabold text-black uppercase tracking-tight">
                  {isHindi ? '३. रिकवरी ब्लू-प्रिंट देखें' : '3. Instant Recovery Blueprint'}
                </p>
                <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
                  {isHindi ? 'सत्र समय, थेरेपी उपकरण व डॉक्टर से चर्चा' : 'Session time, modalities & direct WhatsApp consult'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            2-STEP INTERACTIVE SELECTOR + DYNAMIC BLUEPRINT CARD
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ======================================================
              LEFT COLUMN: CONDITION & STAGE SELECTORS (7 Cols)
              ====================================================== */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Condition Selector */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3.5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-teal-800 text-white flex items-center justify-center text-xs font-black">
                    1
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-extrabold uppercase text-black tracking-wide">
                      {isHindi ? 'अपनी समस्या या अंग चुनें:' : 'SELECT AFFECTED CONDITION / AREA:'}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-semibold">
                      {isHindi ? '७ प्रमुख क्लिनिकल श्रेणियां' : '7 Major Clinical Focus Areas'}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs text-teal-800 font-extrabold uppercase bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  {currentConditionObj?.labelEn}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {conditions.map((cond) => {
                  const isSelected = selectedCondition === cond.id;
                  return (
                    <button
                      key={cond.id}
                      onClick={() => setSelectedCondition(cond.id)}
                      className={`group p-3 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer ${
                        isSelected 
                          ? 'border-teal-500 bg-teal-50/70 shadow-md shadow-teal-700/10 ring-2 ring-teal-500/20' 
                          : 'border-slate-200/90 bg-white hover:border-teal-300 hover:bg-slate-50/80'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'bg-teal-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 group-hover:bg-teal-100 group-hover:text-teal-800'
                        }`}>
                          {getConditionIcon(cond.icon)}
                        </div>
                        <div className="min-w-0">
                          <p className={`text-xs font-extrabold uppercase tracking-tight truncate ${
                            isSelected ? 'text-teal-950 font-black' : 'text-slate-800'
                          }`}>
                            {isHindi ? cond.labelHi : cond.labelEn}
                          </p>
                          <span className="text-[10px] text-teal-700 font-bold block uppercase tracking-wider mt-0.5">
                            {cond.tag}
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0">
                        {isSelected ? (
                          <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-teal-400" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration / Pain Stage Selector */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3.5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-teal-800 text-white flex items-center justify-center text-xs font-black">
                    2
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-extrabold uppercase text-black tracking-wide">
                      {isHindi ? 'दर्द की अवधि / रिकवरी चरण चुनें:' : 'SELECT DURATION OR RECOVERY PHASE:'}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-semibold">
                      {isHindi ? 'अवधि से थेरेपी की तीव्रता निर्धारित होती है' : 'Helps determine clinical protocol intensity'}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs text-teal-800 font-extrabold uppercase bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  {currentStageObj?.labelEn}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {stages.map((st) => {
                  const isSelected = painStage === st.id;
                  return (
                    <button
                      key={st.id}
                      onClick={() => setPainStage(st.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex items-start justify-between gap-3 cursor-pointer ${
                        isSelected 
                          ? 'border-teal-500 bg-teal-50/70 shadow-md shadow-teal-700/10 ring-2 ring-teal-500/20' 
                          : 'border-slate-200/90 bg-white hover:border-teal-300 hover:bg-slate-50/80'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-black uppercase tracking-tight ${
                            isSelected ? 'text-teal-950' : 'text-slate-800'
                          }`}>
                            {isHindi ? st.labelHi : st.labelEn}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug font-medium">
                          {isHindi ? st.descHi : st.descEn}
                        </p>
                      </div>

                      <div className="shrink-0 mt-0.5">
                        {isSelected ? (
                          <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-slate-300" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ======================================================
              RIGHT COLUMN: DYNAMIC TAILORED RECOVERY BLUEPRINT CARD (5 Cols)
              ====================================================== */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-teal-500/60 shadow-xl relative overflow-hidden space-y-5">
              
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 via-sky-500 to-emerald-500" />

              {/* Card Header & Identification */}
              <div className="pb-4 border-b border-slate-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-teal-800 bg-teal-100/80 px-2.5 py-0.5 rounded-full border border-teal-200">
                    {isHindi ? 'विशेष क्लिनिकल उपचार योजना' : 'Personalized Clinical Protocol'}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>Dr. M. Fahad Alam</span>
                  </span>
                </div>

                <h3 className="text-black font-extrabold uppercase text-base sm:text-lg leading-snug">
                  {isHindi ? plan.titleHi : plan.titleEn}
                </h3>

                {/* Selected Active Filters Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-md">
                    {isHindi ? currentConditionObj?.labelHi : currentConditionObj?.labelEn}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-md">
                    {isHindi ? currentStageObj?.labelHi : currentStageObj?.labelEn}
                  </span>
                </div>
              </div>

              {/* Protocol Key Specifications */}
              <div className="space-y-3.5 text-xs">
                
                {/* Duration Specification Box */}
                <div className="p-3.5 bg-gradient-to-r from-teal-50/80 via-white to-teal-50/50 rounded-2xl border border-teal-200/80 flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-black font-black uppercase block text-[10px] tracking-wider">
                      {isHindi ? 'अनुमानित सत्र समय (1-ऑन-1 व्यक्तिगत):' : 'ESTIMATED SESSION DURATION:'}
                    </span>
                    <span className="text-slate-900 font-extrabold text-sm block mt-0.5">
                      {isHindi ? plan.durationHi : plan.durationEn}
                    </span>
                    <span className="text-[10px] text-teal-700 font-semibold block">
                      {isHindi ? '✓ समर्पित थेरेपिस्ट समय सहित' : '✓ Includes Hands-on Mobilization & Modality'}
                    </span>
                  </div>
                </div>

                {/* Rehabilitation Focus Box */}
                <div className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-1.5 text-black font-extrabold uppercase text-[10px] tracking-wider mb-1.5">
                    <Activity className="w-3.5 h-3.5 text-teal-600" />
                    <span>{isHindi ? 'प्रमुख पुनर्वास पद्धति:' : 'REHABILITATION FOCUS:'}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-xs font-medium">
                    {isHindi ? plan.focusHi : plan.focusEn}
                  </p>
                </div>

                {/* Modalities Chips */}
                <div className="p-3.5 bg-sky-50/50 rounded-2xl border border-sky-100">
                  <div className="flex items-center gap-1.5 text-sky-900 font-extrabold uppercase text-[10px] tracking-wider mb-2">
                    <Zap className="w-3.5 h-3.5 text-sky-600" />
                    <span>{isHindi ? 'अनुशंसित उपकरण एवं तकनीकें:' : 'SUITABLE MODALITIES & TOOLS:'}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {plan.modalitiesList.map((mod, i) => (
                      <span 
                        key={i}
                        className="text-[10px] font-bold text-slate-800 bg-white border border-sky-200 px-2 py-0.5 rounded-lg shadow-2xs"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3 Progressive Recovery Milestones */}
                <div className="p-3.5 bg-emerald-50/40 rounded-2xl border border-emerald-100/90">
                  <div className="flex items-center gap-1.5 text-emerald-900 font-extrabold uppercase text-[10px] tracking-wider mb-2">
                    <Layers className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isHindi ? '३-चरणीय रिकवरी मील के पत्थर:' : '3 PROGRESSIVE RECOVERY MILESTONES:'}</span>
                  </div>
                  <div className="space-y-1.5">
                    {plan.milestones.map((ms, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700">
                        <span className="text-[10px] font-black uppercase text-emerald-800 bg-emerald-100/80 px-1.5 py-0.2 rounded shrink-0">
                          {ms.phase}
                        </span>
                        <span className="font-medium leading-tight">
                          {isHindi ? ms.textHi : ms.textEn}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Consultation Action Buttons */}
              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <button
                  onClick={handleWhatsAppConsultation}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>{isHindi ? 'डॉक्टर से यह योजना व्हाट्सएप पर पूछें' : 'DISCUSS THIS PLAN ON WHATSAPP'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                {onNavigateToContact && (
                  <button
                    onClick={onNavigateToContact}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-slate-600" />
                    <span>{isHindi ? 'क्लिनिक अपॉइंटमेंट बुक करें' : 'BOOK CLINIC APPOINTMENT'}</span>
                  </button>
                )}

                <p className="text-[10px] text-center text-slate-500 leading-tight pt-1">
                  {isHindi 
                    ? '* सत्र की वास्तविक अवधि एवं शुल्क डॉ. फहद आलम द्वारा व्यक्तिगत शारीरिक जांच के बाद ही अंतिम रूप से निर्धारित किए जाते हैं।'
                    : '* Actual session duration, fee schedule & modality mix are finalized strictly following direct clinical assessment by Dr. Mohammad Fahad Alam.'}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
