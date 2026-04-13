import { useLang } from '../context/LanguageContext';

export const CAROUSEL_DURATION = 10000;

const RU = {
  CAROUSEL_DURATION,
  SLIDES: [
    { src: 'https://www.youtube-nocookie.com/embed/xhd7qbHu4Hk?rel=0&modestbranding=1&autoplay=1&mute=1', caption: 'Глобальный женский форум деловых женщин · Сессия 1', badge: 'Глобальный женский форум деловых женщин' },
    { src: 'https://www.youtube-nocookie.com/embed/I9FGhQemAFo?rel=0&modestbranding=1&autoplay=1&mute=1', caption: 'Глобальный женский форум деловых женщин · Сессия 2', badge: 'Глобальный женский форум деловых женщин' },
    { src: 'https://www.youtube-nocookie.com/embed/piwgOWSaLVM?rel=0&modestbranding=1&autoplay=1&mute=1', caption: 'Глобальный женский форум деловых женщин · Сессия 3', badge: 'Глобальный женский форум деловых женщин' },
  ],
  CAROUSEL_LABEL: 'Официальное мероприятие',
};

const EN = {
  CAROUSEL_DURATION,
  SLIDES: [
    { src: 'https://www.youtube-nocookie.com/embed/xhd7qbHu4Hk?rel=0&modestbranding=1&autoplay=1&mute=1', caption: 'Global Women\'s Business Forum · Session 1', badge: 'Global Women\'s Business Forum' },
    { src: 'https://www.youtube-nocookie.com/embed/I9FGhQemAFo?rel=0&modestbranding=1&autoplay=1&mute=1', caption: 'Global Women\'s Business Forum · Session 2', badge: 'Global Women\'s Business Forum' },
    { src: 'https://www.youtube-nocookie.com/embed/piwgOWSaLVM?rel=0&modestbranding=1&autoplay=1&mute=1', caption: 'Global Women\'s Business Forum · Session 3', badge: 'Global Women\'s Business Forum' },
  ],
  CAROUSEL_LABEL: 'Official Event',
};

export function useCarouselData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
