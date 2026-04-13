import SectionEyebrow from './SectionEyebrow';
import { useDotData } from '../data/dot';
import './DOTSection.css';

export default function DOTSection() {
  const { DOT_EYEBROW, DOT_HEADING, DOT_HEADING_EM, DOT_PRINCIPLE, DOT_FLOW, DOT_BODY } = useDotData();
  return (
    <section id="dot" className="sw sw-alt">
      <div className="cn">
        <div className="dot-layout">
          <div className="dot-left rev">
            <SectionEyebrow text={DOT_EYEBROW} />
            <h2 className="h2">{DOT_HEADING} <em>{DOT_HEADING_EM}</em></h2>
            <p className="bd" style={{ marginBottom: '40px' }}>{DOT_BODY}</p>
            
            <div className="dot-principle-card rev">
              <div className="dot-principle-glow"></div>
              <div className="dot-principle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="dot-principle-inner">
                <span className="dot-principle-ey">Core Logic</span>
                <p className="dot-principle-text">{DOT_PRINCIPLE}</p>
              </div>
            </div>
          </div>

          <div className="dot-right rev" style={{ transitionDelay: '.15s' }}>
            <div className="dot-chain-wrap">
              <div className="dot-chain-line"></div>
              {DOT_FLOW.map((f, i) => (
                <div className="dot-flow-item glass-card" key={i}>
                  <div className="dot-flow-marker">
                    <span className="dot-flow-num">{f.num}</span>
                  </div>
                  <div className="dot-flow-content">
                    <div className="dot-flow-tag">{f.tag}</div>
                    <h4 className="dot-flow-title">{f.title}</h4>
                    <p className="dot-flow-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
