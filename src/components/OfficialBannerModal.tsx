import React from 'react';
import { X, ExternalLink, ShieldCheck, MapPin, Phone, Mail, Award, Check } from 'lucide-react';
import { COOPERATIVE_DETAILS } from '../data/cooperativeData';

interface OfficialBannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const OfficialBannerModal: React.FC<OfficialBannerModalProps> = ({
  isOpen,
  onClose,
  onOpenContact
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden border border-slate-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-sm font-bold text-white">
                Official Cooperative Charter & Banner
              </h3>
              <p className="text-[11px] text-slate-400">
                Registered RC: {COOPERATIVE_DETAILS.rcNumber} · Abuja FCT, Nigeria
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Banner Image Preview */}
            <div className="md:col-span-5 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 p-2 shadow-inner">
              <img 
                src="/assets/aistudio/image_26d340f6.png" 
                alt="Apex Capital Projects Official Cooperative Banner"
                className="w-full h-auto rounded-xl object-contain shadow-sm"
              />
              <div className="mt-2 text-center">
                <span className="text-[11px] text-slate-500 font-medium">
                  Official Banner displayed at Bobsars Plaza, Abuja
                </span>
              </div>
            </div>

            {/* Structured Verification Breakdown */}
            <div className="md:col-span-7 space-y-5">
              
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-amber-600 uppercase">
                  LEGAL REGISTRATION: RC: {COOPERATIVE_DETAILS.rcNumber}
                </span>
                <h4 className="text-xl font-extrabold text-slate-950">
                  {COOPERATIVE_DETAILS.name}
                </h4>
                <p className="text-xs font-semibold text-slate-600">
                  {COOPERATIVE_DETAILS.parentCompany}
                </p>
              </div>

              {/* Core Motto */}
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200">
                <span className="text-xs font-bold text-amber-900 block uppercase tracking-wider mb-1">
                  Guiding Cooperative Principle
                </span>
                <p className="text-sm font-extrabold text-slate-900">
                  "COMMISSION BASED ON REAL PROJECT - PROFIT SHARE AFTER AUDIT"
                </p>
              </div>

              {/* Dividend Summary Table from Banner */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Chartered Dividend Gateway Terms
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Investment Gateway:</span>
                    <span className="font-bold text-slate-900">Any Amount</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Monthly Dividend:</span>
                    <span className="font-bold text-amber-600 tabular-nums">8.5% Monthly</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Profit Distribution:</span>
                    <span className="font-bold text-slate-900">Post-Audit</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Capital Security:</span>
                    <span className="font-bold text-emerald-600">Physical Assets</span>
                  </div>
                </div>
              </div>

              {/* Referral Term */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                <span className="font-bold text-slate-900 block mb-1">Referral Bonus:</span>
                "When you introduce a person you get 2% of total investment + 0.5% monthly for 24 months so long investment is active."
              </div>

              {/* Important Notes */}
              <div className="text-xs text-slate-500 space-y-1">
                <p><span className="font-semibold text-slate-700">Notes:</span> Renewal every 2 years. Once invested you cannot withdraw until cycle completes.</p>
              </div>

              {/* Registered Contact Info */}
              <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{COOPERATIVE_DETAILS.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="tabular-nums">{COOPERATIVE_DETAILS.phoneNumbers.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{COOPERATIVE_DETAILS.email}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Close Viewer
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-sm transition-colors cursor-pointer"
            >
              Inquire About Membership
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
