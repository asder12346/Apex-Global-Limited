import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { COOPERATIVE_DETAILS, FOCUS_SECTORS } from '../data/cooperativeData';

interface ContactSectionProps {
  initialAmount?: number;
  initialFrequency?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialAmount, 
  initialFrequency 
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    investmentAmount: initialAmount ? initialAmount.toString() : '1000000',
    preferredPayout: initialFrequency || 'Monthly',
    sectorOfInterest: 'Real Estate & Housing',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your full name and phone number.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate immediate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
            CONNECT WITH APEX CAPITAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Start Your Cooperative Journey or Visit Our Abuja Office
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our membership desks are open Monday through Friday at Bobsars Plaza, Garki Area 11. Inquire online or contact our executive team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Cooperative Secretariat</h3>
                  <span className="text-xs text-amber-400 font-mono">RC: {COOPERATIVE_DETAILS.rcNumber}</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              {/* Physical Address */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Abuja FCT Headquarters</span>
                </div>
                <p className="text-sm text-slate-200 pl-6 leading-relaxed">
                  {COOPERATIVE_DETAILS.address}
                </p>
              </div>

              {/* Official Phones */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Direct Telephone Lines</span>
                </div>
                <div className="pl-6 space-y-1 text-sm font-semibold tabular-nums">
                  {COOPERATIVE_DETAILS.phoneNumbers.map((num, i) => (
                    <a 
                      key={i} 
                      href={`tel:${num}`}
                      className="block text-slate-200 hover:text-amber-400 transition-colors"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </div>

              {/* Official Email */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Official Email Address</span>
                </div>
                <p className="pl-6 text-sm text-slate-200">
                  <a href={`mailto:${COOPERATIVE_DETAILS.email}`} className="hover:text-amber-400 transition-colors">
                    {COOPERATIVE_DETAILS.email}
                  </a>
                </p>
              </div>

              {/* Operating Hours */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Office Hours: Monday - Friday: 8:30 AM - 5:30 PM (WAT)</span>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/234${COOPERATIVE_DETAILS.phoneNumbers[0].substring(1)}?text=Hello%20Apex%20Capital%20Cooperative,%20I%20would%20like%20to%20inquire%20about%20membership%20and%20the%208.5%%20monthly%20dividend%20program.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>

            </div>

            {/* Regulatory Transparency Note */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-900 block">Registration Integrity:</span>
              <p>
                Apex Capital Projects Multi Purpose Cooperative Ltd., Abuja is an incorporated cooperative entity under the laws of the Federal Republic of Nigeria (RC: {COOPERATIVE_DETAILS.rcNumber}).
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Lead / Membership Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950">
                  Application Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. An Apex Capital cooperative officer from our Abuja office will contact you on <span className="font-semibold text-slate-900">{formData.phone}</span> within 24 business hours to complete your registration.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        investmentAmount: '1000000',
                        preferredPayout: 'Monthly',
                        sectorOfInterest: 'Real Estate & Housing',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-xl font-bold text-slate-950">
                    Membership & Investment Application
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your details to receive our official onboarding prospectus and audited investment schedule.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alhaji Ibrahim Musa"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 08137013830"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. yourname@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Intended Investment Amount (₦ / $)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1,000,000"
                      value={formData.investmentAmount}
                      onChange={(e) => setFormData({ ...formData, investmentAmount: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Preferred Payout Frequency
                    </label>
                    <select
                      value={formData.preferredPayout}
                      onChange={(e) => setFormData({ ...formData, preferredPayout: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 outline-none transition-colors"
                    >
                      <option value="Monthly">Monthly (8.5% rate - Paid monthly)</option>
                      <option value="Quarterly">Quarterly (25.5% rate - Every 3 months)</option>
                      <option value="Biannual">Biannual (51% rate - Every 6 months)</option>
                      <option value="Yearly">Yearly (102% rate - Every 12 months)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Primary Sector Preference
                    </label>
                    <select
                      value={formData.sectorOfInterest}
                      onChange={(e) => setFormData({ ...formData, sectorOfInterest: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 outline-none transition-colors"
                    >
                      {FOCUS_SECTORS.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Additional Inquiries or Special Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ask any questions about project audits, site tours, or referral bonuses..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-sm font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Processing Application...</span>
                    ) : (
                      <>
                        <span>Submit Cooperative Application</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center text-[11px] text-slate-500">
                  Guaranteed confidentiality · No third-party spam · Regulated by Nigerian Cooperative Law
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
