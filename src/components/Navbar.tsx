import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COOPERATIVE_DETAILS } from '../data/cooperativeData';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenBanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenBanner }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if page is scrolled past header threshold
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // If scrolling UP: show the navbar
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } 
      // If scrolling DOWN and past threshold: hide navbar
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setMobileMenuOpen(false); // close mobile menu if open when scrolling down
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md' 
          : 'bg-white border-b border-slate-100 shadow-2xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Zone 1: Single text element Brand Zone with cooperative crest */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-400 shadow-xs group-hover:bg-slate-800 transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-slate-900 whitespace-nowrap group-hover:text-amber-600 transition-colors">
                APEX CAPITAL
              </span>
              <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap">
                Cooperative Ltd. · Abuja
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              About Us
            </a>
            <a href="#focus" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Focus Sectors
            </a>
            <a href="#who-we-help" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Who We Help
            </a>
            <a href="#projects" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              What We've Done
            </a>
            <a href="#why-us" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Why Us
            </a>
            <a href="#contact" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: Call phone indicator + 1 primary action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a 
              href={`tel:${COOPERATIVE_DETAILS.phoneNumbers[0]}`}
              className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              <div className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-600 uppercase tracking-wider font-semibold">Call Abuja Office</span>
                <span className="font-semibold text-slate-900 tabular-nums">{COOPERATIVE_DETAILS.phoneNumbers[0]}</span>
              </div>
            </a>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-xs hover:shadow whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Join Cooperative</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenContact}
              className="px-3 py-1.5 text-xs font-bold text-slate-900 bg-amber-400 rounded-md cursor-pointer"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              About Us
            </a>
            <a 
              href="#focus" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Focus Sectors (8 Areas)
            </a>
            <a 
              href="#who-we-help" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Who We Help
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              What We've Done
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Why Work With Us
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Contact Abuja Office
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBanner();
              }}
              className="w-full text-center py-2 px-3 text-xs font-semibold text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
            >
              View Official RC: 9561637 Charter
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full text-center py-2.5 px-3 text-xs font-bold text-slate-950 bg-amber-400 rounded-lg shadow-xs cursor-pointer"
            >
              Join Cooperative Society
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
