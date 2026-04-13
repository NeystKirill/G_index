import './SectionDivider.css';

export default function SectionDivider({ num, label }) {
  return (
    <div className="sdi-wrap">
      <div className="sdi">
        <span className="sdn">{num}</span>
        <div className="sdll"></div>
        <img src="/kz_arnament.png" className="sdorn" alt="" aria-hidden="true" />
        <div className="sdlr"></div>
        <span className="sdlbl">{label}</span>
      </div>
    </div>
  );
}
