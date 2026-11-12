import React from 'react';
import { ShieldCheck, Award, Star, Quote } from 'lucide-react';
import { PARTNERS_LIST, TESTIMONIALS } from '../data/cooperativeData';

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strategic Partners Strip */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-500 block">
            STRATEGIC ALLIANCES & REGULATORY PARTNERS
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Institutional Backing & Project Execution Network
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {PARTNERS_LIST.map((partner, idx) => (
            <div 
              key={idx}
              className="bg-white p-4 rounded-2xl border border-slate-200/80 text-center flex flex-col justify-center items-center shadow-2xs hover:border-slate-300 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 mb-2 font-bold text-xs">
                {partner.name.substring(0, 2).toUpperCase()}
              </div>
              <span className="text-xs font-bold text-slate-900 block leading-tight">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">
                {partner.role}
              </span>
            </div>
          ))}
        </div>

        {/* Member Testimonials adjacent to proof */}
        <div className="pt-6 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-600 block">
              MEMBER VOICES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
              Verified Feedback From Cooperative Members
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {t.sector}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-950">{t.name}</h4>
                  <p className="text-[11px] text-slate-500">{t.role} · {t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
