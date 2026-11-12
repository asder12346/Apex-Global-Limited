import React, { useState, useRef } from 'react';
import { 
  Home, 
  Wheat, 
  Scissors, 
  GraduationCap, 
  Cross, 
  HardHat, 
  Briefcase, 
  ShoppingBag, 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  X
} from 'lucide-react';
import { FOCUS_SECTORS, FocusSector, COOPERATIVE_DETAILS } from '../data/cooperativeData';

interface FocusSectorsProps {
  onOpenContact: () => void;
}

export const FocusSectors: React.FC<FocusSectorsProps> = ({ onOpenContact }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedSector, setSelectedSector] = useState<FocusSector | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Home':
        return <Home className={className} />;
      case 'Wheat':
        return <Wheat className={className} />;
      case 'Scissors':
        return <Scissors className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'Cross':
        return <Cross className={className} />;
      case 'HardHat':
        return <HardHat className={className} />;
      case 'Briefcase':
        return <Briefcase className={className} />;
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      default:
        return <Home className={className} />;
    }
  };

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Duplicate the 8 sectors array twice for an endless continuous marquee effect
  const carouselItems = [...FOCUS_SECTORS, ...FOCUS_SECTORS];

  return (
    <section id="focus" className="py-20 lg:py-28 bg-slate-50/80 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                OUR 8 CORE FOCUS SECTORS
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 font-bold">
                Continuous Right-to-Left Carousel
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
              Real Physical Assets Powering Consistent Capital Yields
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Capital mobilized is deployed directly across 8 core sectors in Abuja and expanding regional commercial corridors. Hover or tap any card to pause and inspect project operations.
            </p>
          </div>

          {/* Carousel Interaction Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-800 hover:text-slate-950 hover:bg-slate-100 transition-colors shadow-2xs text-xs font-bold cursor-pointer"
              title={isPaused ? "Resume movement" : "Pause movement"}
            >
              {isPaused ? <Play className="w-4 h-4 text-emerald-600" /> : <Pause className="w-4 h-4 text-amber-600" />}
              <span>{isPaused ? "Resume Carousel" : "Pause Carousel"}</span>
            </button>

            <div className="flex items-center gap-1.5 border border-slate-200 rounded-xl bg-white p-1 shadow-2xs">
              <button
                onClick={() => handleManualScroll('left')}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Scroll Left"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleManualScroll('right')}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Scroll Right"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Full-width Carousel Track Moving from Right to Left */}
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar py-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div 
          className={`carousel-track-rtl flex gap-6 px-4 sm:px-6 lg:px-8 ${
            isPaused ? 'carousel-track-paused' : ''
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {carouselItems.map((sector, index) => (
            <div
              key={`${sector.id}-${index}`}
              className="w-[340px] sm:w-[380px] shrink-0 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedSector(sector)}
            >
              <div className="space-y-4">
                
                {/* Sector Header */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-xs group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    {getIcon(sector.iconName, "w-6 h-6")}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600 group-hover:text-amber-700 transition-colors">
                    Sector #{sector.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-700 transition-colors leading-tight">
                    {sector.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    {sector.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {sector.description}
                </p>

                {/* Representative Deliverables */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Execution Highlights
                  </span>
                  {sector.keyProjects.slice(0, 2).map((proj, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{proj}</span>
                    </div>
                  ))}
                </div>

                {/* Impact Metric Badge */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] text-slate-500 font-medium block uppercase tracking-wider">
                    Measured Impact
                  </span>
                  <span className="text-xs font-bold text-slate-900 line-clamp-1">
                    {sector.impactMetric}
                  </span>
                </div>

              </div>

              {/* Card Footer Action */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors flex items-center gap-1.5">
                  <span>View Operations</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[11px] text-slate-600">
                  Audited Real Assets
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex justify-end">
        <button
          onClick={onOpenContact}
          className="text-xs font-bold text-amber-700 hover:text-amber-800 underline underline-offset-2 cursor-pointer"
        >
          Partner In A Specific Sector
        </button>
      </div>

      {/* Spotlight Sector Modal */}
      {selectedSector && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedSector(null)}
        >
          <div 
            className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center">
                  {getIcon(selectedSector.iconName, "w-6 h-6")}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-amber-700 block">
                    Sector #{selectedSector.number}
                  </span>
                  <h3 className="text-xl font-bold text-slate-950">
                    {selectedSector.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedSector(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              <p className="text-slate-500 font-semibold">
                {selectedSector.subtitle}
              </p>
              <p className="leading-relaxed">
                {selectedSector.description}
              </p>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2.5">
                <span className="text-xs font-bold text-slate-900 block uppercase tracking-wider">
                  Representative Operations in Abuja & Regional Hubs
                </span>
                {selectedSector.keyProjects.map((project, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{project}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200">
                <span className="text-[11px] font-bold text-amber-900 uppercase block tracking-wider mb-1">
                  Verified Audit Principle
                </span>
                <p className="text-xs font-bold text-slate-900">
                  "Commission Based On Real Project - Profit Share After Audit"
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Impact metric: <span className="font-bold text-slate-900">{selectedSector.impactMetric}</span>
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
              <button
                onClick={() => setSelectedSector(null)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  setSelectedSector(null);
                  onOpenContact();
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                Inquire About {selectedSector.title}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
