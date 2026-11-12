import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhoWeHelp } from './components/WhoWeHelp';
import { FocusSectors } from './components/FocusSectors';
import { WhatWeHaveDone } from './components/WhatWeHaveDone';
import { WhyWorkWithUs } from './components/WhyWorkWithUs';
import { PartnersSection } from './components/PartnersSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OfficialBannerModal } from './components/OfficialBannerModal';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
  const [inquiryAmount, setInquiryAmount] = useState<number | undefined>(undefined);
  const [inquiryFrequency, setInquiryFrequency] = useState<string | undefined>(undefined);

  const scrollToContact = (customAmount?: number, customFrequency?: string) => {
    if (customAmount) setInquiryAmount(customAmount);
    if (customFrequency) setInquiryFrequency(customFrequency);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Navigation with scroll-up visibility */}
      <Navbar 
        onOpenContact={() => scrollToContact()}
        onOpenBanner={() => setIsBannerModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero 
          onOpenContact={() => scrollToContact()}
          onOpenBanner={() => setIsBannerModalOpen(true)}
        />

        {/* About Us Section */}
        <AboutSection 
          onOpenBanner={() => setIsBannerModalOpen(true)}
          onOpenContact={() => scrollToContact()}
        />

        {/* Who We Help Section */}
        <WhoWeHelp 
          onOpenContact={() => scrollToContact()}
        />

        {/* 8 Core Focus Sectors Right-to-Left Carousel */}
        <FocusSectors 
          onOpenContact={() => scrollToContact()}
        />

        {/* What We Have Done (Case studies & verified projects) */}
        <WhatWeHaveDone 
          onOpenContact={() => scrollToContact()}
        />

        {/* Why Work With Us (6 structural trust pillars) */}
        <WhyWorkWithUs 
          onOpenContact={() => scrollToContact()}
          onOpenBanner={() => setIsBannerModalOpen(true)}
        />

        {/* Strategic Partners & Member Testimonials */}
        <PartnersSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact & Membership Application Form */}
        <ContactSection 
          initialAmount={inquiryAmount}
          initialFrequency={inquiryFrequency}
        />

      </main>

      {/* Clean Footer with Social Handles & Abuja Headquarters Info */}
      <Footer 
        onOpenBanner={() => setIsBannerModalOpen(true)}
        onOpenContact={() => scrollToContact()}
      />

      {/* Official Charter & Banner Lightbox Modal */}
      <OfficialBannerModal 
        isOpen={isBannerModalOpen}
        onClose={() => setIsBannerModalOpen(false)}
        onOpenContact={() => scrollToContact()}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsAppButton />

    </div>
  );
}
