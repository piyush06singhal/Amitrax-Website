import React, { useEffect } from 'react';
import { ContactSection } from '../components/sections/ContactSection';
import { MessageSquare, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';
import { COMPANY_IDENTITY } from '../data/companyData';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-28 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-tight">
            Contact & <span className="gradient-text-cyan">Inquiries</span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed">
            Have a problem worth solving or looking to architect a new digital system? Reach out to start an open, practical discussion.
          </p>
        </div>
      </div>

      {/* Main Interactive Contact Section */}
      <ContactSection />

      {/* Engagement Expectations & FAQ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#080d1e]/80 border border-white/10 backdrop-blur-md">
          <h3 className="text-2xl font-bold font-display text-white mb-6">
            What to expect when reaching out
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <span className="text-xs font-semibold text-cyan-400 block">STEP 01</span>
              <h4 className="text-base font-bold text-white">Direct Review</h4>
              <p className="text-xs leading-relaxed">
                Your problem statement is reviewed directly by an engineer, not passed to a junior sales queue.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <span className="text-xs font-semibold text-blue-400 block">STEP 02</span>
              <h4 className="text-base font-bold text-white">Feasibility Assessment</h4>
              <p className="text-xs leading-relaxed">
                We assess whether the problem is technically viable and if AmitraX is the optimal partner for your constraints.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <span className="text-xs font-semibold text-purple-400 block">STEP 03</span>
              <h4 className="text-base font-bold text-white">Technical Roadmap</h4>
              <p className="text-xs leading-relaxed">
                If there is alignment, we schedule a focused architecture discovery session with concrete next steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
