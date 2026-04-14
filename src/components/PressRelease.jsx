import { useLang } from '../context/LanguageContext';
import { usePressReleaseData } from '../data/pressRelease';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './PressRelease.css';

export default function PressRelease() {
  const { lang } = useLang();
  const data = usePressReleaseData(lang);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pr-page">
      <div className="pr-container">
        <header className="pr-header">
          <Link to="/" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            {data.BACK_TO_HOME}
          </Link>
          <span className="pr-date">{data.DATE}</span>
          <h1 className="pr-title">{data.TITLE}</h1>
        </header>

        <section className="pr-lead">
          {data.LEAD}
        </section>

        <section className="pr-gallery">
          <div className="pr-photo-placeholder large">
            <img src="/press_conference_wide.png" alt="CICA Conference Baku" />
          </div>
          <div className="pr-photo-placeholder">
            <img src="/press_council_meeting.png" alt="CICA Women's Council" />
          </div>
          <div className="pr-photo-placeholder">
            <img src="/press_group_photo.png" alt="Zhanna Baidasheva in Baku" />
          </div>
          <div className="pr-photo-placeholder">
            <img src="/press_speech.png" alt="Zhanna Baidasheva speaking" />
          </div>
          <div className="pr-photo-placeholder">
            <img src="/press_conference_wide.png" alt="Participants" style={{ objectPosition: 'center center' }} />
          </div>
        </section>

        <section className="pr-block">
          <h2 className="pr-block-title">{data.BLOCK2_TITLE}</h2>
          <div className="pr-text-wrapper">
            {data.BLOCK2_TEXT.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
