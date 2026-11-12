import React from 'react';
import { TrendingUp, Globe, Store, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { WHO_WE_HELP } from '../data/cooperativeData';

interface WhoWeHelpProps {
  onOpenContact: () => void;
}

export const WhoWeHelp: React.FC<WhoWeHelpProps> = ({ onOpenContact }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-500" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-500" />;
      case 'Store':
        return <Store className="w-6 h-6 text-emerald-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-purple-500" />;
      default:
        return <TrendingUp className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="who-we-help" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
            WHO WE HELP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Designed For Investors, Business Owners, and Families Building Real Wealth
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Whether you are seeking consistent monthly dividend cash flow, safe diaspora remittances, or working capital for your enterprise, our multi-purpose cooperative structure delivers tangible results.
          </p>
        </div>

        {/* 4 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHO_WE_HELP.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium mb-5 min-h-[32px]">{item.tagline}</p>

                <div className="space-y-2.5 pt-4 border-t border-slate-200/60">
                  {item.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60">
                <button
                  onClick={onOpenContact}
                  className="w-full flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors cursor-pointer py-1"
                >
                  <span>Explore Membership</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
