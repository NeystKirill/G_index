import { useEffect, useState } from 'react';
import { useNavData } from '../data/navbar';
import { useLang } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const { NAV_LINKS, NAV_BADGE } = useNavData();
  const { lang, setLang } = useLang();
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observers = [];
    sections.forEach(sec => {
      const obs = new IntersectionObserver(es => {
        if (es[0].isIntersecting) setActiveSection(sec.id);
      }, { threshold: 0.35 });
      obs.observe(sec);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);
  const toggleLang = () => setLang(lang === 'ru' ? 'en' : 'ru');

  return (
    <nav className={`${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'm-open' : ''}`}>
      <div className="nv">
        <div className="nb">
          <img className="nli" src="/g-index-logo.png" alt="G-Index" />
          <div className="nbt">
            <span className="nbm"><span className="gi">G-Index</span></span>
            <span className="nbs">Hub Kazakhstan</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="nl">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} className={activeSection === l.href.slice(1) ? 'on' : ''}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nv-actions">
          <div className="nv-right">
            <div className="nbadge">
              <div className="dot"></div>
              {NAV_BADGE}
            </div>
            <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
              <span className={lang === 'ru' ? 'lt-active' : ''}>RU</span>
              <span className="lt-sep">|</span>
              <span className={lang === 'en' ? 'lt-active' : ''}>EN</span>
            </button>
          </div>

          <button
            className="hamb"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="hamb-line"></div>
            <div className="hamb-line"></div>
            <div className="hamb-line"></div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`m-drawer ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="m-drawer-inner">
          <div className="m-drawer-head">
            <div className="nb">
              <img className="nli" src="/g-index-logo.png" alt="G-Index" />
              <div className="nbt">
                <span className="nbm"><span className="gi">G-Index</span></span>
                <span className="nbs">Hub Kazakhstan</span>
              </div>
            </div>
          </div>
          <ul className="m-links">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={activeSection === l.href.slice(1) ? 'on' : ''}
                  onClick={closeMenu}
                >
                  <span className="m-num">{l.href.slice(1) === '' ? '00' : (NAV_LINKS.indexOf(l)).toString().padStart(2, '0')}</span>
                  <span className="m-lab">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="m-drawer-footer">
            <div className="nbadge">
              <div className="dot"></div>
              {NAV_BADGE}
            </div>
            <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
              <span className={lang === 'ru' ? 'lt-active' : ''}>RU</span>
              <span className="lt-sep">|</span>
              <span className={lang === 'en' ? 'lt-active' : ''}>EN</span>
            </button>
          </div>
        </div>
        <div className="m-overlay" onClick={closeMenu}></div>
      </div>
    </nav>
  );
}
