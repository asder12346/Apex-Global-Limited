import React from 'react';
import { COOPERATIVE_DETAILS } from '../data/cooperativeData';

export const FloatingWhatsAppButton: React.FC = () => {
  const phoneNumber = COOPERATIVE_DETAILS.phoneNumbers[0].replace(/^0/, '234');
  const message = encodeURIComponent(
    'Hello Apex Capital Projects Cooperative, I would like to inquire about membership and project operations.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Circular WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Apex Capital Cooperative on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        {/* Subtle Ping Animation Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp Official SVG Logo */}
        <svg 
          className="w-7 h-7 fill-current relative z-10" 
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.06 7.64C8.87 7.64 8.56 7.71 8.3 8C8.04 8.28 7.31 8.97 7.31 10.37C7.31 11.78 8.33 13.12 8.48 13.31C8.62 13.51 10.45 16.32 13.25 17.53C13.92 17.82 14.44 17.99 14.85 18.12C15.52 18.33 16.13 18.3 16.61 18.23C17.15 18.15 18.27 17.55 18.5 16.9C18.74 16.25 18.74 15.69 18.67 15.57C18.6 15.46 18.42 15.4 18.14 15.26C17.86 15.12 16.48 14.44 16.22 14.35C15.97 14.26 15.78 14.21 15.6 14.49C15.41 14.77 14.88 15.4 14.72 15.58C14.56 15.77 14.4 15.79 14.12 15.65C13.84 15.51 12.95 15.22 11.89 14.27C11.06 13.53 10.5 12.62 10.34 12.34C10.18 12.06 10.32 11.91 10.46 11.77C10.59 11.64 10.74 11.44 10.88 11.28C11.02 11.11 11.07 10.99 11.16 10.81C11.25 10.62 11.21 10.46 11.14 10.32C11.07 10.18 10.51 8.81 10.28 8.26C10.05 7.72 9.82 7.79 9.65 7.79C9.49 7.78 9.3 7.64 9.06 7.64Z"/>
        </svg>

        {/* Small Active Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 ring-2 ring-white" />
      </a>
    </div>
  );
};
