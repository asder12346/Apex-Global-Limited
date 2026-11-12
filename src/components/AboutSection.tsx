import React from 'react';
import { ArrowRight, ShieldCheck, Award, Building, FileCheck2, Scale, Users2 } from 'lucide-react';
import { COOPERATIVE_DETAILS } from '../data/cooperativeData';

interface AboutSectionProps {
  onOpenBanner: () => void;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBanner, onOpenContact }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header styled after image 2 reference */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-500 block">
            ABOUT US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.18] text-balance">
            At Apex Capital, We Believe Sustainable Investment Drives Real Community Prosperity. With Years Of Proven Multi-Sector Project Execution.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Professional cooperative management and real-world capital deployment across residential housing, commercial real estate, mechanized agriculture, infrastructure works, and MSME empowerment. Keeping every member's investment protected, tangible, and rigorously audited.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBanner}
              className="group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
            >
              <span>View Official Charter & Registration</span>
              <span className="w-6 h-6 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-200">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>

        {/* 4 Pillars of Institutional Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Registered Cooperative</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Officially registered with RC: <span className="font-semibold text-slate-900">{COOPERATIVE_DETAILS.rcNumber}</span> in Abuja FCT. Regulated under Nigerian cooperative law.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Apex Capital India</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Operating as a direct subsidiary of <span className="font-semibold text-slate-900">{COOPERATIVE_DETAILS.parentCompany}</span>, bringing international operational standards and governance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Audited Profit Sharing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              "Commission Based On Real Project - Profit Share After Audit." Dividends are funded strictly from tangible project revenue.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <Users2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Community Empowerment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Revolving capital support for over 650 Abuja MSMEs, market traders, agricultural farmers, and real estate home builders.
            </p>
          </div>

        </div>

        {/* Physical Office Presence Strip */}
        <div className="mt-8 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Executive Headquarters</span>
            <h4 className="text-lg font-bold text-white">Bobsars Plaza C2 Second Floor, Michika Street</h4>
            <p className="text-xs text-slate-300">
              Opposite Assembly of God Church, Garki Area 11 FCT, Abuja, Nigeria · Mon - Fri: 8:30 AM - 5:30 PM
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Schedule Office Visit
          </button>
        </div>

      </div>
    </section>
  );
};
