import './SectionEyebrow.css';

export default function SectionEyebrow({ text, accent }) {
  return (
    <div className={`s-ey${accent ? ' s-ey--accent' : ''}`}>
      <div className="s-ey-line">
        <div className="s-ey-beam"></div>
      </div>
      <span className="s-ey-text">{text}</span>
    </div>
  );
}
