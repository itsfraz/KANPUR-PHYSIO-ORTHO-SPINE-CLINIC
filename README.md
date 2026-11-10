# KANPUR PHYSIO ORTHO SPINE CLINIC — Official Medical Website

> **Tagline:** RESTORING MOVEMENT • RELIEVING PAIN • IMPROVING LIVES  
> **Lead Physical Therapist:** Dr. Mohammad Fahad Alam (DPT, BPT, CMS&ED; Ex-Intern, 7 Air Force Hospital, Kanpur Cantt)  
> **Location:** Param Purwa, Govind Nagar, Kanpur, Uttar Pradesh, India  
> **Phone / WhatsApp:** +91 9453201140 | **Email:** zplusphysio@gmail.com  
> **Timings:** Monday to Sunday (7 Days), 9:00 AM – 10:00 PM  

---

## 🌟 Key Features & Implementation Highlights

1. **Strict Design & Typography Compliance**:
   - The clinic name (`KANPUR PHYSIO ORTHO SPINE CLINIC`) and all main section headings are styled in **DARK BLACK (`text-black`), EXTRA-BOLD (`font-extrabold`), UPPERCASE BLOCK LETTERS (`uppercase tracking-wide`)**.
   - Clean medical color palette: Medical Blue, Teal, Healing Green, and crisp white backgrounds with soft slate/teal tints.
   - High readability, accessible font sizing, and full responsiveness across mobile, tablet, and desktop screens.

2. **Centralized Configuration (`src/config/clinicData.js`)**:
   - Contains all clinic identification, doctor profile, address coordinates, contact channels, service categories, modalities, FAQs, and feature flags in a single place for easy toggling before final launch.

3. **100% Frontend-Driven Patient Inquiry System**:
   - Patient Name, 10-digit Phone Validation, Problem Category, Appointment Type (Clinic Visit vs. Home Visit), Preferred Slot, and Symptoms.
   - Auto-formats input and generates pre-filled **WhatsApp Inquiry** (`https://wa.me/919453201140?text=...`) or **Email** (`mailto:zplusphysio@gmail.com`).
   - Copy-to-clipboard functionality with instant feedback.
   - **Zero payment gateway** (strictly compliant with client instructions).

4. **Dedicated Home Visit Physiotherapy Hub**:
   - Highlighting in-home bedside rehabilitation for senior citizens, post-surgery patients (TKR/THR), stroke/paralysis recovery, and attendant training across Kanpur.

5. **Medical Ethics & Verification Transparency**:
   - `showVerifiedReviews` flag set to compliant status showing Google Reviews coming soon with an interactive feedback submission modal (zero fabricated fake reviews).
   - Specialized modalities (IFT, Ultrasound, Laser, Dry Needling, Cupping/Hijama) accompanied by a clinical assessment disclaimer and direct WhatsApp suitability button.

6. **Bilingual Support (English & हिंदी)**:
   - Header toggle button (`EN | हिंदी`) translates headings, badges, and CTAs into clear Hindi.

7. **Dual Browsing Modes**:
   - Complete single-page smooth scroll flow or single tab filter view.

8. **SEO & Structured Data**:
   - Meta title, description, Open Graph tags, and Schema.org `MedicalClinic` / `Physician` JSON-LD embedded for local search indexing in Kanpur.

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Run Vite dev server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

