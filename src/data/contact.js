import { useLang } from '../context/LanguageContext';

const RU = {
  CONTACT_EYEBROW: 'Связь и сотрудничество',
  CONTACT_HEADING: 'Присоединяйтесь к',
  CONTACT_HEADING_EM: 'экосистеме',
  CONTACT_INTRO: 'Приглашаем инвесторов, корпорации и государственные органы к участию в развитии инфраструктуры G-Index Hub.',
  CONTACT_CARDS: [
    { org: 'Для Инвесторов', title: 'Verified Pipeline', role: 'Доступ к верифицированным проектам, снижение рисков и ESG-импакт.', email: 'invest@g-index.kz', delay: '.1s' },
    { org: 'Для Корпораций', title: 'Trusted Suppliers', role: 'Прозрачные цепочки поставок и соответствие международным стандартам.', email: 'corp@g-index.kz', delay: '.2s' },
  ],
  CONTACT_DISCLAIMER_STRONG: 'Статус проекта.',
  CONTACT_DISCLAIMER: 'Платформа G-Index Hub Kazakhstan находится в стадии активной разработки. Официальный запуск пилотного проекта запланирован на 2026 год.',
};

const EN = {
  CONTACT_EYEBROW: 'Communication & Cooperation',
  CONTACT_HEADING: 'Join the',
  CONTACT_HEADING_EM: 'Ecosystem',
  CONTACT_INTRO: 'We invite investors, corporations, and government authorities to participate in the development of G-Index Hub infrastructure.',
  CONTACT_CARDS: [
    { org: 'For Investors',   title: 'Verified Pipeline', role: 'Access to verified projects, risk reduction and ESG impact.', email: 'invest@g-index.kz', delay: '.1s' },
    { org: 'For Corporations',title: 'Trusted Suppliers', role: 'Transparent supply chains and compliance with international standards.', email: 'corp@g-index.kz', delay: '.2s' },
  ],
  CONTACT_DISCLAIMER_STRONG: 'Project Status.',
  CONTACT_DISCLAIMER: 'The G-Index Hub Kazakhstan platform is in active development. Official pilot project launch is planned for 2026.',
};

export function useContactData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
