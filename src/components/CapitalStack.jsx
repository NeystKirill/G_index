import SectionEyebrow from './SectionEyebrow';
import { useCapitalStackData } from '../data/capitalstack';
import './CapitalStack.css';

export default function CapitalStack() {
  const { CS_EYEBROW, CS_HEADING, CS_HEADING_EM, CS_BODY, CS_LEVELS } = useCapitalStackData();
  return (
    <section id="capital-stack" className="sw sw-alt">
      <div className="cn">
        <div className="cs-layout">
          <div className="cs-head rev">
            <SectionEyebrow text={CS_EYEBROW} />
            <h2 className="h2">{CS_HEADING} <em>{CS_HEADING_EM}</em></h2>
            <div className="bd"><p>{CS_BODY}</p></div>
          </div>

          <div className="cs-stack-container rev" style={{ transitionDelay: '.15s' }}>
            <div className="cs-stack-bg"></div>
            {CS_LEVELS.map((level, i) => (
              <div className={`cs-level-row ${level.color}`} key={i}>
                <div className="cs-level-line"></div>
                <div className="cs-level-full-card glass-card">
                  <div className="cs-level-meta">
                    <span className="cs-level-tier">{level.tier}</span>
                    <h3 className="cs-level-sources">{level.sources}</h3>
                  </div>
                  <div className="cs-level-info">
                    <p className="cs-level-role">{level.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
