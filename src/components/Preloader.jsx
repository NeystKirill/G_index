import './Preloader.css';

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="pl-inner">
        <div className="pl-ring">
          <div className="pl-logo">
            <div className="pl-logo-circle">
              <img src="/g-index-logo.png" alt="G-Index" />
            </div>
          </div>
          <div className="pl-arc"></div>
          <div className="pl-ring-inner"></div>
          <div className="pl-orbit-dot"></div>
        </div>
        <div className="pl-wordmark">G<span>-</span>Index</div>
        <div className="pl-sub">Hub Kazakhstan</div>
        <div className="pl-divider">
          <div className="pl-div-line"></div>
          <div className="pl-div-dot"></div>
          <div className="pl-div-line"></div>
        </div>
        <div className="pl-bar-wrap">
          <div className="pl-bar"></div>
        </div>
      </div>
    </div>
  );
}
