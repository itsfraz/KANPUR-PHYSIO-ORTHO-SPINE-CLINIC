import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Sparkles,
  Home,
  User,
  Activity,
  Copy,
  Check
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function ContactSection({ language, selectedService = '', defaultAppointmentType = 'Clinic Visit' }) {
  const isHindi = language === 'hi';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    alternatePhone: '',
    homeAddress: '',
    serviceCategory: 'Back Pain & Neck Pain',
    appointmentType: defaultAppointmentType,
    preferredSlot: 'Morning Visiting Hours (8:00 AM – 11:00 AM)',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [submittedFeedback, setSubmittedFeedback] = useState(null);

  useEffect(() => {
    if (defaultAppointmentType) {
      setFormData(prev => ({ ...prev, appointmentType: defaultAppointmentType }));
    }
  }, [defaultAppointmentType]);

  const handlePhoneChange = (e) => {
    // Enforce numbers only and restrict to max 10 digits
    const numbersOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: numbersOnly }));
    if (formErrors.phone && numbersOnly.length === 10) {
      setFormErrors(prev => ({ ...prev, phone: null }));
    }
  };

  const handleAlternatePhoneChange = (e) => {
    // Enforce numbers only and restrict to max 10 digits
    const numbersOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, alternatePhone: numbersOnly }));
    if (formErrors.alternatePhone && (numbersOnly.length === 0 || numbersOnly.length === 10)) {
      setFormErrors(prev => ({ ...prev, alternatePhone: null }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = isHindi ? 'कृपया मरीज का नाम भरें' : 'Patient full name is required';
    }
    
    // Strict 10-digit condition for primary phone
    if (!formData.phone || formData.phone.length !== 10) {
      errors.phone = isHindi 
        ? 'कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें' 
        : 'Please enter exactly 10 digits for mobile number';
    }

    // Optional alternate phone: if provided, must be exactly 10 digits
    if (formData.alternatePhone && formData.alternatePhone.length !== 10) {
      errors.alternatePhone = isHindi 
        ? 'वैकल्पिक नंबर भी पूरे 10 अंकों का होना चाहिए' 
        : 'Alternate phone number must also be exactly 10 digits';
    }

    // Required address for Home Visit so doctor can reach easily
    if (formData.appointmentType === 'Home Visit' && !formData.homeAddress.trim()) {
      errors.homeAddress = isHindi 
        ? 'कृपया मरीज के घर का पूरा पता व लैंडमार्क दर्ज करें ताकि डॉक्टर आसानी से पहुंच सकें' 
        : 'Please enter complete home address and landmark so the doctor can locate your home easily';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const constructFormattedMessage = () => {
    return (
      `*NEW APPOINTMENT INQUIRY*\n` +
      `*Clinic:* Kanpur Physio Ortho Spine Clinic\n\n` +
      `*Patient Name:* ${formData.fullName.trim()}\n` +
      `*Primary Phone:* +91 ${formData.phone.trim()}\n` +
      (formData.alternatePhone ? `*Alternate Phone:* +91 ${formData.alternatePhone.trim()}\n` : '') +
      `*Appointment Type:* ${formData.appointmentType}\n` +
      (formData.appointmentType === 'Home Visit' && formData.homeAddress.trim() 
        ? `*Home Visit Address:* ${formData.homeAddress.trim()}\n` 
        : '') +
      `*Required Service:* ${formData.serviceCategory}\n` +
      `*Preferred Slot:* ${formData.preferredSlot}\n` +
      `*Symptoms / Message:* ${formData.message.trim() || 'General physical therapy assessment requested.'}\n\n` +
      `*Sent via:* Official Clinic Website`
    );
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const text = constructFormattedMessage();
    const url = `${CLINIC_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmittedFeedback({
      type: 'whatsapp',
      message: isHindi 
        ? 'व्हाट्सएप चैट खुल गया है! डॉ. मोहम्मद फहद आलम को विवरण भेजें।' 
        : 'WhatsApp chat opened! Send your inquiry to Dr. Mohammad Fahad Alam.'
    });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`New Appointment Inquiry - ${formData.fullName} (${formData.appointmentType})`);
    const body = encodeURIComponent(constructFormattedMessage());
    const mailtoUrl = `mailto:${CLINIC_CONFIG.contact.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmittedFeedback({
      type: 'email',
      message: isHindi 
        ? 'आपका ईमेल क्लाइंट खुल गया है! ईमेल भेजें।' 
        : 'Email client opened with pre-filled details.'
    });
  };

  const handleCopyDetails = () => {
    if (!validate()) return;
    const text = constructFormattedMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{isHindi ? 'सीधा संपर्क एवं परामर्श' : 'Direct Booking & Inquiries'}</span>
          </div>

          {/* MANDATORY HEADING RULE: DARK BLACK, EXTRA-BOLD, UPPERCASE BLOCK LETTERS */}
          <h2 className="text-black font-extrabold uppercase tracking-tight sm:tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
            {isHindi ? 'संपर्क करें एवं अपॉइंटमेंट बुक करें' : 'CONTACT US & BOOK AN APPOINTMENT'}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 leading-relaxed">
            {isHindi 
              ? 'क्लीनिक परामर्श या कानपुर में घर पर फिजियोथेरेपी हेतु सीधे डॉ. मोहम्मद फहद आलम से संपर्क करें।' 
              : 'Direct communication with Dr. Mohammad Fahad Alam for clinic appointments and home physiotherapy visits in Kanpur.'}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Clinic Coordinates & Google Maps (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-lg border border-slate-800">
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-white mb-4 pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>{isHindi ? 'क्लीनिक विवरण' : 'CLINIC DESK'}</span>
                <span className="text-[10px] font-bold text-teal-300 bg-teal-950 px-2.5 py-0.5 rounded-full border border-teal-800">
                  {isHindi ? CLINIC_CONFIG.registrationNumberHindi : CLINIC_CONFIG.registrationNumberDisplay}
                </span>
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                
                {/* Doctor Name & Lead */}
                <div className="flex items-center gap-3 text-slate-300 pb-3 border-b border-slate-800">
                  <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0 ring-2 ring-teal-500/50 p-0.5 bg-teal-900 shadow-sm">
                    <img 
                      src={CLINIC_CONFIG.images?.doctor || '/images/Profile-Image.jpg'} 
                      alt="Dr. Mohammad Fahad Alam - Physical Therapist"
                      className="w-full h-full object-cover object-top rounded-[10px]"
                      onError={(e) => { e.currentTarget.src = '/doctor-fahad-alam.svg'; }}
                    />
                  </div>
                  <div>
                    <strong className="text-white block uppercase tracking-wide text-xs sm:text-sm">
                      {isHindi ? CLINIC_CONFIG.doctor.nameHindi : CLINIC_CONFIG.doctor.name}
                    </strong>
                    <span className="text-teal-300 text-[11px] font-semibold block">
                      {CLINIC_CONFIG.doctor.qualifications} • {CLINIC_CONFIG.doctor.internship}
                    </span>
                  </div>
                </div>

                {/* Unified Phone & WhatsApp Row */}
                <div className="text-slate-300 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-1.5 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wide">
                    <span className="flex items-center gap-1 text-teal-300">
                      <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{isHindi ? 'कॉल' : 'CALL'}</span>
                    </span>
                    <span className="text-slate-500 font-bold">/</span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <MessageCircle className="w-4 h-4 text-emerald-400 fill-current shrink-0" />
                      <span>{isHindi ? 'व्हाट्सएप' : 'WHATSAPP'}</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-normal normal-case">
                      ({isHindi ? 'समान नंबर' : 'Same Number'})
                    </span>
                  </div>
                  <div className="mt-1">
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <a 
                        href={CLINIC_CONFIG.contact.phoneTel}
                        className="text-teal-300 hover:text-white font-extrabold text-sm sm:text-base transition-colors"
                      >
                        {CLINIC_CONFIG.contact.phoneDisplay}
                      </a>
                      <a
                        href={CLINIC_CONFIG.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 px-2 py-0.5 rounded hover:bg-emerald-900 transition-colors"
                      >
                        {isHindi ? 'व्हाट्सएप चैट' : 'Chat on WhatsApp'} &rarr;
                      </a>
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      {isHindi ? 'कॉल और व्हाट्सएप दोनों इसी नंबर पर सक्रिय हैं' : 'Both direct calling and WhatsApp are active on this same official number'}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2.5 sm:gap-3 text-slate-300 pb-3 border-b border-slate-800">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <strong className="text-white block uppercase tracking-wide">
                      {isHindi ? 'ईमेल:' : 'EMAIL:'}
                    </strong>
                    <a 
                      href={CLINIC_CONFIG.contact.emailMailto}
                      className="text-sky-300 hover:text-white font-semibold transition-colors truncate block text-xs sm:text-sm"
                    >
                      {CLINIC_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                {/* Physical Address */}
                <div className="flex items-start gap-2.5 sm:gap-3 text-slate-300 pb-3 border-b border-slate-800">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase tracking-wide">
                      {isHindi ? 'क्लीनिक का पता:' : 'CLINIC ADDRESS:'}
                    </strong>
                    <p className="text-slate-200 mt-0.5 leading-relaxed text-xs sm:text-sm font-medium">
                      {isHindi ? CLINIC_CONFIG.address.hindi : CLINIC_CONFIG.address.full}
                    </p>
                    <p className="text-[11px] text-teal-400 mt-1 font-semibold">
                      {isHindi ? `लैंडमार्क: ${CLINIC_CONFIG.address.landmarkHindi}` : `Landmark: ${CLINIC_CONFIG.address.landmark}`}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-mono">
                      GPS: {CLINIC_CONFIG.address.coordinatesDms}
                    </p>
                  </div>
                </div>

                {/* Visiting Hours Card */}
                <div className="p-3.5 bg-slate-800/90 rounded-2xl border border-slate-700 space-y-2.5 shadow-sm">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-700/80 pb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      <strong className="text-white block uppercase tracking-wide text-xs">
                        {isHindi ? 'विजिटिंग आवर्स:' : 'CLINICAL VISITING HOURS:'}
                      </strong>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-full">
                      {isHindi ? 'सातों दिन खुला' : 'Open All 7 Days'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-900/95 p-2 rounded-xl border border-slate-700/80">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 block mb-0.5">
                        {isHindi ? 'प्रातः सत्र' : 'Morning Session'}
                      </span>
                      <strong className="text-white text-xs sm:text-[13px] block">
                        8:00 AM – 11:00 AM
                      </strong>
                    </div>
                    <div className="bg-slate-900/95 p-2 rounded-xl border border-slate-700/80">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 block mb-0.5">
                        {isHindi ? 'सायं सत्र' : 'Evening Session'}
                      </span>
                      <strong className="text-white text-xs sm:text-[13px] block">
                        4:00 PM – 9:00 PM
                      </strong>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 block text-center sm:text-left">
                    {isHindi 
                      ? 'सोमवार से रविवार • परामर्श एवं फिजियोथेरेपी उपचार' 
                      : 'Monday through Sunday • Direct in-clinic consultations & therapies'}
                  </span>
                </div>

              </div>

            </div>

            {/* Google Map Embed & Navigation */}
            {CLINIC_CONFIG.address.googleMapsEmbedUrl && (
              <div className="bg-slate-100 p-2 sm:p-3 rounded-2xl sm:rounded-3xl border border-slate-200">
                <div className="rounded-xl overflow-hidden shadow-inner h-52 sm:h-64 w-full bg-slate-200 relative">
                  <iframe
                    title="Kanpur Physio Ortho Spine Clinic Location Map"
                    src={CLINIC_CONFIG.address.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-3 text-center">
                  <a
                    href={CLINIC_CONFIG.address.googleMapsDirectionsUrl || CLINIC_CONFIG.address.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1.5 rounded-lg transition w-full sm:w-auto"
                  >
                    <span className="truncate">{isHindi ? 'गूगल मैप्स पर सटीक रास्ता देखें' : 'Open in Google Maps (Get Directions)'}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Patient Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 shadow-sm">
              
              <div className="border-b border-slate-200 pb-3.5 mb-5 sm:mb-6">
                <div className="inline-block text-[10px] font-black uppercase tracking-wider text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full mb-1">
                  100% Frontend • Direct Doctor Desk
                </div>
                <h3 className="text-black font-extrabold uppercase tracking-wide text-lg sm:text-xl md:text-2xl">
                  {isHindi ? 'मरीज अपॉइंटमेंट पूछताछ फॉर्म' : 'PATIENT APPOINTMENT INQUIRY FORM'}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                  {isHindi 
                    ? 'विवरण दर्ज करें। फॉर्म सीधे डॉ. मोहम्मद फहद आलम के आधिकारिक व्हाट्सएप या ईमेल पर संदेश तैयार करेगा।' 
                    : 'Fill in your details. This form instantly constructs a formatted message directly to Dr. Mohammad Fahad Alam.'}
                </p>
              </div>

              {submittedFeedback && (
                <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold uppercase block">{isHindi ? 'सफलतापूर्वक तैयार किया गया!' : 'Inquiry Ready!'}</span>
                    <span>{submittedFeedback.message}</span>
                  </div>
                </div>
              )}

              <form className="space-y-3.5 sm:space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-extrabold text-black uppercase tracking-wider mb-1">
                    {isHindi ? 'मरीज का पूरा नाम' : 'Patient Full Name'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: null });
                    }}
                    placeholder={isHindi ? 'उदा: राजेश शर्मा' : 'e.g., Rajesh Sharma'}
                    className={`w-full text-xs sm:text-sm p-3 sm:p-3.5 rounded-xl border bg-white focus:outline-hidden transition ${
                      formErrors.fullName ? 'border-red-500 focus:border-red-600' : 'border-slate-300 focus:border-teal-600'
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1 font-semibold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.fullName}
                    </p>
                  )}
                </div>

                {/* Primary Phone Number with dedicated prefix & strict 10-digit condition */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-extrabold text-black uppercase tracking-wider">
                      {isHindi ? 'मोबाइल / व्हाट्सएप नंबर' : 'Phone / WhatsApp Number'} <span className="text-red-500">*</span>
                    </label>
                    <span className={`text-[10px] font-bold ${formData.phone.length === 10 ? 'text-emerald-600' : 'text-slate-400'}`}>
                      {formData.phone.length}/10 {isHindi ? 'अंक' : 'digits'}
                    </span>
                  </div>

                  <div className={`flex rounded-xl overflow-hidden border bg-white transition shadow-2xs ${
                    formErrors.phone ? 'border-red-500 focus-within:border-red-600' : 'border-slate-300 focus-within:border-teal-600'
                  }`}>
                    <span className="inline-flex items-center px-3 sm:px-3.5 bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold border-r border-slate-200 select-none shrink-0">
                      +91
                    </span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder={isHindi ? '10 अंकों का मोबाइल नंबर दर्ज करें' : 'Enter 10-digit mobile number'}
                      className="w-full text-xs sm:text-sm p-3 sm:p-3.5 bg-transparent focus:outline-hidden text-black font-semibold placeholder:text-slate-400 placeholder:font-normal"
                    />
                    {formData.phone.length === 10 && (
                      <div className="pr-3 flex items-center text-emerald-600 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  {formErrors.phone && (
                    <p className="text-[11px] text-red-600 mt-1 font-semibold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Alternate Phone Number (Optional with 10-digit condition) */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-extrabold text-black uppercase tracking-wider">
                      {isHindi ? 'वैकल्पिक फोन नंबर' : 'Alternate Phone Number'}
                    </label>
                    <span className="text-[10px] text-slate-400 font-semibold">
                      {formData.alternatePhone.length > 0 ? `${formData.alternatePhone.length}/10 digits` : (isHindi ? '(वैकल्पिक)' : '(Optional)')}
                    </span>
                  </div>

                  <div className={`flex rounded-xl overflow-hidden border bg-white transition shadow-2xs ${
                    formErrors.alternatePhone ? 'border-red-500 focus-within:border-red-600' : 'border-slate-300 focus-within:border-teal-600'
                  }`}>
                    <span className="inline-flex items-center px-3 sm:px-3.5 bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold border-r border-slate-200 select-none shrink-0">
                      +91
                    </span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      value={formData.alternatePhone}
                      onChange={handleAlternatePhoneChange}
                      placeholder={isHindi ? 'वैकल्पिक 10 अंकों का नंबर (यदि उपलब्ध हो)' : 'Optional alternate 10-digit number'}
                      className="w-full text-xs sm:text-sm p-3 sm:p-3.5 bg-transparent focus:outline-hidden text-black font-semibold placeholder:text-slate-400 placeholder:font-normal"
                    />
                    {formData.alternatePhone.length === 10 && (
                      <div className="pr-3 flex items-center text-emerald-600 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  {formErrors.alternatePhone && (
                    <p className="text-[11px] text-red-600 mt-1 font-semibold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {formErrors.alternatePhone}
                    </p>
                  )}
                </div>

                {/* Required Service Dropdown */}
                <div>
                  <label className="block text-xs font-extrabold text-black uppercase tracking-wider mb-1">
                    {isHindi ? 'आवश्यक सेवा / समस्या' : 'Required Service / Problem Category'} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 sm:p-3.5 rounded-xl border border-slate-300 bg-white focus:outline-hidden focus:border-teal-600"
                  >
                    <option value="Back Pain & Neck Pain">Back Pain & Neck Pain (Sciatica / Cervical / Slip Disc)</option>
                    <option value="Joint Pain & Stiffness">Joint Pain & Stiffness (Knee OA / Frozen Shoulder)</option>
                    <option value="Sports Injury Rehabilitation">Sports Injury Rehabilitation (ACL / Sprain / Tear)</option>
                    <option value="Post-Surgery Rehabilitation">Post-Surgery Rehabilitation (TKR / THR / Spine Post-Op)</option>
                    <option value="Orthopedic Rehabilitation">Orthopedic Rehabilitation (Fractures / Post-Cast)</option>
                    <option value="Neurological Rehabilitation / Paralysis Care">Neurological Rehabilitation / Paralysis Care (Stroke / Bell's Palsy)</option>
                    <option value="Home Visit Physiotherapy">Home Visit Physiotherapy (Bedside Care in Kanpur)</option>
                    <option value="General Consultation & Spine Checkup">General Consultation & Spine Checkup</option>
                  </select>
                </div>

                {/* Preferred Appointment Type (Radio) - Fully responsive grid */}
                <div>
                  <label className="block text-xs font-extrabold text-black uppercase tracking-wider mb-2">
                    {isHindi ? 'पसंदीदा परामर्श प्रकार' : 'Preferred Appointment Type'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <label 
                      className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition ${
                        formData.appointmentType === 'Clinic Visit' 
                          ? 'border-teal-600 bg-teal-50/70 text-black font-extrabold' 
                          : 'border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="appointmentType"
                        value="Clinic Visit"
                        checked={formData.appointmentType === 'Clinic Visit'}
                        onChange={(e) => setFormData({ ...formData, appointmentType: e.target.value })}
                        className="text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-xs uppercase tracking-wide">
                        {isHindi ? 'क्लीनिक विजिट (बी.एम. मार्केट, परम पुरवा)' : 'Clinic Visit (B.M. Market, Parampurwa)'}
                      </span>
                    </label>

                    <label 
                      className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition ${
                        formData.appointmentType === 'Home Visit' 
                          ? 'border-teal-600 bg-teal-50/70 text-black font-extrabold' 
                          : 'border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="appointmentType"
                        value="Home Visit"
                        checked={formData.appointmentType === 'Home Visit'}
                        onChange={(e) => setFormData({ ...formData, appointmentType: e.target.value })}
                        className="text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-xs uppercase tracking-wide">
                        {isHindi ? 'होम विजिट' : 'Home Visit (Across Kanpur)'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Home Visit Complete Address & Landmark Field (Only shown when Home Visit is selected) */}
                {formData.appointmentType === 'Home Visit' && (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-teal-50/90 border-2 border-teal-600/40 space-y-2 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between gap-2">
                      <label 
                        htmlFor="homeAddressInput"
                        className="text-xs font-extrabold text-black uppercase tracking-wider flex items-center gap-1.5"
                      >
                        <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
                        <span>{isHindi ? 'मरीज के घर का पूरा पता एवं लैंडमार्क' : 'Home Visit Address & Landmark (Kanpur)'}</span>
                        <span className="text-red-500 font-bold">*</span>
                      </label>
                      <span className="text-[10px] font-bold text-teal-900 bg-teal-200/80 px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                        {isHindi ? 'डॉक्टर के आने के लिए' : 'Doctor Navigation'}
                      </span>
                    </div>

                    <textarea
                      id="homeAddressInput"
                      rows={3}
                      value={formData.homeAddress}
                      onChange={(e) => {
                        setFormData({ ...formData, homeAddress: e.target.value });
                        if (formErrors.homeAddress) {
                          setFormErrors({ ...formErrors, homeAddress: null });
                        }
                      }}
                      placeholder={isHindi 
                        ? 'उदा: मकान / फ्लैट नं, गली, कॉलोनी (उदा: गोविंद नगर, काकादेव, किदवई नगर, स्वरूप नगर, कल्याणपुर), प्रसिद्ध लैंडमार्क (मंदिर / स्कूल के पास), कानपुर' 
                        : 'e.g., Flat 302, Building / House No., Colony / Area (e.g., Govind Nagar, Kakadeo, Kidwai Nagar, Swaroop Nagar, Kalyanpur), Landmark (near temple / park / school), Kanpur'}
                      className={`w-full text-xs sm:text-sm p-3 sm:p-3.5 rounded-xl border bg-white focus:outline-hidden transition shadow-2xs font-medium placeholder:font-normal ${
                        formErrors.homeAddress 
                          ? 'border-red-500 focus:border-red-600 ring-1 ring-red-500' 
                          : 'border-teal-300 focus:border-teal-700 focus:ring-1 focus:ring-teal-700'
                      }`}
                    />

                    {formErrors.homeAddress && (
                      <p className="text-[11px] text-red-600 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {formErrors.homeAddress}
                      </p>
                    )}

                    <p className="text-[10px] text-teal-950 flex items-center gap-1.5 pt-0.5">
                      <Home className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                      <span>
                        {isHindi 
                          ? 'डॉ. मोहम्मद फहद आलम आपके इसी पते पर पोर्टेबल फिजियोथेरेपी उपकरणों के साथ आसानी से पहुंचेंगे।' 
                          : 'Dr. Mohammad Fahad Alam will use this address & landmark for easy navigation with portable physiotherapy equipment.'}
                      </span>
                    </p>
                  </div>
                )}

                {/* Preferred Slot */}
                <div>
                  <label className="block text-xs font-extrabold text-black uppercase tracking-wider mb-1">
                    {isHindi ? 'पसंदीदा विजिटिंग समय स्लॉट' : 'Preferred Visiting Time Slot'}
                  </label>
                  <select
                    value={formData.preferredSlot}
                    onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 sm:p-3.5 rounded-xl border border-slate-300 bg-white focus:outline-hidden focus:border-teal-600 font-semibold"
                  >
                    <option value="Morning Visiting Hours (8:00 AM – 11:00 AM)">
                      {isHindi ? 'सुबह का सत्र: 8:00 AM – 11:00 AM' : 'Morning Visiting Hours (8:00 AM – 11:00 AM)'}
                    </option>
                    <option value="Evening Visiting Hours (4:00 PM – 9:00 PM)">
                      {isHindi ? 'शाम का सत्र: 4:00 PM – 9:00 PM' : 'Evening Visiting Hours (4:00 PM – 9:00 PM)'}
                    </option>
                    <option value="Home Visit (Flexible Timing Across Kanpur)">
                      {isHindi ? 'होम विजिट (कानपुर में सुविधानुसार समय)' : 'Home Visit Bedside Care (Flexible Slot)'}
                    </option>
                  </select>
                </div>

                {/* Symptoms / Message */}
                <div>
                  <label className="block text-xs font-extrabold text-black uppercase tracking-wider mb-1">
                    {isHindi ? 'समस्या या लक्षण का संक्षिप्त विवरण' : 'Symptoms or Health Message (Optional)'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isHindi ? 'जैसे: पिछले 2 महीने से कमर में दर्द है जो पैर तक जाता है...' : 'e.g., Lower back pain radiating down left leg for 2 months, knee stiffness...'}
                    className="w-full text-xs sm:text-sm p-3 sm:p-3.5 rounded-xl border border-slate-300 bg-white focus:outline-hidden focus:border-teal-600"
                  />
                </div>

                {/* WhatsApp Message Preview when patient starts typing */}
                {formData.fullName.trim() && (
                  <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl text-[11px] text-emerald-950">
                    <div className="font-sans font-extrabold text-emerald-800 uppercase text-[10px] mb-1 flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{isHindi ? 'व्हाट्सएप संदेश पूर्वावलोकन:' : 'WhatsApp Message Preview:'}</span>
                    </div>
                    <pre className="font-mono text-[10.5px] text-emerald-900 bg-white/70 p-2.5 rounded-lg border border-emerald-100 whitespace-pre-wrap leading-relaxed">
                      {constructFormattedMessage()}
                    </pre>
                  </div>
                )}

                {/* Submission Action Buttons */}
                <div className="pt-2 space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    
                    {/* Primary Button: WhatsApp */}
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-green-600 hover:bg-green-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                      <span>{isHindi ? 'व्हाट्सएप से भेजें' : 'SEND VIA WHATSAPP'}</span>
                    </button>

                    {/* Secondary Button: Email */}
                    <button
                      type="button"
                      onClick={handleEmailSubmit}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-slate-900 hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                    >
                      <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{isHindi ? 'ईमेल से भेजें' : 'SEND VIA EMAIL'}</span>
                    </button>

                  </div>

                  {/* Copy Details Button */}
                  <button
                    type="button"
                    onClick={handleCopyDetails}
                    className="w-full py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="text-emerald-700 font-bold">Details Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>Copy Form Summary to Clipboard</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-500 pt-1">
                    * No online payment or card details required. Directly connects you with the clinic.
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
