import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/cooperativeData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Cooperative Guidelines & Membership Clarity
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Clear, transparent answers directly derived from the Apex Capital Cooperative charter and regulatory bye-laws.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 sm:p-6 bg-slate-50/70 hover:bg-slate-100/70 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-amber-400 text-slate-950 border-amber-400' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
