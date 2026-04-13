import { useLang } from '../context/LanguageContext';

const RU = {
  NAV_LINKS: [
    { href: '#about',         label: 'Миссия' },
    { href: '#problem',       label: 'Проблема' },
    { href: '#how-it-works',  label: 'Процесс' },
    { href: '#dot',           label: 'DOT' },
    { href: '#methodology',   label: 'G-Index' },
    { href: '#capital-stack', label: 'Инвестиции' },
    { href: '#institutional', label: 'Юрисдикция' },
    { href: '#ecosystem',     label: 'Партнёры' },
    { href: '#strategy',      label: 'Стратегия' },
    { href: '#technology',    label: 'Архитектура' },
    { href: '#status',        label: 'Карта' },
    { href: '#contact',       label: 'Контакты' },
  ],
  NAV_BADGE: 'Разработка · 2026',
};

const EN = {
  NAV_LINKS: [
    { href: '#about',         label: 'Mission' },
    { href: '#problem',       label: 'Problem' },
    { href: '#how-it-works',  label: 'Process' },
    { href: '#dot',           label: 'DOT' },
    { href: '#methodology',   label: 'G-Index' },
    { href: '#capital-stack', label: 'Investment' },
    { href: '#institutional', label: 'Jurisdiction' },
    { href: '#ecosystem',     label: 'Partners' },
    { href: '#strategy',      label: 'Strategy' },
    { href: '#technology',    label: 'Architecture' },
    { href: '#status',        label: 'Roadmap' },
    { href: '#contact',       label: 'Contact' },
  ],
  NAV_BADGE: 'In Development · 2026',
};

export function useNavData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
