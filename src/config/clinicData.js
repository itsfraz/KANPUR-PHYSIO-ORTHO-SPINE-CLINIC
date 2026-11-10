/**
 * CENTRALIZED CLINIC CONFIGURATION
 * KANPUR PHYSIO ORTHO SPINE CLINIC
 * Derived from client brief and discovery documents (gemini-code-1794296604887.md, PHY 1.pdf, PHY 2.pdf)
 */

export const CLINIC_CONFIG = {
  // Official Clinic Identification
  clinicName: "KANPUR PHYSIO ORTHO SPINE CLINIC",
  clinicNameHindi: "कानपुर फिजियो ऑर्थो स्पाइन क्लीनिक",
  shortName: "KANPUR PHYSIO",
  shortNameHindi: "कानपुर फिजियो",
  navbarSubtitle: "ORTHO & SPINE CLINIC",
  navbarSubtitleHindi: "ऑर्थो एवं स्पाइन क्लीनिक",
  tagline: "RESTORING MOVEMENT • RELIEVING PAIN • IMPROVING LIVES",
  taglineHindi: "गतिशीलता की पुनर्स्थापना • दर्द से मुक्ति • बेहतर जीवन",
  
  // Official Clinic Media Assets & Auto-detection from /images/
  images: {
    logo: "/images/LOgo.png",
    logoFallback: "/logo.svg",
    doctor: "/images/doctor.jpg",
    doctorFallback: "/doctor-fahad-alam.svg",
    clinicInterior: "/images/clinic-interior.jpg",
    clinicInteriorFallback: "/clinic-interior.svg",
    exerciseBay: "/images/exercise-bay.jpg",
    exerciseBayFallback: "/exercise-bay.svg",
    slides: [
      { id: 1, image: "/images/sli-1.jpg", title: "Spine Care & Sciatica Decompression" },
      { id: 2, image: "/images/sli-2.jpg", title: "Orthopedic Joint Recovery & Exercise Bay" },
      { id: 3, image: "/images/sli-3.jpg", title: "Advanced Modalities & Kanpur Home Care" },
      { id: 4, image: "/images/sli-4.webp", title: "Clinical Therapy & Treatment Equipment" },
      { id: 5, image: "/images/sli.png", title: "Comprehensive Musculoskeletal Rehabilitation" }
    ]
  },
  
  // Physical Location & Service Area
  address: {
    line1: "Param Purwa, Juhi",
    line2: "Near Govind Nagar & Kidwai Nagar",
    area: "Param Purwa",
    locality: "Juhi",
    city: "Kanpur",
    district: "Kanpur Nagar",
    state: "Uttar Pradesh",
    pincode: "208014",
    country: "India",
    full: "Param Purwa, Juhi, Near Govind Nagar & Kidwai Nagar, Kanpur, Uttar Pradesh 208014, India",
    hindi: "परम पुरवा, जूही (निकट गोविंद नगर एवं किदवई नगर), कानपुर, उत्तर प्रदेश 208014, भारत",
    short: "Param Purwa, Juhi, Kanpur - 208014",
    shortHindi: "परम पुरवा, जूही, कानपुर - 208014",
    landmark: "Param Purwa Main Road, Near Govind Nagar & Kidwai Nagar",
    landmarkHindi: "परम पुरवा मुख्य मार्ग, निकट गोविंद नगर एवं किदवई नगर",
    coordinatesDms: "26°26'55.3\"N 80°19'16.9\"E",
    mapCoordinates: {
      lat: 26.448694,
      lng: 80.321361,
      dms: "26°26'55.3\"N 80°19'16.9\"E",
    },
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=26.448694,80.321361",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.448694,80.321361",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=26.448694,80.321361&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },

  // Contact Information
  contact: {
    phone: "9453201140",
    phoneDisplay: "+91 9453201140",
    phoneTel: "tel:9453201140",
    whatsappNumber: "919453201140",
    whatsappUrl: "https://wa.me/919453201140",
    email: "zplusphysio@gmail.com",
    emailMailto: "mailto:zplusphysio@gmail.com",
  },

  // Clinic Operating Schedule
  schedule: {
    workingDays: "Monday to Sunday",
    workingDaysHindi: "सोमवार से रविवार (सातों दिन)",
    timings: "9:00 AM – 10:00 PM",
    timingsHindi: "सुबह 9:00 बजे से रात 10:00 बजे तक",
    isOpenAllDays: true,
  },

  // Home Visit Physiotherapy
  homeVisits: {
    available: true,
    title: "HOME VISIT PHYSIOTHERAPY AVAILABLE",
    titleHindi: "घर पर फिजियोथेरेपी सेवा उपलब्ध",
    description: "Professional bedside physiotherapy care across Kanpur for elderly, post-surgery, or mobility-impaired patients.",
    descriptionHindi: "बुजुर्गों, सर्जरी के बाद और चलने-फिरने में असमर्थ मरीजों के लिए कानपुर में घर पर फिजियोथेरेपी सेवा उपलब्ध है।",
    contactAction: "Call or WhatsApp to confirm your location, slot availability, and home visit charges.",
  },

  // Lead Doctor Profile
  doctor: {
    name: "DR. MOHAMMAD FAHAD ALAM",
    nameHindi: "डॉ. मोहम्मद फहद आलम",
    title: "Physical Therapist",
    titleHindi: "फिजियोथेरेपिस्ट (फिजिकल थेरेपिस्ट)",
    qualifications: "DPT, BPT, CMS&ED;",
    qualificationsArray: ["DPT", "BPT", "CMS&ED;"],
    experience: "5+ Years of Clinical Experience",
    experienceHindi: "5+ वर्षों का नैदानिक अनुभव",
    internship: "Ex-Intern, 7 Air Force Hospital, Kanpur Cantt",
    internshipHindi: "पूर्व-इंटर्न, 7 एयर फ़ोर्स हॉस्पिटल, कानपुर कैंट",
    bio: "Dr. Mohammad Fahad Alam is a dedicated Physical Therapist associated with Kanpur Physio Ortho Spine Clinic. The clinic focuses on evidence-based Physiotherapy, Orthopedic Rehabilitation, and Spine Care aimed at restoring mobility and relieving acute and chronic pain.",
    bioHindi: "डॉ. मोहम्मद फहद आलम कानपुर फिजियो ऑर्थो स्पाइन क्लीनिक के प्रमुख फिजिकल थेरेपिस्ट हैं। क्लीनिक का मुख्य उद्देश्य रीढ़ की हड्डी, जोड़ों के दर्द और सर्जरी के बाद मरीजों को संपूर्ण एवं वैज्ञानिक फिजियोथेरेपी उपचार प्रदान कर सामान्य जीवन में वापस लाना है।",
    specializations: [
      "Spine Care & Postural Alignment",
      "Orthopedic Rehabilitation",
      "Sciatica & Cervical Spondylosis",
      "Post-Surgical Joint Rehabilitation",
      "Neurological Rehabilitation & Stroke Care",
      "Sports Injury Therapy"
    ]
  },

  // Core Specialties
  specialties: [
    {
      id: "physiotherapy",
      title: "PHYSIOTHERAPY",
      titleHindi: "फिजियोथेरेपी",
      subtitle: "Scientific Movement Restoration & Pain Relief",
      description: "Comprehensive therapeutic exercise, manual therapy, and movement re-education to restore joint function, improve muscle tone, and overcome mobility restrictions.",
      icon: "Activity",
      features: [
        "Personalized physical evaluation",
        "Targeted pain relief protocols",
        "Muscle strengthening & stretching",
        "Post-treatment home exercise routine"
      ]
    },
    {
      id: "ortho-rehab",
      title: "ORTHOPEDIC REHABILITATION",
      titleHindi: "ऑर्थोपेडिक पुनर्वास",
      subtitle: "Bone, Joint & Musculoskeletal Recovery",
      description: "Structured recovery programs for fractures, ligament injuries, arthritis, joint replacements, and post-immobilization muscle stiffness.",
      icon: "Bone",
      features: [
        "Post-TKR (Knee Replacement) recovery",
        "Hip & shoulder joint rehabilitation",
        "Fracture recovery & stiffness release",
        "Cartilage health & mobility drills"
      ]
    },
    {
      id: "spine-care",
      title: "SPINE CARE",
      titleHindi: "स्पाइन केयर (रीढ़ की देखभाल)",
      subtitle: "Cervical, Thoracic & Lumbar Spinal Health",
      description: "Specialized non-surgical protocols for slip disc, cervical spondylosis, sciatica, lower back strain, and posture-induced spinal pain.",
      icon: "ShieldAlert",
      features: [
        "Sciatica nerve decompression therapy",
        "Cervical spondylosis management",
        "Lumbar disc herniation exercises",
        "Ergonomic postural correction"
      ]
    }
  ],

  // 6 Service & Condition Categories
  services: [
    {
      id: "back-neck-pain",
      name: "BACK PAIN & NECK PAIN",
      nameHindi: "कमर दर्द और गर्दन का दर्द",
      summary: "Effective non-surgical relief for chronic lumbar strain, sciatica, cervical spondylosis, and postural stiffness.",
      conditions: [
        "Sciatica (Radicular leg pain)",
        "Cervical Spondylosis & Neck Stiffness",
        "Slip Disc / Disc Bulge / Herniation",
        "Postural Spinal Pain & IT Worker Neck Strain",
        "Lumbar Spondylitis & Morning Stiffness"
      ],
      approach: "Clinical postural evaluation, mechanical decompression exercises, core stabilization, and ergonomic counseling to stop recurrence.",
      tag: "High Demand",
      icon: "Flame"
    },
    {
      id: "joint-pain-stiffness",
      name: "JOINT PAIN & STIFFNESS",
      nameHindi: "जोड़ों का दर्द और अकड़न",
      summary: "Targeted mobilization and strengthening for arthritis, restricted mobility, and chronic joint degeneration.",
      conditions: [
        "Knee Osteoarthritis (OA Knee)",
        "Frozen Shoulder (Adhesive Capsulitis)",
        "Hip Joint Pain & Restricted Rotation",
        "Ankle Sprains & Chronic Instability",
        "Rheumatoid / Degenerative Joint Management"
      ],
      approach: "Joint mobilization techniques, synovial circulation enhancement, progressive resistance loading, and range-of-motion drills.",
      tag: "Geriatric & Adult",
      icon: "Activity"
    },
    {
      id: "sports-injury",
      name: "SPORTS INJURY REHABILITATION",
      nameHindi: "खेल चोट पुनर्वास (स्पोर्ट्स इंजरी)",
      summary: "Rapid, evidence-based athletic recovery to restore peak strength, stability, and agility safely.",
      conditions: [
        "ACL / PCL Ligament Tears & Strains",
        "Hamstring, Quadriceps & Calf Muscle Tears",
        "Tennis Elbow & Golfer's Elbow",
        "Runner's Knee & Patellofemoral Pain",
        "Rotator Cuff Tendinopathy"
      ],
      approach: "Phased functional rehabilitation from acute phase inflammation reduction to safe return-to-sport agility drills.",
      tag: "Athletes & Active Individuals",
      icon: "Trophy"
    },
    {
      id: "post-surgery-rehab",
      name: "POST-SURGERY REHABILITATION",
      nameHindi: "सर्जरी के बाद पुनर्वास",
      summary: "Physician-coordinated rehabilitation following orthopedic and spinal surgical interventions.",
      conditions: [
        "Total Knee Replacement (TKR) Recovery",
        "Total Hip Replacement (THR) Recovery",
        "Post-Fracture Internal Fixation & Plaster Removal",
        "Spinal Decompression & Fusion Post-Op Care",
        "Arthroscopic Ligament Reconstruction Rehab"
      ],
      approach: "Preventing scar adhesions, early protected joint loading, gait retraining with walking aids, and swelling management.",
      tag: "Crucial Care",
      icon: "HeartPulse"
    },
    {
      id: "orthopedic-rehab",
      name: "ORTHOPEDIC REHABILITATION",
      nameHindi: "ऑर्थोपेडिक पुनर्वास",
      summary: "Comprehensive conservative management of musculoskeletal imbalances and movement dysfunction.",
      conditions: [
        "Post-Cast Mobilization & Muscle Atrophy",
        "Tendonitis & Bursitis",
        "Kyphosis, Scoliosis & Postural Deformities",
        "Repetitive Stress Injuries (RSI)",
        "Musculoskeletal Muscle Imbalances"
      ],
      approach: "Muscle activation, myofascial release, joint alignment, and functional motor pattern correction.",
      tag: "Comprehensive",
      icon: "Stethoscope"
    },
    {
      id: "neuro-rehab",
      name: "NEUROLOGICAL REHABILITATION / PARALYSIS CARE",
      nameHindi: "न्यूरोलॉजिकल पुनर्वास और पैरालिसिस देखभाल",
      summary: "Neuroplasticity-based therapy to regain motor control, balance, and independence after nervous system trauma.",
      conditions: [
        "Stroke / Paralysis Recovery (Hemiplegia / Paraplegia)",
        "Bell's Palsy & Facial Nerve Weakness",
        "Peripheral Neuropathy & Foot Drop",
        "Balance Impairments & Ataxia",
        "Parkinsonian Gait & Movement Slowness"
      ],
      approach: "Neuro-developmental techniques (NDT), task-specific repetitive motor training, sensory integration, and assistive gait training.",
      tag: "Specialized Therapy",
      icon: "Brain"
    }
  ],

  // Specialized Modalities / Equipment
  modalities: [
    {
      name: "IFT (Interferential Therapy)",
      desc: "Deep-penetrating medium frequency electrical stimulation to reduce acute swelling and deep tissue inflammation.",
      badge: "Electrotherapy"
    },
    {
      name: "Therapeutic Ultrasound",
      desc: "High-frequency sound waves inducing deep thermal healing in ligaments, tendons, and muscle spasms.",
      badge: "Deep Healing"
    },
    {
      name: "Laser Therapy",
      desc: "Targeted photobiomodulation promoting cellular ATP synthesis and rapid tissue repair.",
      badge: "Cellular Repair"
    },
    {
      name: "Dry Needling",
      desc: "Intramuscular stimulation releasing painful myofascial trigger points and chronic tight bands.",
      badge: "Myofascial Release"
    },
    {
      name: "Cupping / Hijama Therapy",
      desc: "Negative pressure suction therapy to enhance localized blood flow, oxygenation, and myofascial decompression.",
      badge: "Circulation Booster"
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "How do I book an appointment at Kanpur Physio Ortho Spine Clinic?",
      qHindi: "कानपुर फिजियो ऑर्थो स्पाइन क्लीनिक में अपॉइंटमेंट कैसे बुक करें?",
      a: "You can book your appointment immediately by calling our official clinic phone number at 9453201140 or by sending a message on WhatsApp. You can also fill out the online inquiry form on this website, and our clinic desk will confirm your appointment slot promptly.",
      aHindi: "आप हमारे आधिकारिक नंबर 9453201140 पर कॉल करके या व्हाट्सएप पर मैसेज भेजकर तुरंत अपॉइंटमेंट बुक कर सकते हैं। इसके अलावा इस वेबसाइट के संपर्क फॉर्म से भी अनुरोध भेज सकते हैं।"
    },
    {
      q: "What are the clinic timings and working days?",
      qHindi: "क्लीनिक का समय और कार्य दिवस क्या हैं?",
      a: "The clinic operates 7 days a week, Monday through Sunday, from 9:00 AM to 10:00 PM. This flexible schedule allows working professionals and busy family members to access treatment without disrupting their daily commitments.",
      aHindi: "क्लीनिक सप्ताह के सातों दिन, सोमवार से रविवार, सुबह 9:00 बजे से रात 10:00 बजे तक खुला रहता है ताकि नौकरीपेशा और परिवार के सभी सदस्य अपनी सुविधानुसार समय पर उपचार करा सकें।"
    },
    {
      q: "Is Home Visit Physiotherapy available in Kanpur?",
      qHindi: "क्या कानपुर में घर पर फिजियोथेरेपी (होम विजिट) उपलब्ध है?",
      a: "Yes! Dr. Mohammad Fahad Alam provides dedicated Home Visit Physiotherapy services across Kanpur for elderly individuals, post-surgical patients (e.g., knee/hip replacement), bedridden patients, and those with severe mobility challenges. Please call or WhatsApp 9453201140 with your locality to confirm visit availability and scheduling.",
      aHindi: "हाँ! बुजुर्गों, सर्जरी के बाद बिस्तर पर आराम कर रहे मरीजों एवं चलने-फिरने में असमर्थ रोगियों के लिए कानपुर के विभिन्न क्षेत्रों में होम विजिट फिजियोथेरेपी सेवा उपलब्ध है। अपने क्षेत्र में उपलब्धता और शुल्क जानने हेतु 9453201140 पर संपर्क करें।"
    },
    {
      q: "What conditions and medical issues are treated at the clinic?",
      qHindi: "क्लीनिक में किन बीमारियों और समस्याओं का इलाज होता है?",
      a: "We specialize in back pain, sciatica, slip disc, cervical spondylosis, neck pain, knee osteoarthritis, frozen shoulder, sports injuries (ACL/PCL tears, ligament sprains), post-operative orthopedic recovery (TKR/THR), fractures, and neurological disorders such as stroke, hemiplegia, and Bell's palsy.",
      aHindi: "हम कमर दर्द, साइटिका, स्लिप डिस्क, सर्वाइकल स्पोंडिलोसिस, गर्दन दर्द, घुटनों का गठिया (ऑस्टियोआर्थराइटिस), फ्रोजन शोल्डर, खेल की चोटें, सर्जरी (नी रिप्लेसमेंट) के बाद का रिहैब और लकवा/स्ट्रोक पुनर्वास का विशेषज्ञ उपचार करते हैं।"
    },
    {
      q: "How long is a typical physiotherapy session and what are the consultation charges?",
      qHindi: "फिजियोथेरेपी सत्र का समय कितना होता है और परामर्श शुल्क क्या है?",
      a: "A typical therapy session lasts between 35 to 60 minutes depending on the patient's condition, diagnosis, and required modalities. For current consultation fees, treatment packages, and home visit charges, please contact the clinic directly at 9453201140.",
      aHindi: "प्रत्येक फिजियोथेरेपी सत्र आमतौर पर 35 से 60 मिनट का होता है। सटीक परामर्श शुल्क और होम विजिट खर्च के लिए कृपया सीधे क्लीनिक नंबर 9453201140 पर कॉल या व्हाट्सएप करें।"
    },
    {
      q: "What should I bring to my first physiotherapy appointment?",
      qHindi: "पहली मुलाकात के समय मुझे अपने साथ क्या लाना चाहिए?",
      a: "Please bring any relevant previous medical records, X-rays, MRI scans, CT scans, blood test reports, and orthopedic prescription slips. Also wear loose, comfortable clothing that allows easy access to the affected joint or spine area.",
      aHindi: "कृपया अपनी पिछली सभी मेडिकल रिपोर्ट्स, एक्स-रे, एमआरआई, सीटी स्कैन और डॉक्टर के पर्चे साथ लाएं। आरामदायक और ढीले कपड़े पहनें जिससे प्रभावित अंग या रीढ़ की जांच आसानी से की जा सके।"
    },
    {
      q: "Do I need a doctor's referral before taking physiotherapy?",
      qHindi: "क्या फिजियोथेरेपी शुरू करने के लिए किसी डॉक्टर के रेफरल की आवश्यकता है?",
      a: "No formal referral is strictly required. Dr. Mohammad Fahad Alam performs a complete clinical physical assessment to diagnose musculoskeletal conditions and create an appropriate treatment plan. However, if you already have a surgeon's or physician's post-op protocol, we strictly adhere to it.",
      aHindi: "किसी रेफरल की अनिवार्य आवश्यकता नहीं है। डॉ. मोहम्मद फहद आलम पहले स्वयं शारीरिक परीक्षण करते हैं। यदि आपके पास किसी ऑर्थोपेडिक सर्जन का पर्चा या प्रोटोकॉल है, तो उसका विशेष ध्यान रखा जाता है।"
    }
  ],

  // Feature Flags per developer instructions
  featureFlags: {
    showModalitiesSection: true,
    showVerifiedReviews: false, // Per brief: set false until verified Google Business link is provided; shows verified review submission card
    showMapEmbed: true,
    onlinePaymentGateway: false, // Strictly omitted per client brief
  },

  // Launch Checklist items per Section 8 of client brief
  launchChecklist: [
    { id: 1, title: "Original Logo File in High-Resolution", status: "configured", note: "Original high-resolution LOgo.png (4128x1024) active across website" },
    { id: 2, title: "Owner's HD Photograph & Clinic Photos", status: "configured", note: "Original clinical work photos (sli-1.jpg, sli-2.jpg, sli-3.jpg) integrated in home interactive slider" },
    { id: 3, title: "Final Confirmed List of Therapies & Equipment", status: "configured", note: "IFT, Ultrasound, Laser, Dry Needling & Hijama with clinical disclaimer" },
    { id: 4, title: "Exact Google Maps Pin / Verified Business Profile Link", status: "configured", note: "Exact GPS coordinates 26°26'55.3\"N 80°19'16.9\"E (Param Purwa, Juhi, Kanpur - 208014) active" },
    { id: 5, title: "Genuine Patient Testimonials & Google Review Link", status: "toggle_active", note: "showVerifiedReviews toggle implemented, feedback submission ready" },
    { id: 6, title: "Consultation & Session Fee Schedule Confirmation", status: "enquiry_prompt", note: "Configured to direct patients to call/WhatsApp for fee structure" }
  ]
};

