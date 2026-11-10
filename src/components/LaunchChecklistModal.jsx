import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  X, 
  AlertCircle, 
  ShieldAlert, 
  FileText, 
  Sparkles,
  Phone,
  Mail
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export default function LaunchChecklistModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200 hidden sm:block shrink-0">
              <img src="/images/LOgo.png" alt="Logo" className="w-9 h-9 object-contain" />
            </div>
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-[10px] font-black uppercase tracking-wider mb-1">
                Client Brief • Section 8 Audit
              </div>
              <h3 className="text-black font-extrabold uppercase text-lg sm:text-xl">
                PRE-LAUNCH VERIFICATION CHECKLIST
              </h3>
              <p className="text-xs text-slate-500">
                For Clinic Owner (Dr. Mohammad Fahad Alam) & Web Administrator
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-black hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Box */}
        <div className="my-5 p-4 bg-teal-50 border border-teal-200 rounded-2xl flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
          <div className="text-xs text-teal-950 leading-relaxed">
            <strong>Strict Compliance Protocol:</strong> This medical frontend is engineered following all instructions from the client development brief (<code className="bg-teal-100 px-1 rounded">PHY 1.pdf</code> & <code className="bg-teal-100 px-1 rounded">PHY 2.pdf</code>). Zero unconfirmed degrees, zero fake reviews, and no unapproved payment gateways have been published.
          </div>
        </div>

        {/* Checklist items */}
        <div className="space-y-3.5 mb-6">
          {CLINIC_CONFIG.launchChecklist.map((item) => (
            <div 
              key={item.id}
              className="p-4 rounded-2xl border border-slate-200/90 bg-slate-50/70 flex items-start gap-3.5"
            >
              <div className="w-6 h-6 rounded-lg bg-teal-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                {item.id}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h4 className="text-black font-extrabold text-xs uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    {item.status.replace('_', ' ')}
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Contact & Confirmation Note */}
        <div className="p-4 bg-slate-900 text-white rounded-2xl text-xs space-y-2">
          <div className="font-extrabold uppercase text-teal-400">
            Clinic Contact Coordinates
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
            <div><strong>Clinic:</strong> Kanpur Physio Ortho Spine Clinic</div>
            <div><strong>Doctor:</strong> Dr. Mohammad Fahad Alam</div>
            <div><strong>Phone / WhatsApp:</strong> +91 9453201140</div>
            <div><strong>Email:</strong> zplusphysio@gmail.com</div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-black hover:bg-slate-800 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider transition"
          >
            Close Checklist
          </button>
        </div>

      </div>
    </div>
  );
}

