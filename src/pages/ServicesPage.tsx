import React, { useEffect } from 'react';
import { ServicesSection } from '../components/sections/ServicesSection';
import { Award } from 'lucide-react';
import { PageIntro } from '../components/ui/PageIntro';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services | AmitraX';
  }, []);

  return (
    <div className="w-full pt-28 pb-16 relative overflow-hidden">
      <PageIntro icon={<Award className="w-3.5 h-3.5" />} eyebrow="SERVICES" title="Good thinking." highlight="Useful digital work." accent="cyan" description="Websites, applications, and the support to keep them moving. Explore what your next step could look like." />

      {/* Services Section with focused, client-facing services and CTA */}
      <ServicesSection />

    </div>
  );
};
