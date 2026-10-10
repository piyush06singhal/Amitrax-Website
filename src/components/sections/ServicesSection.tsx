import React, { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { ButtonLink } from '../ui/Button';
import { Reveal } from '../motion/Reveal';
import { OfferingArtwork, OfferingScene } from './OfferingArtwork';
import './offerings-editorial.css';

const categories = ['All', 'Websites', 'Web Apps', 'Design', 'Growth & Support'];
const previews: Record<string, { scene: OfferingScene; label: string }> = {
  'website-design-development': { scene: 'website', label: 'A clear, responsive website' },
  'web-applications': { scene: 'workspace', label: 'A focused workspace for your team' },
  'custom-digital-products': { scene: 'workspace', label: 'A product shaped around a workflow' },
  'automation-integrations': { scene: 'workflow', label: 'A connected, human-reviewed workflow' },
  'ui-ux-brand-direction': { scene: 'direction', label: 'Typography, colour, and a coherent direction' },
  'website-refreshes': { scene: 'website', label: 'A considered new visual language' },
  'launch-support': { scene: 'workflow', label: 'Review, improve, and keep moving' },
  'digital-direction': { scene: 'direction', label: 'The beginnings of a visual direction' },
  'content-seo': { scene: 'content', label: 'An editorial structure for useful content' },
};

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(SERVICES[0].id);
  const filtered = activeCategory === 'All' ? SERVICES : SERVICES.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="studio-section offering-surface">
      <div className="studio-container">
        <div className="offering-filters" role="group" aria-label="Filter services by category">
          {categories.map(category => <button type="button" key={category} aria-pressed={activeCategory === category} onClick={() => {
            setActiveCategory(category);
            const next = category === 'All' ? SERVICES : SERVICES.filter(service => service.category === category);
            if (!next.some(service => service.id === expandedId)) setExpandedId(next[0]?.id ?? null);
          }}>{category}</button>)}
        </div>
        <div aria-live="polite" className="sr-only">{filtered.length} services in {activeCategory === 'All' ? 'all categories' : activeCategory}</div>
        {filtered.map(service => {
          const open = expandedId === service.id;
          const preview = previews[service.id];
          return <article className="offering-service" key={service.id}>
            <h2><button type="button" id={`service-header-${service.id}`} className="offering-service-trigger" aria-expanded={open} aria-controls={`service-panel-${service.id}`} onClick={() => setExpandedId(open ? null : service.id)}>
              <span className="offering-service-number">{String(SERVICES.indexOf(service) + 1).padStart(2, '0')}</span>
              <span className="offering-service-name">{service.name}</span>
              <Plus size={24} aria-hidden="true" />
            </button></h2>
            <div className="offering-panel" id={`service-panel-${service.id}`} role="region" aria-labelledby={`service-header-${service.id}`} aria-hidden={!open} inert={!open} data-open={open}>
              <div className="offering-panel-clip"><div className="offering-service-content">
                <div>
                  <p className="offering-lead">{service.shortExplanation}</p>
                  <h4>Where this helps</h4><p>{service.typicalProblemsSolved}</p>
                  <h4>What we deliver</h4><ul>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
                  <h4>Tools we may use</h4><p>{service.technologies.join(' · ')}</p>
                </div>
                <figure><OfferingArtwork scene={preview.scene} label={preview.label} /><figcaption className="offering-caption"><span>{preview.label}</span><span>Studio concept</span></figcaption></figure>
              </div></div>
            </div>
          </article>;
        })}
        <Reveal><div className="offering-cta">
          <div><h2>Have something worth building?</h2><p>Tell us what you want to improve, launch, or make easier for your customers.</p></div>
          <ButtonLink to="/contact" size="lg" iconRight={<ArrowUpRight size={18} />}>Start a conversation</ButtonLink>
        </div></Reveal>
      </div>
    </section>
  );
};
