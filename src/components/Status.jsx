import SectionEyebrow from './SectionEyebrow';
import { useStatusData } from '../data/status';
import './Status.css';

export default function Status() {
  const { STATUS_EYEBROW, STATUS_HEADING, STATUS_HEADING_EM, STATUS_BADGE, STATUS_NOTE, ROADMAP_ITEMS } = useStatusData();
  return (
    <section id="status" className="sw sw-alt">
      <div className="cn">
        <div className="rev">
          <SectionEyebrow text={STATUS_EYEBROW} />
          <h2 className="h2">{STATUS_HEADING} <em>{STATUS_HEADING_EM}</em></h2>
        </div>

        <div className="st">
          <div className="sc rev" style={{ transitionDelay: '.1s' }}>
            <div className="st-ey">{STATUS_EYEBROW}</div>
            <div className="st-year-wrap">
              <div className="st-year">2026</div>
              <div className="st-badge">{STATUS_BADGE}</div>
            </div>
            <p className="st-note">{STATUS_NOTE}</p>
          </div>

          <div className="rm rev" style={{ transitionDelay: '.2s' }}>
            {ROADMAP_ITEMS.map((r, i) => (
              <div className="ri" key={i}>
                <div className="rmk">
                  <div className="rdot"><div className="rdot-in"></div></div>
                  {i < ROADMAP_ITEMS.length - 1 && <div className="rline"></div>}
                </div>
                <div className="ric">
                  <span className="ric-ey">{r.phase} — {r.num}</span>
                  <div className="ric-title">{r.title}</div>
                  <p className="ric-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
