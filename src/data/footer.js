import { useLang } from '../context/LanguageContext';

const RU = {
  FOOTER_COPYRIGHT: '© 2026 G-Index Hub Kazakhstan',
  FOOTER_STATUS: 'Платформа в стадии разработки',
};

const EN = {
  FOOTER_COPYRIGHT: '© 2026 G-Index Hub Kazakhstan',
  FOOTER_STATUS: 'Platform under development',
};

export function useFooterData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
