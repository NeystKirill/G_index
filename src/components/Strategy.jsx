import SectionEyebrow from './SectionEyebrow';
import { useStrategyData } from '../data/strategy';
import './Strategy.css';

export default function Strategy() {
  const { STRATEGY_EYEBROW, STRATEGY_HEADING, STRATEGY_HEADING_EM, STRATEGY_PARAGRAPHS, STRATEGY_ITEMS } = useStrategyData();
  return (
    <section id="strategy" className="sw sw-alt">
      <div className="cn">
        <div className="sg">
          <div className="rev">
            <SectionEyebrow text={STRATEGY_EYEBROW} />
            <h2 className="h2">{STRATEGY_HEADING} <em>{STRATEGY_HEADING_EM}</em></h2>
            <div className="bd" style={{ marginTop: '14px' }}>
              {STRATEGY_PARAGRAPHS.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          <div className="si-list rev" style={{ transitionDelay: '.15s' }}>
            {STRATEGY_ITEMS.map((item, i) => (
              <div className="si" key={i}>
                <div className="si-num">{item.num}</div>
                <div>
                  <div className="si-title">{item.title}</div>
                  <p className="si-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
