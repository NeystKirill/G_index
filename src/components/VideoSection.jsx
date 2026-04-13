import VideoCarousel from './VideoCarousel';
import { useLang } from '../context/LanguageContext';
import './VideoSection.css';

const TEXT = {
  ru: {
    eyebrow: 'Официальные мероприятия',
    title: 'G-Index Hub Kazakhstan',
    sub: 'Видеохроника · Официальные мероприятия платформы',
    quote: '«Прозрачность. Технологии. Доступ к капиталу»',
    year: 'Республика Казахстан · 2026',
  },
  en: {
    eyebrow: 'Official Events',
    title: 'G-Index Hub Kazakhstan',
    sub: 'Video Chronicle · Official Platform Events',
    quote: '"Transparency. Technology. Access to Capital"',
    year: 'Republic of Kazakhstan · 2026',
  },
};

export default function VideoSection() {
  const { lang } = useLang();
  const t = TEXT[lang];

  return (
    <section id="video" className="vs-wrap">
      <div className="vs-inner">

        {/* Eyebrow */}
        <div className="vs-head">
          <div className="vs-ey-line"><div className="vs-ey-beam"></div></div>
          <span className="vs-ey-text">{t.eyebrow}</span>
        </div>

        {/* Video player */}
        <div className="vs-carousel">
          <VideoCarousel />
        </div>

        {/* Decorative caption block */}
        <div className="vs-caption">
          <div className="vs-caption-left">
            <div className="vs-cap-ornament">
              <img src="/kz_arnament.png" alt="" aria-hidden="true" />
            </div>
            <div className="vs-cap-text">
              <div className="vs-cap-title">{t.title}</div>
              <div className="vs-cap-sub">{t.sub}</div>
            </div>
          </div>
          <div className="vs-caption-right">
            <span className="vs-cap-quote">{t.quote}</span>
            <span className="vs-cap-year">{t.year}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
