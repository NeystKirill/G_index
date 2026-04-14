import { useEffect, useState } from 'react';
import './styles/globals.css';
import useScrollReveal from './hooks/useScrollReveal';
import { LanguageProvider, useLang } from './context/LanguageContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import SectionDivider from './components/SectionDivider';
import About from './components/About';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import DOTSection from './components/DOTSection';
import Methodology from './components/Methodology';
import CapitalStack from './components/CapitalStack';
import Institutional from './components/Institutional';
import Ecosystem from './components/Ecosystem';
import Strategy from './components/Strategy';
import Technology from './components/Technology';
import Status from './components/Status';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import DeepBackground from './components/DeepBackground';

const SECTION_LABELS = {
  ru: [
    { num: '01', label: 'Миссия и цели' },
    { num: '02', label: 'Системная проблема' },
    { num: '03', label: 'Операционный цикл' },
    { num: '04', label: 'Execution Layer' },
    { num: '05', label: 'Методология G-Index' },
    { num: '06', label: 'Инвестиционная структура' },
    { num: '07', label: 'Юрисдикция и поддержка' },
    { num: '08', label: 'Экосистема партнёров' },
    { num: '09', label: 'Стратегическая роль' },
    { num: '10', label: 'Технологические модули' },
    { num: '11', label: 'Дорожная карта' },
    { num: '12', label: 'Контакты' },
  ],
  en: [
    { num: '01', label: 'Mission & Goals' },
    { num: '02', label: 'Systemic Problem' },
    { num: '03', label: 'Operational Cycle' },
    { num: '04', label: 'Execution Layer' },
    { num: '05', label: 'G-Index Methodology' },
    { num: '06', label: 'Investment Structure' },
    { num: '07', label: 'Jurisdiction & Support' },
    { num: '08', label: 'Partner Ecosystem' },
    { num: '09', label: 'Strategic Role' },
    { num: '10', label: 'Technology Modules' },
    { num: '11', label: 'Roadmap' },
    { num: '12', label: 'Contacts' },
  ],
};

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PressRelease from './components/PressRelease';

function Home({ labels }) {
  return (
    <>
      <Hero />
      <VideoSection />

      <SectionDivider num={labels[0].num}  label={labels[0].label} />
      <About />

      <SectionDivider num={labels[1].num}  label={labels[1].label} />
      <Problem />

      <SectionDivider num={labels[2].num}  label={labels[2].label} />
      <HowItWorks />

      <SectionDivider num={labels[3].num}  label={labels[3].label} />
      <DOTSection />

      <SectionDivider num={labels[4].num}  label={labels[4].label} />
      <Methodology />

      <SectionDivider num={labels[5].num}  label={labels[5].label} />
      <CapitalStack />

      <SectionDivider num={labels[6].num}  label={labels[6].label} />
      <Institutional />

      <SectionDivider num={labels[7].num}  label={labels[7].label} />
      <Ecosystem />

      <SectionDivider num={labels[8].num}  label={labels[8].label} />
      <Strategy />

      <SectionDivider num={labels[9].num}  label={labels[9].label} />
      <Technology />

      <SectionDivider num={labels[10].num} label={labels[10].label} />
      <Status />

      <SectionDivider num={labels[11].num} label={labels[11].label} />
      <Contact />
    </>
  );
}

function AppInner() {
  useScrollReveal();
  const [loading, setLoading] = useState(true);
  const { lang } = useLang();
  const labels = SECTION_LABELS[lang];

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <DeepBackground />
      {loading && <Preloader />}
      <div className="gold-rule"></div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home labels={labels} />} />
        <Route path="/press-release" element={<PressRelease />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppInner />
      </Router>
    </LanguageProvider>
  );
}
