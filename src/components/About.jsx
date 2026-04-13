import SectionEyebrow from './SectionEyebrow';
import { useEffect, useRef } from 'react';
import { useAboutData } from '../data/about';
import './About.css';

export default function About() {
  const {
    ABOUT_EYEBROW, ABOUT_HEADING, ABOUT_HEADING_EM,
    ABOUT_PARAGRAPHS, ABOUT_QUOTE,
    ABOUT_STATS, ABOUT_STATS_PANEL_LABEL,
  } = useAboutData();
  const yearRef = useRef(null);
  const animStat = ABOUT_STATS.find(s => s.animate);

  useEffect(() => {
    const el = yearRef.current;
    if (!el || !animStat) return;
    const obs = new IntersectionObserver(es => {
      if (!es[0].isIntersecting) return;
      let c = 1985;
      const f = () => {
        c += 2;
        el.textContent = Math.min(c, animStat.value);
        if (c < Number(animStat.value)) requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
      obs.disconnect();
    }, { threshold: 0.6 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="sw">
      <div className="cn">
        <div className="ag">
          <div className="rev">
            <SectionEyebrow text={ABOUT_EYEBROW} />
            <h2 className="h2">{ABOUT_HEADING} <em>{ABOUT_HEADING_EM}</em></h2>
            <div className="bd">
              {ABOUT_PARAGRAPHS.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="fq"><p>{ABOUT_QUOTE}</p></div>
          </div>

          <div className="rev" style={{ transitionDelay: '.15s' }}>
            <div className="stp">
              <div className="sth">
                <div className="sthbar"></div>
                <span className="sthtxt">{ABOUT_STATS_PANEL_LABEL}</span>
              </div>
              <div className="stg">
                {ABOUT_STATS.map((s, i) => (
                  <div className="stc" key={i}>
                    <div className={`stv ${s.mod}`} ref={s.animate ? yearRef : null}>
                      {s.value}
                    </div>
                    <div className="stk">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
