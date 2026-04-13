import { useState } from 'react';
import SectionEyebrow from './SectionEyebrow';
import { useEcosystemData } from '../data/ecosystem';
import './Ecosystem.css';

export default function Ecosystem() {
  const { ECOSYSTEM_EYEBROW, ECOSYSTEM_HEADING, ECOSYSTEM_HEADING_EM, ECOSYSTEM_DESC, PARTNER_CATEGORIES } = useEcosystemData();
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="ecosystem" className="sw sw-alt">
      <div className="cn">
        <div className="rev">
          <SectionEyebrow text={ECOSYSTEM_EYEBROW} accent />
          <h2 className="h2">{ECOSYSTEM_HEADING} <em>{ECOSYSTEM_HEADING_EM}</em></h2>
          <p className="eco-desc">{ECOSYSTEM_DESC}</p>
        </div>

        {/* ── Accordion ── */}
        <div className="pcat-accordion rev" style={{ transitionDelay: '.08s' }}>
          {PARTNER_CATEGORIES.map((cat, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={cat.id} className={`pcat-acc-item${isOpen ? ' open' : ''}`}>

                {/* Header / плашка */}
                <button
                  className="pcat-acc-header"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="pcat-acc-label">{cat.label}</span>
                  <div className="pcat-acc-right">
                    <span className="pcat-tab-count">{cat.members.length}</span>
                    <svg
                      className="pcat-acc-arrow"
                      width="16" height="16" viewBox="0 0 16 16"
                      fill="none" aria-hidden="true"
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor" strokeWidth="1.6"
                        strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {/* Collapsible body */}
                <div className="pcat-acc-body">
                  <div className="pcat-acc-inner">
                    <div className="pcat-desc">{cat.desc}</div>
                    <div className="pgrid">
                      {cat.members.map((member, j) => (
                        <div className="pcard" key={j}>
                          <div className="pcard-logo">
                            {member.logo
                              ? <img
                                  src={member.logo}
                                  alt={member.name}
                                  className="pcard-logo-img"
                                />
                              : <span className="pcard-initials">{member.initials}</span>
                            }
                          </div>
                          <div className="pcard-name">{member.name}</div>
                          <div className="pcard-overlay">
                            <div className="pcard-ov-initials">{member.initials}</div>
                            <div className="pcard-ov-name">{member.name}</div>
                            <p className="pcard-impact">{member.impact}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
