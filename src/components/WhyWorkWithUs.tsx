import React from 'react';
import { ShieldCheck, Award, Building2, CheckCircle2, FileSpreadsheet, RefreshCw } from 'lucide-react';
import { WHY_WORK_WITH_US, COOPERATIVE_DETAILS } from '../data/cooperativeData';

interface WhyWorkWithUsProps {
  onOpenContact: () => void;
  onOpenBanner: () => void;
}

export const WhyWorkWithUs: React.FC<WhyWorkWithUsProps> = ({ onOpenContact, onOpenBanner }) => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
            WHY WORK WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Six Structural Reasons Investors & Businesses Trust Apex Capital
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Unlike paper schemes, our multi-purpose cooperative deploys capital strictly into physical assets with audit verification, international governance, and reliable returns.
          </p>
        </div>

        {/* 6 Reasons Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_WORK_WITH_US.map((item) => (
            <div 
              key={item.number}
              className="bg-slate-50/70 rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-extrabold text-slate-300 group-hover:text-amber-500 transition-colors">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center text-slate-800 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-950 mb-3 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
                <span>Apex Capital Abuja</span>
                <span className="font-mono text-[11px]">RC: {COOPERATIVE_DETAILS.rcNumber}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Guarantee Banner */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
              INSTITUTIONAL INTEGRITY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to verify our physical projects & cooperative certificates?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Visit our Abuja executive office in Garki Area 11 to review audited annual accounts, land titles, and membership registration ledgers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenBanner}
              className="px-5 py-3 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              Examine Official Banner
            </button>
            <button
              onClick={onOpenContact}
              className="px-6 py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-md cursor-pointer"
            >
              Contact Abuja Office
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
