import SectionEyebrow from './SectionEyebrow';
import { useHowData } from '../data/howitworks';
import './HowItWorks.css';

export default function HowItWorks() {
  const { HOW_EYEBROW, HOW_HEADING, HOW_HEADING_EM, HOW_LEAD, HOW_STEPS } = useHowData();
  return (
    <section id="how-it-works" className="sw">
      <div className="cn">
        <div className="how-header rev">
          <SectionEyebrow text={HOW_EYEBROW} />
          <h2 className="h2">{HOW_HEADING} <em>{HOW_HEADING_EM}</em></h2>
          <p className="bd">{HOW_LEAD}</p>
        </div>

        <div className="how-list">
          {HOW_STEPS.map((step, i) => (
            <div className="how-item rev" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="how-item-left">
                <div className="how-num-wrap">
                  <span className="how-num">{step.num}</span>
                  <div className="how-line"></div>
                </div>
              </div>
              <div className="how-item-content glass-card">
                <div className="how-item-top">
                  <span className="how-tag">{step.tag}</span>
                  <h3 className="how-title">{step.title}</h3>
                </div>
                <p className="how-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
