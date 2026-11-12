import React from 'react';
import { ArrowRight, Star, ShieldCheck, CheckCircle2, TrendingUp, Building2, FileText } from 'lucide-react';
import { COOPERATIVE_DETAILS } from '../data/cooperativeData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenBanner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenBanner }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 space-y-6 lg:pr-4">
            
            {/* Trust Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-600">
              <span className="text-amber-600 uppercase">Registered Cooperative</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums text-slate-800">RC: {COOPERATIVE_DETAILS.rcNumber}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500">Abuja FCT</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-slate-950 leading-[1.12] text-balance">
              Sustainable Wealth Starts With Partners You Can Trust
            </h1>

            {/* Value Proposition Prose - strictly zero em dash */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              <span className="font-semibold text-slate-900">{COOPERATIVE_DETAILS.name}</span>, a subsidiary of{' '}
              <span className="text-slate-900 font-semibold">Apex Capital India</span>, deploys cooperative capital into 8 verified sectors, including real estate, mechanized agriculture, and regional infrastructure, with audited profit sharing.
            </p>

            {/* Core Guarantees Quick List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>8.5% Monthly Dividend Yield</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Physical Multi-Sector Assets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Audit-Backed Real Assets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>2% Upfront + 0.5%/Mo Referral</span>
              </div>
            </div>

            {/* Primary Action Button & Auxiliary Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#focus"
                className="group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Explore 8 Focus Sectors</span>
                <span className="w-7 h-7 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-200">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold text-slate-900 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
              >
                <span>Join Cooperative</span>
              </button>

              <button
                onClick={onOpenBanner}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:underline cursor-pointer py-2"
              >
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>View Official Charter</span>
              </button>
            </div>

            {/* Social Proof Metric Block */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-5">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Cooperative Member"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Cooperative Member"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                  alt="Cooperative Member"
                  referrerPolicy="no-referrer"
                />
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-white bg-slate-900 text-amber-400 text-xs font-bold">
                  +500
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs font-medium text-slate-600 mt-0.5">
                  <span className="font-bold text-slate-900 tabular-nums">500+ Active</span> Members & Capital Partners in Abuja
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase styled with soft lavender card and floating badges (Quote section removed) */}
          <div className="lg:col-span-6 relative">
            
            {/* Background Pastel Geometric Panel */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/80 via-slate-100/60 to-purple-50/50 rounded-3xl -rotate-1 scale-102 transform -z-10" />

            {/* Main Visual Presentation Card */}
            <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-100 overflow-hidden">
              
              {/* Central Project & Executive Imagery */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group">
                <img
                  src="/src/assets/images/hero_apex_corporate_1794496303157.jpg"
                  alt="Apex Capital Executive & Multi-Purpose Project Operations in Abuja"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Abuja Project Operations · Bobsars Plaza, Area 11</span>
                  </div>
                  <p className="text-xs text-slate-200 line-clamp-1">
                    Multi-sector infrastructure, mechanized farming, and commercial property development
                  </p>
                </div>

                {/* Floating Tag 1: Left Top */}
                <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md text-white px-3.5 py-2 rounded-xl shadow-lg border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="text-left">
                    <span className="block text-[10px] text-amber-300 uppercase tracking-wider font-bold">Dividend Yield</span>
                    <span className="text-xs font-bold text-white tabular-nums">8.5% Monthly Payout</span>
                  </div>
                </div>
              </div>

              {/* Bottom Trust Row Inside Card */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-700">Official Charter Verification</span>
                <button
                  onClick={onOpenBanner}
                  className="font-bold text-amber-700 hover:text-amber-800 underline underline-offset-2 cursor-pointer"
                >
                  View Registration RC: 9561637
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
