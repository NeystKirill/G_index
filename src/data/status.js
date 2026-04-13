import { useLang } from '../context/LanguageContext';

const RU = {
  STATUS_EYEBROW: 'Дорожная карта',
  STATUS_HEADING: 'Этапы реализации',
  STATUS_HEADING_EM: '2026–2030',
  STATUS_BADGE: 'Pilot Phase',
  STATUS_YEAR: 2026,
  STATUS_YEAR_START: 2024,
  STATUS_NOTE: 'Запуск пилотного проекта запланирован на 2026 год с последующим национальным и региональным масштабированием.',
  ROADMAP_ITEMS: [
    { num: '01', phase: 'Pilot (2026)',       title: 'Пилотный запуск',             desc: 'Отбор пула МСП и запуск целевого финансирования. Отработка механизмов DOT и верификации.' },
    { num: '02', phase: 'Phase 2 (2027–2028)',title: 'Национальное масштабирование', desc: 'Интеграция всех крупных корпораций Казахстана и расширение пула МСП.' },
    { num: '03', phase: 'Phase 3 (2029–2030)',title: 'Региональная экспансия',       desc: 'Выход на рынки Центральной Азии и стран СВМДА как единый стандарт оценки.' },
  ],
  STATUS_KPI: [
    { label: 'Execution Rate', value: '≥95%' },
    { label: 'Default Rate',   value: '<1%'  },
    { label: 'Funding Speed',  value: '≤5 days' },
  ],
};

const EN = {
  STATUS_EYEBROW: 'Roadmap',
  STATUS_HEADING: 'Implementation Stages',
  STATUS_HEADING_EM: '2026–2030',
  STATUS_BADGE: 'Pilot Phase',
  STATUS_YEAR: 2026,
  STATUS_YEAR_START: 2024,
  STATUS_NOTE: 'The pilot project launch is planned for 2026, with subsequent national and regional scaling.',
  ROADMAP_ITEMS: [
    { num: '01', phase: 'Pilot (2026)',       title: 'Pilot Launch',       desc: 'Selection of an SME pool and launch of targeted financing. Testing DOT mechanisms and verification.' },
    { num: '02', phase: 'Phase 2 (2027–2028)',title: 'National Scaling',   desc: 'Integration of all major Kazakhstan corporations and expansion of the SME pool.' },
    { num: '03', phase: 'Phase 3 (2029–2030)',title: 'Regional Expansion', desc: 'Entry into Central Asian and CICA markets as a unified assessment standard.' },
  ],
  STATUS_KPI: [
    { label: 'Execution Rate', value: '≥95%' },
    { label: 'Default Rate',   value: '<1%'  },
    { label: 'Funding Speed',  value: '≤5 days' },
  ],
};

export function useStatusData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
