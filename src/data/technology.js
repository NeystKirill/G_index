import { useLang } from '../context/LanguageContext';

const RU = {
  TECHNOLOGY_EYEBROW: 'Платформенные модули',
  TECHNOLOGY_HEADING: 'Архитектура',
  TECHNOLOGY_HEADING_EM: 'решений',
  TECHNOLOGY_NODES: [
    { num: '01', iconType: 'verify', title: 'G-Index Module', desc: 'Система верификации и скоринга на основе данных eGov, налоговых и банковских систем.', arrow: true },
    { num: '02', iconType: 'ai',     title: 'DOT Execution',  desc: 'Digital Operator of Trade — контроль исполнения контрактов и управление финансовыми потоками.', arrow: true },
    { num: '03', iconType: 'map',    title: 'DPP Platform',   desc: 'Цифровой паспорт продукта и закупочная среда для интеграции в цепочки поставок.', arrow: false },
  ],
  TECHNOLOGY_FOOTNOTE: 'Технологическая инфраструктура G-Index Hub позволяет в реальном времени отслеживать микроэкономические процессы и обеспечивать целевое использование капитала.',
  TECHNOLOGY_FOOTNOTE_STRONG: 'G-Index Hub Infrastructure',
};

const EN = {
  TECHNOLOGY_EYEBROW: 'Platform Modules',
  TECHNOLOGY_HEADING: 'Solution',
  TECHNOLOGY_HEADING_EM: 'Architecture',
  TECHNOLOGY_NODES: [
    { num: '01', iconType: 'verify', title: 'G-Index Module', desc: 'Verification and scoring system based on eGov, tax, and banking data.', arrow: true },
    { num: '02', iconType: 'ai',     title: 'DOT Execution',  desc: 'Digital Operator of Trade — contract execution control and financial flow management.', arrow: true },
    { num: '03', iconType: 'map',    title: 'DPP Platform',   desc: 'Digital Product Passport and procurement environment for supply chain integration.', arrow: false },
  ],
  TECHNOLOGY_FOOTNOTE: 'G-Index Hub\'s technological infrastructure enables real-time tracking of microeconomic processes and ensures targeted use of capital.',
  TECHNOLOGY_FOOTNOTE_STRONG: 'G-Index Hub Infrastructure',
};

export function useTechnologyData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
