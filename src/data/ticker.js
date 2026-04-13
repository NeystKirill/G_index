import { useLang } from '../context/LanguageContext';

const RU = {
  TICKER_ITEMS: [
    'G-Index Hub Kazakhstan',
    'Оценка бизнеса',
    'Цифровая экономика',
    'Запуск 2026',
    'Прозрачность',
    'Доступ к финансированию',
    'ИИ и данные',
    'Устойчивая бизнес-среда',
  ],
};

const EN = {
  TICKER_ITEMS: [
    'G-Index Hub Kazakhstan',
    'Business Assessment',
    'Digital Economy',
    'Launch 2026',
    'Transparency',
    'Access to Financing',
    'AI & Data',
    'Sustainable Business Environment',
  ],
};

export function useTickerData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
