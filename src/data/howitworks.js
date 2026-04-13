import { useLang } from '../context/LanguageContext';

const RU = {
  HOW_EYEBROW: 'Процесс работы',
  HOW_HEADING: 'Операционный цикл',
  HOW_HEADING_EM: '7 шагов',
  HOW_LEAD: 'G-Index Hub обеспечивает бесшовную интеграцию бизнеса — от государственной политики до финального финансирования исполнения контракта.',
  HOW_LOGIC: 'Данные → Оценка → Верификация → Контракт → Исполнение → Финансирование',
  HOW_STEPS: [
    { num: '01', tag: 'Alignment',   title: 'Интеграция политик',    desc: 'Alignment с национальными стратегиями Казахстана, стран ЦА и СВМДА.' },
    { num: '02', tag: 'Capital',     title: 'Мобилизация капитала',   desc: 'Привлечение финансирования через DFIs (We-Fi, EBRD, ADB, IFC).' },
    { num: '03', tag: 'AIFC',        title: 'Структурирование',       desc: 'Использование юрисдикции AIFC и SPV для защиты инвесторов.' },
    { num: '04', tag: 'Demand',      title: 'Создание спроса',        desc: 'Формирование пула заказов от Самрук-Қазына и международных корпораций.' },
    { num: '05', tag: 'Assessment',  title: 'Оценка G-Index',         desc: 'Самооценка и подача цифровых доказательств по 7 категориям.' },
    { num: '06', tag: 'Verification',title: 'Верификация',            desc: 'Многоуровневая проверка данных (Pre-screening, G-Index Scoring).' },
    { num: '07', tag: 'Execution',   title: 'Исполнение и оплата',    desc: 'Раскрытие капитала через DOT при подтвержденном выполнении работ.' },
  ],
  HOW_FUNCTIONS: [
    { n: '1', title: 'Интеграция в цепочки поставок', desc: 'Формирование пула верифицированных поставщиков' },
    { n: '2', title: 'Верификация и оценка',          desc: 'Проверка данных через государственные и корпоративные источники' },
    { n: '3', title: 'Обучение Supplier Academy',     desc: 'Подготовка к работе с корпорациями по стандартам ESG' },
    { n: '4', title: 'Исполнение контрактов',         desc: 'Мониторинг поставок на всех этапах цикла' },
    { n: '5', title: 'Доступ к финансированию',       desc: 'Финансирование под подтверждённое исполнение, без залогов' },
    { n: '6', title: 'Структурирование через SPV',    desc: 'Привлечение капитала DFIs и частных инвесторов через AIFC' },
  ],
};

const EN = {
  HOW_EYEBROW: 'How It Works',
  HOW_HEADING: 'Operational Cycle',
  HOW_HEADING_EM: '7 Steps',
  HOW_LEAD: 'G-Index Hub ensures seamless business integration — from national policy to final contract execution financing.',
  HOW_LOGIC: 'Data → Assessment → Verification → Contract → Execution → Financing',
  HOW_STEPS: [
    { num: '01', tag: 'Alignment',   title: 'Policy Integration',    desc: 'Alignment with Kazakhstan\'s national strategies, Central Asian countries, and CICA.' },
    { num: '02', tag: 'Capital',     title: 'Capital Mobilization',  desc: 'Attracting financing through DFIs (We-Fi, EBRD, ADB, IFC).' },
    { num: '03', tag: 'AIFC',        title: 'Structuring',           desc: 'Using AIFC jurisdiction and SPV for investor protection.' },
    { num: '04', tag: 'Demand',      title: 'Demand Creation',       desc: 'Forming an order pool from Samruk-Kazyna and international corporations.' },
    { num: '05', tag: 'Assessment',  title: 'G-Index Assessment',    desc: 'Self-assessment and submission of digital evidence across 7 categories.' },
    { num: '06', tag: 'Verification',title: 'Verification',          desc: 'Multi-level data verification (Pre-screening, G-Index Scoring).' },
    { num: '07', tag: 'Execution',   title: 'Execution & Payment',   desc: 'Capital release through DOT upon confirmed work completion.' },
  ],
  HOW_FUNCTIONS: [
    { n: '1', title: 'Supply Chain Integration',  desc: 'Building a pool of verified suppliers' },
    { n: '2', title: 'Verification & Assessment', desc: 'Data verification through government and corporate sources' },
    { n: '3', title: 'Supplier Academy Training', desc: 'Preparing businesses to work with corporations to ESG standards' },
    { n: '4', title: 'Contract Execution',        desc: 'Delivery monitoring at every stage of the cycle' },
    { n: '5', title: 'Access to Financing',       desc: 'Financing against confirmed execution, without collateral' },
    { n: '6', title: 'SPV Structuring',           desc: 'Attracting DFI and private investor capital through AIFC' },
  ],
};

export function useHowData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
