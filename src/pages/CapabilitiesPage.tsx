import React, { useEffect } from 'react';
import { ButtonLink } from '../components/ui/Button';
import { WhatWeBuildSection } from '../components/sections/WhatWeBuildSection';
import { ArrowUpRight, Layers } from 'lucide-react';
import { PageIntro } from '../components/ui/PageIntro';
import { Reveal } from '../components/motion/Reveal';

export const CapabilitiesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Capabilities | AmitraX';
  }, []);

  return (
    <div className="w-full pt-28 pb-16 relative offering-surface">
      <PageIntro icon={<Layers className="w-3.5 h-3.5" />} eyebrow="CAPABILITIES" title="A little possibility." highlight="A lot of purpose." accent="cyan" description="A more useful website. A simpler working day. An idea made tangible. Here is how design and development can help." />
      <WhatWeBuildSection />
      <div className="studio-container"><Reveal><div className="offering-cta">
        <div><h2>Have an idea that needs shaping?</h2><p>Tell us what you are trying to improve, and we will help you find a sensible way forward.</p></div>
        <ButtonLink to="/contact" size="lg" iconRight={<ArrowUpRight size={18} />}>Start a conversation</ButtonLink>
      </div></Reveal></div>
    </div>
  );
};
