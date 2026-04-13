import SectionEyebrow from './SectionEyebrow';
import { useInstitutionalData } from '../data/institutional';
import './Institutional.css';

export default function Institutional() {
  const { INSTITUTIONAL_EYEBROW, INSTITUTIONAL_HEADING, INSTITUTIONAL_HEADING_EM, INSTITUTIONAL_BODY, INSTITUTIONAL_CARDS } = useInstitutionalData();
  return (
    <section id="institutional" className="sw sw-alt">
      <div className="cn">
        <div className="il">
          <div className="rev">
            <SectionEyebrow text={INSTITUTIONAL_EYEBROW} />
            <h2 className="h2">{INSTITUTIONAL_HEADING} <em>{INSTITUTIONAL_HEADING_EM}</em></h2>
            <div className="bd"><p>{INSTITUTIONAL_BODY}</p></div>
          </div>
          <div className="ics rev" style={{ transitionDelay: '.14s' }}>
            {INSTITUTIONAL_CARDS.map((c, i) => (
              <div className={`ic${c.mod ? ' ' + c.mod : ''}`} key={i}>
                <span className="ict">{c.type}</span>
                <div className="icn">{c.name}</div>
                <p className="icd">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
