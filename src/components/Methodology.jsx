import SectionEyebrow from './SectionEyebrow';
import { useMethData } from '../data/methodology';
import './Methodology.css';

export default function Methodology() {
  const { METH_EYEBROW, METH_HEADING, METH_HEADING_EM, METH_CATEGORIES, METH_TIERS, METH_BODY, METH_POINTS_LABEL, METH_TIERS_TITLE } = useMethData();
  return (
    <section id="methodology" className="sw">
      <div className="cn">
        <div className="rev">
          <SectionEyebrow text={METH_EYEBROW} />
          <h2 className="h2">{METH_HEADING} <em>{METH_HEADING_EM}</em></h2>
          <p className="bd" style={{ maxWidth: '820px' }}>{METH_BODY}</p>
        </div>

        {/* Categories Grid */}
        <div className="meth-grid">
          {METH_CATEGORIES.map((cat, i) => (
            <div className="meth-cat-card rev" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="meth-cat-head">
                <span className="meth-cat-num">{cat.num}</span>
                <span className="meth-cat-weight">{cat.weight} {METH_POINTS_LABEL}</span>
              </div>
              <h3 className="meth-cat-title">{cat.title}</h3>
              <p className="meth-cat-desc">{cat.indicators}</p>
            </div>
          ))}
        </div>

        {/* Tiers */}
        <div className="meth-tiers-wrap rev" style={{ transitionDelay: '.40s' }}>
          <div className="meth-tiers-title">{METH_TIERS_TITLE}</div>
          <div className="meth-tiers">
            {METH_TIERS.map((tier, i) => {
              // Split description into Diplomatic and Business components if possible
              const parts = tier.desc.split('. ');
              return (
                <div className={`meth-tier ${tier.color}`} key={i}>
                  <div className="meth-tier-level">{tier.level}</div>
                  <div className="meth-tier-range">{tier.range}</div>
                  <div className="meth-tier-status-wrap">
                    {parts.map((p, j) => (
                      <div className={`meth-tier-status-item ${j === 0 ? 'diplomatic' : 'business'}`} key={j}>
                        {p}{p.endsWith('.') ? '' : '.'}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
