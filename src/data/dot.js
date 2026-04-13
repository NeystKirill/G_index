import { useLang } from '../context/LanguageContext';

const RU = {
  DOT_EYEBROW: 'Ключевое отличие',
  DOT_HEADING: 'DOT — Execution',
  DOT_HEADING_EM: 'Layer',
  DOT_FORMULA: 'DOT = Capital Gate + Execution Engine',
  DOT_PRINCIPLE: 'Финансирование осуществляется только при подтверждённом исполнении.',
  DOT_BODY: 'DOT (Digital Operator of Trade) — операционный слой G-Index Hub, обеспечивающий контроль исполнения контрактов и управление раскрытием капитала на основе подтверждённых событий. DOT является Trust Engine всей системы.',
  DOT_FLOW: [
    { num: '01', tag: 'Contract Registered', title: 'Регистрация контракта',  desc: 'Верифицированный контракт зарегистрирован в системе DOT.' },
    { num: '02', tag: 'Milestone Defined',   title: 'Определение KPI',        desc: 'Определены ключевые показатели и этапы исполнения.' },
    { num: '03', tag: 'Execution Event',     title: 'Событие поставки',       desc: 'Фактически происходит событие поставки или выполнения обязательств.' },
    { num: '04', tag: 'Evidence Captured',   title: 'Захват доказательств',   desc: 'Система захватывает цифровые доказательства исполнения в реальном времени.' },
    { num: '05', tag: 'Verification',        title: 'Верификация',            desc: 'Автоматическая и/или независимая верификация собранных данных.' },
    { num: '06', tag: 'DOT Decision',        title: 'Решение DOT',            desc: 'Движок принятия решений анализирует данные по всем критериям.' },
    { num: '07', tag: 'Capital Release',     title: 'Раскрытие капитала',     desc: 'Финансирование разрешается и перечисляется через SPV (AIFC).' },
  ],
  DOT_COMPARE: [
    { traditional: 'ESG-отчёты и декларации',     dot: 'Execution-based ESG (подтверждённые данные)' },
    { traditional: 'Декларативные политики',       dot: 'Реальные контракты и факты поставки' },
    { traditional: 'Аудит постфактум',             dot: 'Контроль в реальном времени через DOT' },
    { traditional: 'Залоги и история компании',    dot: 'Верифицированный контракт + история исполнения' },
  ],
  DOT_CRITERIA: [
    'Статус milestones',
    'Данные DPP (Digital Product Passport)',
    'Соответствие ESG / G-Index',
    'Санкционный скрининг (OFAC, EU, UN)',
    'Подтверждение факта исполнения',
  ],
};

const EN = {
  DOT_EYEBROW: 'Key Differentiator',
  DOT_HEADING: 'DOT — Execution',
  DOT_HEADING_EM: 'Layer',
  DOT_FORMULA: 'DOT = Capital Gate + Execution Engine',
  DOT_PRINCIPLE: 'Financing is executed only upon confirmed delivery.',
  DOT_BODY: 'DOT (Digital Operator of Trade) — the operational layer of G-Index Hub, ensuring contract execution control and capital release management based on confirmed events. DOT is the Trust Engine of the entire system.',
  DOT_FLOW: [
    { num: '01', tag: 'Contract Registered', title: 'Contract Registration', desc: 'A verified contract is registered in the DOT system.' },
    { num: '02', tag: 'Milestone Defined',   title: 'KPI Definition',        desc: 'Key performance indicators and execution milestones are defined.' },
    { num: '03', tag: 'Execution Event',     title: 'Delivery Event',        desc: 'An actual delivery or obligation fulfillment event occurs.' },
    { num: '04', tag: 'Evidence Captured',   title: 'Evidence Capture',      desc: 'The system captures digital proof of execution in real time.' },
    { num: '05', tag: 'Verification',        title: 'Verification',          desc: 'Automatic and/or independent verification of collected data.' },
    { num: '06', tag: 'DOT Decision',        title: 'DOT Decision',          desc: 'The decision engine analyzes data against all criteria.' },
    { num: '07', tag: 'Capital Release',     title: 'Capital Release',       desc: 'Financing is authorized and transferred through SPV (AIFC).' },
  ],
  DOT_COMPARE: [
    { traditional: 'ESG reports and declarations',   dot: 'Execution-based ESG (confirmed data)' },
    { traditional: 'Declarative policies',           dot: 'Real contracts and delivery facts' },
    { traditional: 'Post-factum audit',              dot: 'Real-time monitoring through DOT' },
    { traditional: 'Collateral and company history', dot: 'Verified contract + execution track record' },
  ],
  DOT_CRITERIA: [
    'Milestone status',
    'DPP (Digital Product Passport) data',
    'ESG / G-Index compliance',
    'Sanctions screening (OFAC, EU, UN)',
    'Confirmed execution evidence',
  ],
};

export function useDotData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
