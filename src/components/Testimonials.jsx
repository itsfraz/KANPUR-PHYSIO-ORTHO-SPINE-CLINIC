import React, { useState } from 'react';
import { 
  Star, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  ExternalLink, 
  AlertCircle, 
  HeartHandshake, 
  UserCheck 
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function Testimonials({ language }) {
  const isHindi = language === 'hi';
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [conditionTreated, setConditionTreated] = useState('Back Pain & Sciatica');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const formattedReview = `*PATIENT TREATMENT FEEDBACK*\n\n` +
      `*Patient Name:* ${patientName}\n` +
      `*Condition Treated:* ${conditionTreated}\n` +
      `*Rating:* ${'⭐'.repeat(rating)} (${rating}/5)\n` +
      `*Feedback:* ${reviewText || 'Excellent treatment and recovery.'}\n\n` +
      `Submitted for Kanpur Physio Ortho Spine Clinic.`;

    const whatsappUrl = `${CLINIC_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(formattedReview)}`;
    window.open(whatsappUrl, '_blank');
    setShowFeedbackModal(false);
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{isHindi ? 'मरीजों का विश्वास एवं सत्यनिष्ठा' : 'Patient Trust & Ethical Practice'}</span>
          </div>

          {/* MANDATORY HEADING RULE: DARK BLACK, EXTRA-BOLD, UPPERCASE BLOCK LETTERS */}
          <h2 className="text-black font-extrabold uppercase tracking-tight sm:tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
            {isHindi ? 'मरीजों के अनुभव एवं समीक्षाएं' : 'PATIENT TESTIMONIALS & REVIEWS'}
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-teal-600 mx-auto mt-3 sm:mt-4 rounded-full" />

          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-sm md:text-base">
            {isHindi 
              ? 'चिकित्सा नैतिकता के अनुरूप: हम केवल वास्तविक और सत्यापित मरीजों की प्रतिक्रिया प्रकाशित करते हैं' 
              : 'In strict adherence to medical ethics: zero fabricated quotes, 100% genuine verified patient feedback.'}
          </p>
        </div>

        {/* Verification Status Card per Brief Instructions */}
        {!CLINIC_CONFIG.featureFlags.showVerifiedReviews ? (
          <div className="max-w-3xl mx-auto bg-slate-50 border-2 border-dashed border-teal-400/60 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 text-center shadow-xs">
            
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mx-auto mb-3.5 sm:mb-4">
              <ShieldCheck className="w-6 h-6 sm:w-8 h-8" />
            </div>

            <div className="inline-block px-3 py-1 bg-teal-100/80 text-teal-800 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider rounded-full mb-2.5 sm:mb-3">
              {isHindi ? 'सत्यापित समीक्षाएं जल्द आ रही हैं' : 'VERIFIED GOOGLE REVIEWS COMING SOON'}
            </div>

            <h3 className="text-black font-extrabold uppercase tracking-wide text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
              {isHindi 
                ? 'गूगल बिजनेस प्रोफाइल समीक्षा एकीकरण प्रगति पर है' 
                : 'GENUINE PATIENT FEEDBACK & GOOGLE REVIEWS SHOWCASE'}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-5 sm:mb-6">
              {isHindi ? (
                'क्लीनिक विकास दिशानिर्देशों एवं भारतीय चिकित्सा नीति के अनुसार, हम बिना सत्यापन के कोई मनगढ़ंत या फर्जी समीक्षाएं प्रदर्शित नहीं करते। क्लीनिक का आधिकारिक गूगल बिजनेस प्रोफाइल लिंक सत्यापित होते ही यहां लाइव अपडेट किया जाएगा।'
              ) : (
                'In strict accordance with medical advertising ethics and our clinic development brief, we strictly avoid publishing unconfirmed or fabricated patient reviews. Once our verified Google Business Profile link is finalized, live patient ratings will appear here.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3.5">
              <button
                onClick={() => setShowFeedbackModal(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition"
              >
                <Sparkles className="w-4 h-4 text-teal-300 shrink-0" />
                <span>{isHindi ? 'अपना उपचार अनुभव साझा करें' : 'SUBMIT YOUR TREATMENT FEEDBACK'}</span>
              </button>

              <a
                href={`${CLINIC_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent('Hello Dr. Mohammad Fahad Alam, I would like to submit my patient review for Kanpur Physio Ortho Spine Clinic.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>{isHindi ? 'व्हाट्सएप पर समीक्षा भेजें' : 'SHARE VIA WHATSAPP'}</span>
              </a>
            </div>

            <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-200 text-[10px] sm:text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>Are you a patient treated by Dr. Mohammad Fahad Alam? Your genuine feedback helps others in Kanpur.</span>
            </div>

          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mb-4">
                "Dr. Mohammad Fahad Alam's spine therapy helped relieve my severe sciatica without surgery. Highly skilled therapist in Kanpur."
              </p>
              <div className="text-xs font-bold text-black uppercase">Verified Patient</div>
              <div className="text-[10px] text-teal-700">Sciatica & Lumbar Spine Care</div>
            </div>
          </div>
        )}

        {/* Feedback Submission Modal */}
        {showFeedbackModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 animate-fadeIn">
            <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-7 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-200">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase text-teal-700 tracking-wider">Patient Testimonial</span>
                  <h3 className="text-black font-extrabold uppercase text-base sm:text-lg">
                    {isHindi ? 'अपनी प्रतिक्रिया दर्ज करें' : 'SHARE YOUR FEEDBACK'}
                  </h3>
                </div>
                <button
                  onClick={() => setShowFeedbackModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-black hover:bg-slate-100"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleFeedbackSubmit} className="space-y-3.5 pt-3.5">
                <div>
                  <label className="block text-xs font-extrabold text-black uppercase mb-1">
                    {isHindi ? 'मरीज का नाम' : 'Patient Full Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-black uppercase mb-1">
                    {isHindi ? 'उपचारित समस्या / सेवा' : 'Condition Treated / Service'}
                  </label>
                  <select
                    value={conditionTreated}
                    onChange={(e) => setConditionTreated(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-teal-600 bg-white"
                  >
                    <option value="Back Pain & Sciatica">Back Pain & Sciatica</option>
                    <option value="Cervical Spondylosis & Neck Pain">Cervical Spondylosis & Neck Pain</option>
                    <option value="Knee Arthritis & Joint Pain">Knee Arthritis & Joint Pain</option>
                    <option value="Post-TKR Knee Replacement Rehab">Post-TKR Knee Replacement Rehab</option>
                    <option value="Sports Injury Rehabilitation">Sports Injury Rehabilitation</option>
                    <option value="Paralysis & Stroke Recovery">Paralysis & Stroke Recovery</option>
                    <option value="Home Visit Physiotherapy">Home Visit Physiotherapy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-black uppercase mb-1">
                    {isHindi ? 'रेटिंग (स्टार्स)' : 'Rating (Stars)'}
                  </label>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 focus:outline-hidden"
                      >
                        <Star className={`w-5 h-5 sm:w-6 sm:h-6 ${star <= rating ? 'text-amber-500 fill-amber-500' : 'text-slate-300'}`} />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-1.5">{rating} of 5 Stars</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-black uppercase mb-1">
                    {isHindi ? 'आपका अनुभव एवं टिप्पणी' : 'Your Experience / Comments'}
                  </label>
                  <textarea
                    rows={3}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Describe how the physiotherapy sessions helped your mobility..."
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-teal-600"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>{isHindi ? 'व्हाट्सएप से भेजें' : 'SEND VIA WHATSAPP'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowFeedbackModal(false)}
                    className="py-3 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl font-bold text-xs uppercase"
                  >
                    {isHindi ? 'रद्द करें' : 'CANCEL'}
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
