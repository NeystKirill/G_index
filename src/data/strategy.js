import { useLang } from '../context/LanguageContext';

const RU = {
  STRATEGY_EYEBROW: 'Глобальная интеграция',
  STRATEGY_HEADING: 'G-NEXID и стратегическая',
  STRATEGY_HEADING_EM: 'роль',
  STRATEGY_PARAGRAPHS: [
    'G-Index Hub выступает операционным ядром для реализации политик G-NEXID, обеспечивая координацию и исполнение на национальном и региональном уровнях.',
    'Наша роль — трансформировать декларативные цели устойчивого развития в реальные, подтвержденные данными контракты и инвестиционные потоки.',
  ],
  STRATEGY_ITEMS: [
    { num: 'I',   title: 'G-NEXID Policy',    desc: 'Синхронизация с глобальными инициативами ЮНКТАД и банками развития (EXIM).' },
    { num: 'II',  title: 'Data Intelligence', desc: 'Сбор и верификация микроэкономических данных для принятия суверенных решений.' },
    { num: 'III', title: 'Execution Engine',  desc: 'Превращение стратегий в измеряемый экономический импакт через платформу.' },
  ],
};

const EN = {
  STRATEGY_EYEBROW: 'Global Integration',
  STRATEGY_HEADING: 'G-NEXID and Strategic',
  STRATEGY_HEADING_EM: 'Role',
  STRATEGY_PARAGRAPHS: [
    'G-Index Hub serves as the operational core for implementing G-NEXID policies, ensuring coordination and execution at national and regional levels.',
    'Our role is to transform declarative sustainable development goals into real, data-confirmed contracts and investment flows.',
  ],
  STRATEGY_ITEMS: [
    { num: 'I',   title: 'G-NEXID Policy',    desc: 'Synchronization with global UNCTAD initiatives and development banks (EXIM).' },
    { num: 'II',  title: 'Data Intelligence', desc: 'Collection and verification of microeconomic data for sovereign decision-making.' },
    { num: 'III', title: 'Execution Engine',  desc: 'Transforming strategies into measurable economic impact through the platform.' },
  ],
};

export function useStrategyData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
