import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp,
  FileText
} from 'lucide-react';
import { COOPERATIVE_DETAILS, FOCUS_SECTORS } from '../data/cooperativeData';

interface FooterProps {
  onOpenBanner: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenBanner, 
  onOpenContact 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z"/>
        </svg>
      )
    },
    {
      name: "X (Twitter)",
      href: "https://x.com",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/234${COOPERATIVE_DETAILS.phoneNumbers[0].substring(1)}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.06 7.64C8.87 7.64 8.56 7.71 8.3 8C8.04 8.28 7.31 8.97 7.31 10.37C7.31 11.78 8.33 13.12 8.48 13.31C8.62 13.51 10.45 16.32 13.25 17.53C13.92 17.82 14.44 17.99 14.85 18.12C15.52 18.33 16.13 18.3 16.61 18.23C17.15 18.15 18.27 17.55 18.5 16.9C18.74 16.25 18.74 15.69 18.67 15.57C18.6 15.46 18.42 15.4 18.14 15.26C17.86 15.12 16.48 14.44 16.22 14.35C15.97 14.26 15.78 14.21 15.6 14.49C15.41 14.77 14.88 15.4 14.72 15.58C14.56 15.77 14.4 15.79 14.12 15.65C13.84 15.51 12.95 15.22 11.89 14.27C11.06 13.53 10.5 12.62 10.34 12.34C10.18 12.06 10.32 11.91 10.46 11.77C10.59 11.64 10.74 11.44 10.88 11.28C11.02 11.11 11.07 10.99 11.16 10.81C11.25 10.62 11.21 10.46 11.14 10.32C11.07 10.18 10.51 8.81 10.28 8.26C10.05 7.72 9.82 7.79 9.65 7.79C9.49 7.78 9.3 7.64 9.06 7.64Z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Corporate Summary (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-base font-extrabold tracking-tight text-white block">
                  APEX CAPITAL PROJECTS
                </span>
                <span className="text-xs text-amber-400 font-medium">
                  Multi Purpose Cooperative Ltd., Abuja
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Subsidiary of <span className="text-slate-200 font-semibold">Apex Capital India</span>. Operating as a registered cooperative (RC: {COOPERATIVE_DETAILS.rcNumber}) deploying capital into 8 high-impact sectors with audited profit sharing.
            </p>

            <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 text-[11px] text-slate-300">
              <span className="text-amber-400 font-semibold block mb-0.5">Core Cooperative Mandate:</span>
              "Commission Based On Real Project - Profit Share After Audit."
            </div>

            {/* Social Handles */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 block mb-3 uppercase tracking-wider">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center border border-slate-800 hover:border-amber-400 transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 8 Focus Sectors Navigation (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              8 Core Focus Sectors
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {FOCUS_SECTORS.map((sector) => (
                <li key={sector.id}>
                  <a href="#focus" className="hover:text-amber-400 transition-colors">
                    {sector.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Portal (Cols 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Cooperative Portal
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Cooperative</a>
              </li>
              <li>
                <a href="#who-we-help" className="hover:text-amber-400 transition-colors">Who We Help</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">What We've Done</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">Why Work With Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact / Join</a>
              </li>
              <li>
                <button 
                  onClick={onOpenBanner}
                  className="text-amber-400 hover:underline flex items-center gap-1 cursor-pointer pt-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Official Charter</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Abuja Headquarters
            </h4>
            
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  {COOPERATIVE_DETAILS.address}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="tabular-nums space-y-0.5">
                  {COOPERATIVE_DETAILS.phoneNumbers.map((p, i) => (
                    <a key={i} href={`tel:${p}`} className="block hover:text-white">
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COOPERATIVE_DETAILS.email}`} className="hover:text-white">
                  {COOPERATIVE_DETAILS.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="w-full py-2.5 px-3 text-center text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Book Appointment / Join
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} {COOPERATIVE_DETAILS.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400">
              Registered Cooperative Society · RC: {COOPERATIVE_DETAILS.rcNumber} · Subsidiary of Apex Capital India.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer text-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
