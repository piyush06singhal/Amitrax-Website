import React from 'react';
import { CAPABILITIES } from '../../data/capabilities';
import { Reveal } from '../motion/Reveal';
import { OfferingArtwork, OfferingScene } from './OfferingArtwork';
import './offerings-editorial.css';

const scenes: OfferingScene[] = ['website', 'workspace', 'workflow', 'website', 'workflow', 'direction'];
const outcomes = ['Make the right first impression.', 'Give your team a clearer day.', 'Make room for human judgment.', 'Make every screen feel considered.', 'Connect the work between tools.', 'Find the right shape for your idea.'];

export const WhatWeBuildSection: React.FC = () => (
  <section id="what-we-build" className="studio-section offering-surface">
    <div className="studio-container">
      <Reveal><header className="offering-intro">
        <div><p className="studio-kicker">What we can make together</p><h2 className="studio-title">Made for real-world use.</h2></div>
        <p className="studio-copy">Strategy, design, and development, brought together. These original studio concepts illustrate the kinds of experiences we can create; they are not client projects.</p>
      </header></Reveal>
      <div className="offering-examples">
        {CAPABILITIES.map((capability, index) => <Reveal key={capability.id}>
          <article className={`offering-example offering-example-${index}`}>
            <figure><OfferingArtwork scene={scenes[index]} label={`${capability.title}: ${outcomes[index]}`} /><figcaption className="offering-caption"><span>{outcomes[index]}</span><span>Concept / 0{index + 1}</span></figcaption></figure>
            <div>
              <span className="studio-kicker">0{index + 1} / {capability.shortName}</span>
              <h3>{capability.title}</h3>
              <p className="offering-tagline">{capability.tagline}</p><p>{capability.summary}</p>
              <details className="offering-scope"><summary>Explore the scope & approach</summary>
                <h4>What this can include</h4><ul>{capability.detailedScope.map(scope => <li key={scope}>{scope}</li>)}</ul>
                <h4>Our focus</h4><p>{capability.systemGuarantees.join(' · ')}</p>
                <h4>Methods & tools</h4><p>{capability.technologies.join(' · ')}</p>
              </details>
            </div>
          </article>
        </Reveal>)}
      </div>
    </div>
  </section>
);
