import { useTickerData } from '../data/ticker';
import './Ticker.css';

export default function Ticker() {
  const { TICKER_ITEMS } = useTickerData();
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="tck">
      <div className="ttr">
        {doubled.map((t, i) => (
          <span className="ti" key={i}>
            <span className="ti-orn" aria-hidden="true"></span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
