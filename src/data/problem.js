import { useLang } from '../context/LanguageContext';

const RU = {
  PROBLEM_EYEBROW: 'Системный разрыв',
  PROBLEM_HEADING: 'Барьер включённости',
  PROBLEM_HEADING_EM: 'МСП',
  PROBLEM_LEAD: 'В Казахстане насчитывается более 180 000 МСП, которые формируют 46% ВВП страны. Вместе с тем менее 5% из них интегрированы в корпоративные цепочки поставок.',
  PROBLEM_QUOTE: '70–90% МСП исключены не из-за низкого качества продукции, а из-за отсутствия системы верификации.',
  PROBLEM_BARRIERS_TITLE: 'Двойной барьер',
  PROBLEM_FUNNEL_TITLE: 'Воронка исключения',
  PROBLEM_STATS: [
    { value: 180000, display: '180 000', label: 'МСП в Казахстане', suffix: '' },
    { value: 46,     display: '46%',     label: 'доля МСП в ВВП',   suffix: '%' },
    { value: 5,      display: '<5%',     label: 'интегрировано в цепочки поставок', suffix: '%', lt: true },
    { value: 41,     display: '41 п.п.', label: 'разрыв включённости', suffix: '' },
  ],
  PROBLEM_BARRIERS: [
    {
      icon: 'verify',
      title: 'Барьер верификации',
      desc: 'Корпорации не доверяют неизвестным поставщикам без независимого подтверждения. Каждая компания проводит собственный аудит — дорого, медленно, несистемно.',
    },
    {
      icon: 'skills',
      title: 'Барьер компетентности',
      desc: 'МСП не располагают ресурсами для прохождения сложных квалификационных процедур и подготовки документации международного уровня.',
    },
  ],
  PROBLEM_FUNNEL: [
    { label: 'Все зарегистрированные МСП',   value: '180 000', pct: 100 },
    { label: 'Знают о возможностях',          value: '~50 000', pct: 28 },
    { label: 'Подают заявки',                 value: '~10 000', pct: 12 },
    { label: 'Проходят первичный отбор',      value: '~5 000',  pct: 6  },
    { label: 'Попадают в цепочки поставок',   value: '<5 000',  pct: 3  },
  ],
};

const EN = {
  PROBLEM_EYEBROW: 'Systemic Gap',
  PROBLEM_HEADING: 'Inclusion Barrier for',
  PROBLEM_HEADING_EM: 'SMEs',
  PROBLEM_LEAD: 'Kazakhstan has more than 180,000 SMEs that form 46% of the country\'s GDP. Yet fewer than 5% of them are integrated into corporate supply chains.',
  PROBLEM_QUOTE: '70–90% of SMEs are excluded not because of low product quality, but due to the absence of a verification system.',
  PROBLEM_BARRIERS_TITLE: 'Double Barrier',
  PROBLEM_FUNNEL_TITLE: 'Exclusion Funnel',
  PROBLEM_STATS: [
    { value: 180000, display: '180,000', label: 'SMEs in Kazakhstan',              suffix: '' },
    { value: 46,     display: '46%',     label: 'SME share in GDP',                suffix: '%' },
    { value: 5,      display: '<5%',     label: 'integrated into supply chains',   suffix: '%', lt: true },
    { value: 41,     display: '41 p.p.', label: 'inclusion gap',                   suffix: '' },
  ],
  PROBLEM_BARRIERS: [
    {
      icon: 'verify',
      title: 'Verification Barrier',
      desc: 'Corporations do not trust unknown suppliers without independent confirmation. Each company conducts its own audit — expensive, slow, unsystematic.',
    },
    {
      icon: 'skills',
      title: 'Competency Barrier',
      desc: 'SMEs lack the resources to navigate complex qualification procedures and prepare international-level documentation.',
    },
  ],
  PROBLEM_FUNNEL: [
    { label: 'All registered SMEs',        value: '180,000', pct: 100 },
    { label: 'Aware of opportunities',     value: '~50,000', pct: 28  },
    { label: 'Submit applications',        value: '~10,000', pct: 12  },
    { label: 'Pass initial screening',     value: '~5,000',  pct: 6   },
    { label: 'Included in supply chains',  value: '<5,000',  pct: 3   },
  ],
};

export function useProblemData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
