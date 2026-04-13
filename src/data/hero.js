import { useLang } from '../context/LanguageContext';

const RU = {
  HERO_OVERLINE: 'Республика Казахстан · Цифровая экономика',
  HERO_DESCRIPTION:
    'Платформа оценки и мониторинга бизнеса, направленная на развитие предпринимательства, повышение прозрачности и расширение доступа к финансированию. Ориентировочный запуск — 2026 год.',
  HERO_STRIP_ITEMS: [
    'Оценка бизнеса',
    'Цифровая экономика',
    'Прозрачность',
    'ИИ-технологии',
    'Международное партнёрство',
  ],
  HERO_BTN_PRIMARY: 'Изучить платформу',
  HERO_BTN_SECONDARY: 'Связаться',
  HERO_VIDEO_LABEL: 'Смотреть ролик',
  HERO_VIDEO_SUB: 'Официальные мероприятия G-Index',
};

const EN = {
  HERO_OVERLINE: 'Republic of Kazakhstan · Digital Economy',
  HERO_DESCRIPTION:
    'A business assessment and monitoring platform aimed at developing entrepreneurship, enhancing transparency and expanding access to financing. Estimated launch — 2026.',
  HERO_STRIP_ITEMS: [
    'Business Assessment',
    'Digital Economy',
    'Transparency',
    'AI Technologies',
    'International Partnership',
  ],
  HERO_BTN_PRIMARY: 'Explore Platform',
  HERO_BTN_SECONDARY: 'Contact Us',
  HERO_VIDEO_LABEL: 'Watch Video',
  HERO_VIDEO_SUB: 'Official G-Index Events',
};

export function useHeroData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
