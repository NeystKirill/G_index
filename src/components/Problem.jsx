import { useEffect, useRef, useState } from 'react';
import SectionEyebrow from './SectionEyebrow';
import { useProblemData } from '../data/problem';
import './Problem.css';

function AnimatedNumber({ value, display, lt }) {
  const [shown, setShown] = useState(lt ? display : '0');
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    if (lt) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting || animated.current) return;
      animated.current = true;
      let start = 0;
      const end = value;
      const duration = 1400;
      const step = end / (duration / 16);
      const tick = () => {
        start = Math.min(start + step, end);
        setShown(
          end >= 10000
            ? Math.round(start).toLocaleString('ru-RU')
            : end >= 100
            ? Math.round(start) + '%'
            : Math.round(start)
        );
        if (start < end) requestAnimationFrame(tick);
        else setShown(display);
      };
      requestAnimationFrame(tick);
      obs.disconnect();
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, display, lt]);

  return <span ref={ref} className="prob-stat-val">{shown}</span>;
}

export default function Problem() {
  const {
    PROBLEM_EYEBROW, PROBLEM_HEADING, PROBLEM_HEADING_EM,
    PROBLEM_LEAD, PROBLEM_QUOTE,
    PROBLEM_STATS, PROBLEM_BARRIERS, PROBLEM_FUNNEL,
    PROBLEM_BARRIERS_TITLE, PROBLEM_FUNNEL_TITLE,
  } = useProblemData();
  return (
    <section id="problem" className="sw sw-alt">
      <div className="cn">

        {/* Header */}
        <div className="prob-head rev">
          <SectionEyebrow text={PROBLEM_EYEBROW} accent />
          <h2 className="h2">{PROBLEM_HEADING} <em>{PROBLEM_HEADING_EM}</em></h2>
          <p className="prob-lead">{PROBLEM_LEAD}</p>
        </div>

        {/* Stats row */}
        <div className="prob-stats rev" style={{ transitionDelay: '.08s' }}>
          {PROBLEM_STATS.map((s, i) => (
            <div className="prob-stat" key={i}>
              <AnimatedNumber value={s.value} display={s.display} lt={s.lt} />
              <span className="prob-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Barriers + Funnel */}
        <div className="prob-body">
          <div className="prob-barriers rev" style={{ transitionDelay: '.12s' }}>
            <div className="prob-barriers-title">{PROBLEM_BARRIERS_TITLE}</div>
            {PROBLEM_BARRIERS.map((b, i) => (
              <div className="prob-barrier" key={i}>
                <div className="prob-barrier-icon">
                  {b.icon === 'verify'
                    ? <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    : <svg viewBox="0 0 24 24" fill="none"><path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/></svg>
                  }
                </div>
                <div>
                  <div className="prob-barrier-title">{b.title}</div>
                  <p className="prob-barrier-desc">{b.desc}</p>
                </div>
              </div>
            ))}

            <div className="fq" style={{ marginTop: '28px' }}>
              <p>{PROBLEM_QUOTE}</p>
            </div>
          </div>

          <div className="prob-funnel rev" style={{ transitionDelay: '.2s' }}>
            <div className="prob-funnel-title">{PROBLEM_FUNNEL_TITLE}</div>
            {PROBLEM_FUNNEL.map((f, i) => (
              <div className="prob-funnel-row" key={i}>
                <div className="prob-funnel-meta">
                  <span className="prob-funnel-label">{f.label}</span>
                  <span className="prob-funnel-val">{f.value}</span>
                </div>
                <div className="prob-funnel-bar-wrap">
                  <div
                    className="prob-funnel-bar"
                    style={{ '--pct': f.pct + '%', '--delay': (i * 0.1 + 0.3) + 's' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
