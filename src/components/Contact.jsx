import SectionEyebrow from './SectionEyebrow';
import { useContactData } from '../data/contact';
import './Contact.css';

export default function Contact() {
  const { CONTACT_EYEBROW, CONTACT_HEADING, CONTACT_HEADING_EM, CONTACT_INTRO, CONTACT_CARDS, CONTACT_DISCLAIMER_STRONG, CONTACT_DISCLAIMER } = useContactData();
  return (
    <section id="contact" className="sw">
      <div className="cn">
        <div className="cl">
          <div className="ct rev">
            <SectionEyebrow text={CONTACT_EYEBROW} />
            <h2 className="h2">{CONTACT_HEADING} <em>{CONTACT_HEADING_EM}</em></h2>
            <p className="bd" style={{ marginBottom: '40px' }}>{CONTACT_INTRO}</p>
          </div>

          <div className="ccx rev" style={{ transitionDelay: '.15s' }}>
            {CONTACT_CARDS.map((c, i) => (
              <div className="cc" key={i}>
                <div className="cc-body">
                  <span className="cc-org">{c.org}</span>
                  <h3 className="cc-title">{c.title}</h3>
                  <p className="cc-role">{c.role}</p>
                </div>
                <a href={`mailto:${c.email}`} className="cc-email-link" title={c.email}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="cd-wrap rev" style={{ transitionDelay: '.3s' }}>
          <div className="cd">
            <p><strong>{CONTACT_DISCLAIMER_STRONG}</strong> {CONTACT_DISCLAIMER}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
