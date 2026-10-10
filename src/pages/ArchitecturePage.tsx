import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';
import { PageIntro } from '../components/ui/PageIntro';
import { ButtonLink } from '../components/ui/Button';
import { Reveal } from '../components/motion/Reveal';
import { OfferingArtwork } from '../components/sections/OfferingArtwork';
import '../components/sections/offerings-editorial.css';
import { STUDIO_PROCESS } from '../data/studioProcess';

const PRINCIPLES = [
  'Your website should make your business easier to understand.',
  'The design should support the customer journey, not distract from it.',
  'The site should be easy to use on phones, tablets, and desktops.',
  'The technology should be dependable and maintainable after launch.',
];

export const ArchitecturePage: React.FC = () => {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Process | AmitraX';
  }, []);

  return <div className="w-full pt-28 pb-20 offering-surface">
    <PageIntro icon={<Compass size={16} />} eyebrow="OUR PROCESS" title="A clear path from" highlight="idea to launch." accent="cyan" description="We keep the process collaborative, explain our decisions, and focus on making something your customers will actually value." />
    <section className="studio-section">
      <div className="studio-container">
        <Reveal><header className="offering-intro">
          <div><p className="studio-kicker">How a project takes shape</p><h2 className="studio-title">The same idea.<br />A little clearer, each step.</h2></div>
           <p className="studio-copy">Every project is different. The important parts stay consistent: understand, shape, build, and improve.<span className="offering-desktop-note"> Select a stage to see the idea develop.</span></p>
        </header></Reveal>
        <Reveal><div className="offering-process">
          <ol className="offering-stages" aria-label="Project stages">
            {STUDIO_PROCESS.map((step, index) => <li key={step.short}>
              <button type="button" className="offering-stage-button" aria-pressed={stage === index} aria-controls="process-stage-scene" onClick={() => setStage(index)}>
                <span>0{index + 1}</span><span><strong>{step.title}</strong><span className="offering-stage-description">{step.text}</span></span>
              </button>
              <article className="offering-stage-mobile">
                <div aria-hidden="true"><OfferingArtwork stage={index} label="" /></div>
                <div><span className="studio-kicker">0{index + 1} / {step.short}</span><h3>{step.title}</h3></div>
                <p>{step.text}</p>
              </article>
            </li>)}
          </ol>
           <div id="process-stage-scene" className="offering-process-scene" aria-live="polite" aria-atomic="true">
             <figure><div key={stage} className="offering-stage-art"><OfferingArtwork stage={stage} label={`${STUDIO_PROCESS[stage].short}: ${STUDIO_PROCESS[stage].output}`} /></div>
               <figcaption className="offering-caption"><span>0{stage + 1} / {STUDIO_PROCESS[stage].short}</span><span>Process illustration</span></figcaption>
             </figure>
             <p className="studio-copy">{STUDIO_PROCESS[stage].output}</p>
            <div className="offering-process-progress" aria-hidden="true"><span style={{ width: `${(stage + 1) * 25}%` }} /></div>
          </div>
        </div></Reveal>
      </div>
    </section>
    <section className="studio-section"><div className="studio-container">
      <Reveal><div className="offering-principles">
        <div><p className="studio-kicker">What stays consistent</p><h2 className="studio-title">Your customers.<br />Your team.<br />The bigger picture.</h2></div>
        <ul>{PRINCIPLES.map(principle => <li key={principle}>{principle}</li>)}</ul>
      </div></Reveal>
      <Reveal><div className="offering-cta">
        <div><h2>Not sure what your project needs yet?</h2><p>That is a normal place to start. Bring us the context you have and we will help turn it into a sensible first step.</p></div>
        <ButtonLink to="/contact" size="lg" iconRight={<ArrowUpRight size={18} />}>Talk through your idea</ButtonLink>
      </div></Reveal>
    </div></section>
  </div>;
};
