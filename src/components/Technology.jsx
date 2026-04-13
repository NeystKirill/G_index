import SectionEyebrow from './SectionEyebrow';
import { useTechnologyData } from '../data/technology';
import './Technology.css';

const AiIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="17" r="8" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="22" cy="17" r="3.5" fill="currentColor" opacity=".15"/>
    <line x1="22" y1="6" x2="22" y2="3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="22" y1="29" x2="22" y2="32" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="10" y1="17" x2="7" y2="17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="34" y1="17" x2="37" y2="17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <rect x="15" y="31" width="14" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
    <rect x="18" y="34" width="8" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
  </svg>
);

const MapIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 38C22 38 10 27 10 18C10 11.4 15.4 6 22 6C28.6 6 34 11.4 34 18C34 27 22 38 22 38Z" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity=".07"/>
    <circle cx="22" cy="18" r="4" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
);

const ICON_RENDERS = [
  <div className="tn-icon-sym" style={{color:'var(--gold2)'}}>KZ</div>,
  <div style={{color:'#1a4a8a',width:32,height:32}}><AiIcon /></div>,
  <div style={{color:'var(--gold2)',width:32,height:32}}><MapIcon /></div>,
];

export default function Technology() {
  const {
    TECHNOLOGY_EYEBROW, TECHNOLOGY_HEADING, TECHNOLOGY_HEADING_EM,
    TECHNOLOGY_NODES, TECHNOLOGY_FOOTNOTE, TECHNOLOGY_FOOTNOTE_STRONG,
  } = useTechnologyData();

  const footnoteParts = TECHNOLOGY_FOOTNOTE.split(TECHNOLOGY_FOOTNOTE_STRONG);

  return (
    <section id="technology" className="sw">
      <div className="cn">
        <div className="rev">
          <SectionEyebrow text={TECHNOLOGY_EYEBROW} />
          <h2 className="h2">{TECHNOLOGY_HEADING} <em>{TECHNOLOGY_HEADING_EM}</em></h2>
        </div>

        <div className="tg rev" style={{ transitionDelay: '.12s' }}>
          {TECHNOLOGY_NODES.map((n, i) => (
            <div className="tn" key={i}>
              <span className="tn-num">{n.num}</span>
              <div className="tn-icon">{ICON_RENDERS[i]}</div>
              <div className="tnt">{n.title}</div>
              <p className="tnd">{n.desc}</p>
              {n.arrow && <span className="tn-arrow">›</span>}
            </div>
          ))}
        </div>

        <div className="tf rev" style={{ transitionDelay: '.2s' }}>
          <p>{footnoteParts[0]}<strong>{TECHNOLOGY_FOOTNOTE_STRONG}</strong>{footnoteParts[1]}</p>
        </div>
      </div>
    </section>
  );
}
