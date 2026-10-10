import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Hero } from '../components/hero/Hero';
import { CorePhilosophySection } from '../components/sections/CorePhilosophySection';
import { Reveal } from '../components/motion/Reveal';
import { ButtonLink } from '../components/ui/Button';
import { HomeProcessDrawing } from '../components/hero/HomeProcessDrawing';
import { StudioWorkbench } from '../components/studio/StudioWorkbench';
import { STUDIO_PROCESS } from '../data/studioProcess';

const fieldUrl = new URL('../components/hero/homepage-fieldnotes.svg', import.meta.url).href;
const flowUrl = new URL('../components/hero/homepage-daylight.svg', import.meta.url).href;

export const HomePage = () => {
  useEffect(() => {
    // Respect a direct link to the experiments as well as ordinary route visits.
    if (window.location.hash === '#selected-experiments') {
      document.getElementById('selected-experiments')?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="home-editorial">
      <Hero />
      <section id="selected-experiments" className="studio-section home-experiments" aria-labelledby="home-experiments-heading">
        <div className="studio-container">
          <Reveal className="home-section-heading">
            <div><p className="studio-kicker">Selected experiments / Studio concepts</p><h2 className="studio-title" id="home-experiments-heading">Ideas you can see.</h2></div>
            <p className="studio-copy">Original visual studies exploring what a digital experience can feel like. Self-initiated concepts, not client projects or live products.</p>
          </Reveal>
          <div className="home-work-pair">
            <Reveal>
              <figure className="home-work home-work-field">
                <Link to="/products" aria-label="Explore studio work, including the Fieldnotes website concept"><img src={fieldUrl} width="1200" height="900" loading="lazy" decoding="async" alt="Fieldnotes editorial website concept with oversized typography, a sculptural ochre sun, and a journal-style layout." /></Link>
                <figcaption><div><p className="home-work-label">01 / Website concept</p><h3>Fieldnotes</h3></div><p>A quieter kind of presence.<br />Editorial design & art direction.</p></figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.12}>
              <figure className="home-work home-work-daylight">
                <Link to="/products" aria-label="Explore studio work, including the Daylight application concept"><img src={flowUrl} width="1000" height="1080" loading="lazy" decoding="async" alt="Daylight planning application concept with a weekly schedule, a cyan focus panel, and a compact mobile companion." /></Link>
                <figcaption><div><p className="home-work-label">02 / Web application concept</p><h3>Daylight</h3></div><p>A little space to focus.<br />Product thinking & interface design.</p></figcaption>
              </figure>
            </Reveal>
          </div>
          <Link to="/products" className="home-text-link">Explore studio work <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="studio-section home-capabilities" aria-labelledby="home-capabilities-heading">
        <div className="studio-container home-capability-layout">
          <Reveal className="home-capability-image"><StudioWorkbench /></Reveal>
          <Reveal className="home-capability-copy">
            <p className="studio-kicker">What we bring together</p><h2 className="studio-title" id="home-capabilities-heading">Good design.<br />Real-world utility.</h2>
            <p className="studio-copy">From the first impression to the everyday interaction, we connect how it looks with how it works.</p>
            <ul className="home-service-list">
              <li><span>01</span><div><h3>Websites with a point of view</h3><p>A clear story, a distinctive identity, and an easy next step.</p></div></li>
              <li><span>02</span><div><h3>Applications that simplify</h3><p>Focused interfaces for the tasks your customers and teams do every day.</p></div></li>
              <li><span>03</span><div><h3>Foundations that last</h3><p>Responsive design, considered development, and support beyond launch.</p></div></li>
            </ul>
            <ButtonLink to="/services" variant="secondary" iconRight={<ArrowUpRight size={18} />}>Explore our services</ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="studio-section home-process" aria-labelledby="home-process-heading">
        <div className="studio-container">
          <Reveal className="home-section-heading"><div><p className="studio-kicker">From a question to something real</p><h2 className="studio-title" id="home-process-heading">A clear path forward.</h2></div><Link className="home-text-link" to="/architecture">Our process <ArrowUpRight size={18} aria-hidden="true" /></Link></Reveal>
          <Reveal><HomeProcessDrawing /></Reveal>
          <ol className="home-process-steps">
            {STUDIO_PROCESS.map(({ short, text }, index) => <li key={short}><span>0{index + 1}</span><h3>{short}</h3><p>{text}</p></li>)}
          </ol>
        </div>
      </section>
      <CorePhilosophySection />
      <section className="studio-section home-closing" aria-labelledby="home-closing-heading">
        <Reveal className="studio-container home-closing-layout"><div><p className="home-eyebrow">Your next chapter</p><h2 id="home-closing-heading">Have something<br />in mind?</h2><p>Bring the idea. We’ll help find the shape of it.</p></div><ButtonLink to="/contact" size="lg" className="home-primary" iconRight={<ArrowUpRight size={20} />}>Let’s talk about it</ButtonLink></Reveal>
      </section>
    </div>
  );
};
