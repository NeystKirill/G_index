import { useLang } from '../context/LanguageContext';

const RU = {
  ABOUT_EYEBROW: 'Миссия и цели',
  ABOUT_HEADING: 'Прозрачная и устойчивая',
  ABOUT_HEADING_EM: 'бизнес-среда',
  ABOUT_PARAGRAPHS: [
    'G-Index Hub — это институциональная платформа для оценки и мониторинга бизнеса, созданная для развития женского предпринимательства, инклюзивных цепочек поставок и устойчивого экономического роста в Центральной Азии и странах СВМДА.',
    'Наша миссия — создание прозрачной, измеряемой и устойчивой бизнес-среды через единые стандарты оценки, снижение рисков и расширение доступа к капиталу и цепочкам поставок.',
    'Платформа является цифровой инфраструктурой для верификации и управления микроэкономическими процессами, обеспечивая доверие и исполнение на всех этапах.',
  ],
  ABOUT_QUOTE:
    '«G-Index Hub — это не программа грантов, а системная инфраструктура для исправления рыночных провалов через данные и верификацию»',
  ABOUT_STATS: [
    { value: '2026', label: 'Год запуска',           mod: 'gd', animate: true },
    { value: 'AIFC', label: 'Юрисдикция',             mod: 'in' },
    { value: '500M+', label: 'Инвест-возможности',    mod: 'gd' },
    { value: '95%',  label: 'Успех исполнения',        mod: 'b'  },
  ],
  ABOUT_STATS_PANEL_LABEL: 'Миссия в цифрах',
};

const EN = {
  ABOUT_EYEBROW: 'Mission & Goals',
  ABOUT_HEADING: 'Transparent and Sustainable',
  ABOUT_HEADING_EM: 'Business Environment',
  ABOUT_PARAGRAPHS: [
    'G-Index Hub is an institutional business assessment and monitoring platform created to develop women\'s entrepreneurship, inclusive supply chains and sustainable economic growth in Central Asia and CICA member states.',
    'Our mission is to create a transparent, measurable and sustainable business environment through unified assessment standards, risk reduction and expanded access to capital and supply chains.',
    'The platform serves as digital infrastructure for the verification and management of microeconomic processes, ensuring trust and execution at every stage.',
  ],
  ABOUT_QUOTE:
    '"G-Index Hub is not a grants program, but a systemic infrastructure for correcting market failures through data and verification"',
  ABOUT_STATS: [
    { value: '2026', label: 'Launch Year',              mod: 'gd', animate: true },
    { value: 'AIFC', label: 'Jurisdiction',              mod: 'in' },
    { value: '500M+', label: 'Investment Opportunities', mod: 'gd' },
    { value: '95%',  label: 'Execution Success',         mod: 'b'  },
  ],
  ABOUT_STATS_PANEL_LABEL: 'Mission in Numbers',
};

export function useAboutData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
