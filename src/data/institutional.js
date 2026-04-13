import { useLang } from '../context/LanguageContext';

const RU = {
  INSTITUTIONAL_EYEBROW: 'Правовая среда и поддержка',
  INSTITUTIONAL_HEADING: 'Юрисдикция и',
  INSTITUTIONAL_HEADING_EM: 'поддержка',
  INSTITUTIONAL_BODY:
    'G-Index Hub оперирует в юрисдикции Международного финансового центра «Астана» (AIFC), обеспечивая высший уровень защиты прав инвесторов и соблюдение международных стандартов.',
  INSTITUTIONAL_CARDS: [
    { type: 'Юрисдикция · AIFC',       name: 'Английское общее право',        desc: 'Международный арбитраж, независимый суд и прозрачные SPV-структуры для управления капиталом.', mod: 'bl' },
    { type: 'Государственная поддержка',name: 'Нацкомиссия при Президенте РК', desc: 'Организационная и политическая поддержка на уровне Главы Государства для масштабирования проекта.', mod: '' },
    { type: 'Глобальный партнёр',       name: 'GBWC Council',                  desc: 'Интеграция в международное инвестиционное сообщество и координация работы с DFIs.', mod: 'in2' },
  ],
};

const EN = {
  INSTITUTIONAL_EYEBROW: 'Legal Environment & Support',
  INSTITUTIONAL_HEADING: 'Jurisdiction &',
  INSTITUTIONAL_HEADING_EM: 'Support',
  INSTITUTIONAL_BODY:
    'G-Index Hub operates under the jurisdiction of the Astana International Financial Centre (AIFC), providing the highest level of investor rights protection and compliance with international standards.',
  INSTITUTIONAL_CARDS: [
    { type: 'Jurisdiction · AIFC',  name: 'English Common Law',                         desc: 'International arbitration, an independent court, and transparent SPV structures for capital management.', mod: 'bl' },
    { type: 'Government Support',   name: 'National Commission under the President RK', desc: 'Organizational and political support at the Head of State level for project scaling.', mod: '' },
    { type: 'Global Partner',       name: 'GBWC Council',                               desc: 'Integration into the international investment community and coordination with DFIs.', mod: 'in2' },
  ],
};

export function useInstitutionalData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
