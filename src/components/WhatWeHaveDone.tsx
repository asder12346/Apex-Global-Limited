import React, { useState } from 'react';
import { Building2, MapPin, Calendar, CheckCircle2, TrendingUp, Layers, ArrowUpRight } from 'lucide-react';
import { PROJECT_PORTFOLIO, ProjectCaseStudy } from '../data/cooperativeData';

interface WhatWeHaveDoneProps {
  onOpenContact: () => void;
}

export const WhatWeHaveDone: React.FC<WhatWeHaveDoneProps> = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'real-estate' | 'agriculture' | 'infrastructure' | 'msme'>('all');

  const filteredProjects = PROJECT_PORTFOLIO.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'real-estate') return project.sector.includes('Real Estate');
    if (activeFilter === 'agriculture') return project.sector.includes('Agro');
    if (activeFilter === 'infrastructure') return project.sector.includes('Infrastructure');
    if (activeFilter === 'msme') return project.sector.includes('MSME');
    return true;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-slate-500 block">
              WHAT WE HAVE DONE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
              Verified Project Portfolios & Infrastructure Deliverables
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Every dividend payout is grounded in real, inspectable developments across the Federal Capital Territory and neighboring economic hubs.
            </p>
          </div>

          {/* Aggregate Quantitative Proof Numbers */}
          <div className="grid grid-cols-2 gap-4 shrink-0 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div>
              <span className="block text-xl sm:text-2xl font-extrabold text-slate-900 tabular-nums">₦880M+</span>
              <span className="text-[11px] text-slate-500 font-medium">Project Capital Deployed</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-extrabold text-amber-600 tabular-nums">100%</span>
              <span className="text-[11px] text-slate-500 font-medium">Audit Compliance Rate</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-fit mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeFilter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Case Studies
          </button>
          <button
            onClick={() => setActiveFilter('real-estate')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeFilter === 'real-estate' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Housing & Real Estate
          </button>
          <button
            onClick={() => setActiveFilter('agriculture')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeFilter === 'agriculture' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Agriculture & Processing
          </button>
          <button
            onClick={() => setActiveFilter('infrastructure')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeFilter === 'infrastructure' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Infrastructure Works
          </button>
          <button
            onClick={() => setActiveFilter('msme')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeFilter === 'msme' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            MSME Revolving Fund
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8 space-y-4">
                
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-amber-700">{project.sector}</span>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Specs */}
                <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Verified Outcomes & Audit Metrics
                  </span>
                  {project.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold block">Capital Committed</span>
                  <span className="text-sm font-bold text-slate-900 tabular-nums">{project.capitalCommitted}</span>
                </div>
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 cursor-pointer"
                >
                  <span>Inquire About This Sector</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Site Inspection Callout */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">
              Want to physically inspect our ongoing project sites in Abuja?
            </h4>
            <p className="text-xs text-slate-300">
              We conduct bi-weekly scheduled site tours for registered and prospective members departing from our Garki office.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Book A Project Tour
          </button>
        </div>

      </div>
    </section>
  );
};
