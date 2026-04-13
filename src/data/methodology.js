import { useLang } from '../context/LanguageContext';

const RU = {
  METH_EYEBROW: 'Методология',
  METH_HEADING: 'G-Index — 7 категорий,',
  METH_HEADING_EM: '100 баллов',
  METH_BODY: 'Гибридный региональный инструмент оценки, разработанный специально для Казахстана, стран Центральной Азии и СВМДА. Методология объединяет три компонента.',
  METH_COMPONENTS: [
    { label: '2X Criteria',           desc: 'Глобальный отраслевой стандарт 2X Challenge / 2X Global — основа для gender lens investing' },
    { label: 'Equileap Scorecard',    desc: 'Прозрачность корпоративных практик, pay equity, гендерные политики' },
    { label: 'Региональная адаптация',desc: 'Учёт контекста ЦА и СВМДА: равенство в образовании, отставание в экономическом участии' },
  ],
  METH_CATEGORIES: [
    { num: '01', title: 'Владение и предпринимательство',        weight: 15, indicators: '≥51% владения женщинами; женщина-основательница' },
    { num: '02', title: 'Лидерство и представительство',         weight: 20, indicators: '% женщин в Board / Senior Management (порог ≥30%)' },
    { num: '03', title: 'Занятость и качество рабочих мест',     weight: 20, indicators: 'Доля женщин в штате; gender pay gap transparency' },
    { num: '04', title: 'Цепочки поставок',                      weight: 10, indicators: '% женщин в supply chain; supplier diversity' },
    { num: '05', title: 'Продукты и услуги для женщин',          weight: 15, indicators: 'Доля продуктов/услуг, выгодных женщинам' },
    { num: '06', title: 'Прозрачность и подотчётность',          weight: 10, indicators: 'Публикация гендерных данных; UN WEPs signatory' },
    { num: '07', title: 'Региональные дополнения (ЦА + СВМДА)', weight: 10, indicators: 'Цифровая/финансовая инклюзия; gender & climate' },
  ],
  METH_POINTS_LABEL: 'баллов',
  METH_TIERS_TITLE: 'Уровни верификации (Tiers)',
  METH_TIERS: [
    { level: 'Committed', range: '≥40',   color: 'tier-base',     desc: 'Дипломатический статус: Аспирационное соответствие базовым нормам. Бизнес-статус: Допуск в воронку верифицированных поставщиков.' },
    { level: 'Bronze',    range: '40–59', color: 'tier-bronze',   desc: 'Дипломатический статус: Валидированное корпоративное управление. Бизнес-статус: Квалифицированный участник закупок национальных компаний.' },
    { level: 'Silver',    range: '60–74', color: 'tier-silver',   desc: 'Дипломатический статус: Стратегический партнер регионального развития. Бизнес-статус: Investment-Ready актив со средним уровнем финансового спроса.' },
    { level: 'Gold',      range: '75–89', color: 'tier-gold',     desc: 'Дипломатический статус: Региональный чемпион по стандартам ESG. Бизнес-статус: Приоритетный доступ к фондам DFI и контрактам А-класса.' },
    { level: 'Platinum',  range: '90+',   color: 'tier-platinum', desc: 'Дипломатический статус: Глобальный лидер (Standard Setter). Бизнес-статус: Высший инвестиционный класс (Bankable ESG Asset).' },
  ],
};

const EN = {
  METH_EYEBROW: 'Methodology',
  METH_HEADING: 'G-Index — 7 categories,',
  METH_HEADING_EM: '100 points',
  METH_BODY: 'A hybrid regional assessment tool developed specifically for Kazakhstan, Central Asian countries, and CICA. The methodology combines three components.',
  METH_COMPONENTS: [
    { label: '2X Criteria',          desc: 'Global industry standard 2X Challenge / 2X Global — foundation for gender lens investing' },
    { label: 'Equileap Scorecard',   desc: 'Corporate practice transparency, pay equity, gender policies' },
    { label: 'Regional Adaptation',  desc: 'Central Asian and CICA context: equality in education, gap in economic participation' },
  ],
  METH_CATEGORIES: [
    { num: '01', title: 'Ownership & Entrepreneurship',     weight: 15, indicators: '≥51% women ownership; female founder' },
    { num: '02', title: 'Leadership & Representation',      weight: 20, indicators: '% of women in Board / Senior Management (threshold ≥30%)' },
    { num: '03', title: 'Employment & Job Quality',         weight: 20, indicators: 'Female share in workforce; gender pay gap transparency' },
    { num: '04', title: 'Supply Chains',                    weight: 10, indicators: '% of women in supply chain; supplier diversity' },
    { num: '05', title: 'Products & Services for Women',    weight: 15, indicators: 'Share of products/services benefiting women' },
    { num: '06', title: 'Transparency & Accountability',    weight: 10, indicators: 'Gender data disclosure; UN WEPs signatory' },
    { num: '07', title: 'Regional Additions (CA + CICA)',   weight: 10, indicators: 'Digital/financial inclusion; gender & climate' },
  ],
  METH_POINTS_LABEL: 'pts',
  METH_TIERS_TITLE: 'Verification Tiers',
  METH_TIERS: [
    { level: 'Committed', range: '≥40',   color: 'tier-base',     desc: 'Diplomatic status: Aspirational compliance with basic norms. Business status: Entry into the verified supplier pipeline.' },
    { level: 'Bronze',    range: '40–59', color: 'tier-bronze',   desc: 'Diplomatic status: Validated corporate governance. Business status: Qualified participant in national company procurement.' },
    { level: 'Silver',    range: '60–74', color: 'tier-silver',   desc: 'Diplomatic status: Strategic regional development partner. Business status: Investment-Ready asset with medium financial demand.' },
    { level: 'Gold',      range: '75–89', color: 'tier-gold',     desc: 'Diplomatic status: Regional ESG standard champion. Business status: Priority access to DFI funds and Class-A contracts.' },
    { level: 'Platinum',  range: '90+',   color: 'tier-platinum', desc: 'Diplomatic status: Global Leader (Standard Setter). Business status: Highest investment grade (Bankable ESG Asset).' },
  ],
};

export function useMethData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
