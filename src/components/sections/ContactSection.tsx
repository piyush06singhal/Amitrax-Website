import React, { useState } from 'react';
import { COMPANY_IDENTITY } from '../../data/companyData';
import { Button } from '../ui/Button';
import {
  ArrowUpRight,
  Send,
  CheckCircle2,
  Copy,
  Mail,
  ShieldCheck
} from 'lucide-react';

interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  inquiryType: 'General inquiry' | 'Project discussion' | 'Technical collaboration' | 'Joining / Careers';
  problemStatement: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    organization: '',
    inquiryType: 'Project discussion',
    problemStatement: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const inquiryOptions: ('General inquiry' | 'Project discussion' | 'Technical collaboration' | 'Joining / Careers')[] = [
    'Project discussion',
    'Technical collaboration',
    'General inquiry',
    'Joining / Careers',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.problemStatement) {
      setSubmitted(true);
    }
  };

  const copyDraft = () => {
    const text = `AmitraX Conversation Starter:
From: ${formData.fullName} (${formData.email})
Organization: ${formData.organization || 'Independent'}
Type: ${formData.inquiryType}
Problem / Inquiry:
${formData.problemStatement}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoHref = `mailto:${COMPANY_IDENTITY.contactEmail}?subject=${encodeURIComponent(
    `[AmitraX Inquiry: ${formData.inquiryType}] ${formData.fullName}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nEmail: ${formData.email}\nOrganization: ${
      formData.organization || 'N/A'
    }\nInquiry Type: ${formData.inquiryType}\n\nNote / Problem Statement:\n${formData.problemStatement}`
  )}`;

  return (
    <section id="contact" className="relative w-full py-20 lg:py-28 bg-white dark:bg-[#04060d] border-t border-slate-200 dark:border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Note: page hero on /contact provides the section heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels and communication philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#080d1e]/90 border border-slate-200 dark:border-white/10 shadow-sm dark:backdrop-blur-md space-y-4">
              <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block">
                Direct Contact Channel
              </span>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Direct inquiries & project briefs:</p>
                <a
                  href={`mailto:${COMPANY_IDENTITY.contactEmail}`}
                  className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white dark:hover:text-cyan-300 hover:text-cyan-700 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />
                  <span>{COMPANY_IDENTITY.contactEmail}</span>
                </a>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-200 dark:border-white/5">
                We review technical briefs directly. No marketing spam, automated sales funnels, or commission-based agents.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#080d1e]/90 border border-slate-200 dark:border-white/10 shadow-sm dark:backdrop-blur-md space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Our Communication Commitment</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>Direct engineer response within 24–48 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>Honest technical feasibility assessment—we will tell you if we are not the right fit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>Confidentiality guaranteed for problem statements and system diagrams.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-white dark:from-[#090f24] dark:via-[#0a0f24]/90 dark:to-[#050914] border border-slate-200 dark:border-cyan-500/30 shadow-xl dark:shadow-2xl dark:backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                    Inquiry Draft Prepared
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. You can dispatch your message directly via your email client, or copy the formatted text.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a href={mailtoHref} className="w-full sm:w-auto">
                      <Button variant="primary" size="md" iconRight={<ArrowUpRight className="w-4 h-4" />}>
                        Open in Mail Client
                      </Button>
                    </a>
                    <button
                      type="button"
                      onClick={copyDraft}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 dark:hover:border-white/20 text-xs font-semibold text-slate-900 dark:text-white transition-all flex items-center justify-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Draft'}</span>
                    </button>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 dark:text-slate-400 dark:hover:text-cyan-300 hover:text-cyan-700 underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                      Start a Technical Conversation
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Select the nature of your inquiry below:
                    </p>
                  </div>

                  {/* Inquiry Type Radio / Pill selector */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {inquiryOptions.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, inquiryType: type })}
                        className={`p-2.5 rounded-xl text-xs font-medium transition-all text-center border cursor-pointer ${
                          formData.inquiryType === type
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold border-cyan-400 shadow-sm'
                            : 'bg-white dark:bg-white/[0.03] border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/[0.06]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@organization.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block">
                      Organization / Company (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Acme Research Labs or Independent"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block">
                      Problem Statement or Project Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.problemStatement}
                      onChange={(e) => setFormData({ ...formData, problemStatement: e.target.value })}
                      placeholder="What problem are you looking to solve? What are the key technical challenges, constraints, or goals?"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      We respond directly. No unsolicited marketing.
                    </span>

                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      iconRight={<Send className="w-4 h-4" />}
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
