import { useHeroData } from '../data/hero';
import './Hero.css';

export default function Hero() {
  const {
    HERO_BTN_PRIMARY, HERO_BTN_SECONDARY,
    HERO_VIDEO_LABEL, HERO_VIDEO_SUB,
  } = useHeroData();
  return (
    <div className="hw">

 

      {/* ── Main split: left=logo, right=title ── */}
      <div className="h-split">

        {/* Left — circular logo */}
        <div className="h-left">
          <div className="h-logo-wrap">
            {/* Corner marks */}
            <span className="h-corner h-corner--tl">GI</span>
            <span className="h-corner h-corner--br">KZ</span>

            {/* Gradient spinning rings */}
            <div className="h-ring-track h-ring-track--1">
              <div className="h-ring-beam"></div>
            </div>
            <div className="h-ring-track h-ring-track--2">
              <div className="h-ring-beam h-ring-beam--2"></div>
            </div>

            {/* Circular logo container */}
            <div className="h-logo-circle">
              <img src="/g-index-logo.png" alt="G-Index" className="h-logo" />
            </div>
          </div>
        </div>

        {/* Right — stacked wordmark */}
        <div className="h-right">
          <div className="h-wordmark">
            <div className="ht-g">G-Index</div>

            <div className="ht-sub">
              <div className="ht-hub">Hub Kazakhstan</div>
            </div>

            {/* Divider AFTER Hub Kazakhstan */}
            <div className="ht-divider">
              <div className="ht-div-line"></div>
              <img src="/kz_arnament.png" className="ht-div-orn" alt="" aria-hidden="true" />
              <div className="ht-div-line"></div>
            </div>
          </div>

          <div className="hbtns">
            <a href="#about" className="bp">{HERO_BTN_PRIMARY}</a>
            <a href="#contact" className="bo">{HERO_BTN_SECONDARY}</a>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA strip → video ── */}
      <a href="#video" className="h-video-cta">
        <div className="h-vcta-play">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="6,3 17,10 6,17" fill="currentColor"/>
          </svg>
        </div>
        <div className="h-vcta-info">
          <span className="h-vcta-label">{HERO_VIDEO_LABEL}</span>
          <span className="h-vcta-sub">{HERO_VIDEO_SUB}</span>
        </div>
        <div className="h-vcta-arrow">
          <svg viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2 L8 20 M2 14 L8 20 L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </a>

    </div>
  );
}
