import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../motion/Reveal';

export const CorePhilosophySection = () => (
  <section className="studio-section home-philosophy" aria-labelledby="home-philosophy-heading">
    <Reveal className="studio-container home-philosophy-layout">
      <p className="studio-kicker">A note from the studio</p>
      <div>
        <h2 id="home-philosophy-heading">Make it clear.<br />Make it useful.<br /><span>Make it matter.</span></h2>
        <p className="studio-copy">Digital work should make things easier for the people on the other side of the screen. We keep that idea close, from the first sketch to the last line of code.</p>
        <Link className="home-text-link" to="/about">Get to know AmitraX <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </Reveal>
  </section>
);
