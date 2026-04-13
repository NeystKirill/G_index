import { useLang } from '../context/LanguageContext';

const RU = {
  CS_EYEBROW: 'Инвестиционная структура',
  CS_HEADING: 'SPV + Capital',
  CS_HEADING_EM: 'Stack',
  CS_BODY: 'Платформа привлекает капитал через прозрачную четырёхуровневую структуру под юрисдикцией AIFC. Каждый уровень защищает следующий, создавая оптимальный профиль риска и доходности.',
  CS_PRINCIPLE: 'Инвесторы → SPV (AIFC) → Контракты → Исполнение → Подтверждение → Выплаты',
  CS_LEVELS: [
    { tier: 'FIRST LOSS', sources: 'We-Fi, гранты, техническая помощь',   role: 'Покрытие первых потерь — снижение риска для старших траншей',               color: 'cs-first',   width: 55 },
    { tier: 'MEZZANINE',  sources: 'IFC, IsDB, ADB',                       role: 'Промежуточное финансирование — гибридные инструменты',                       color: 'cs-mezz',    width: 70 },
    { tier: 'SENIOR',     sources: 'EBRD, World Bank, AIIB',               role: 'Основной объём финансирования с гарантиями МФО',                             color: 'cs-senior',  width: 85 },
    { tier: 'PRIVATE',    sources: 'Институциональные инвесторы',          role: 'Масштабирование — частный капитал при подтверждённом track record',          color: 'cs-private', width: 100 },
  ],
  CS_AIFC: [
    { label: 'Английское право',       desc: 'Международно признанная правовая база для инвесторов' },
    { label: 'AIFC Court',             desc: 'Независимая судебная система, нейтральное разрешение споров' },
    { label: 'Защита инвесторов',      desc: 'Гарантии возврата капитала и защиты прав' },
    { label: 'Налоговые преференции',  desc: 'Привлекательность для международного капитала' },
  ],
};

const EN = {
  CS_EYEBROW: 'Investment Structure',
  CS_HEADING: 'SPV + Capital',
  CS_HEADING_EM: 'Stack',
  CS_BODY: 'The platform raises capital through a transparent four-tier structure under AIFC jurisdiction. Each level protects the next, creating an optimal risk-return profile.',
  CS_PRINCIPLE: 'Investors → SPV (AIFC) → Contracts → Execution → Confirmation → Payments',
  CS_LEVELS: [
    { tier: 'FIRST LOSS', sources: 'We-Fi, grants, technical assistance', role: 'First-loss coverage — risk reduction for senior tranches',               color: 'cs-first',   width: 55 },
    { tier: 'MEZZANINE',  sources: 'IFC, IsDB, ADB',                      role: 'Intermediate financing — hybrid instruments',                           color: 'cs-mezz',    width: 70 },
    { tier: 'SENIOR',     sources: 'EBRD, World Bank, AIIB',              role: 'Core financing volume with MFI guarantees',                             color: 'cs-senior',  width: 85 },
    { tier: 'PRIVATE',    sources: 'Institutional investors',             role: 'Scaling — private capital upon confirmed track record',                 color: 'cs-private', width: 100 },
  ],
  CS_AIFC: [
    { label: 'English Law',         desc: 'Internationally recognized legal framework for investors' },
    { label: 'AIFC Court',          desc: 'Independent judicial system, neutral dispute resolution' },
    { label: 'Investor Protection', desc: 'Capital return guarantees and rights protection' },
    { label: 'Tax Benefits',        desc: 'Attractive conditions for international capital' },
  ],
};

export function useCapitalStackData() {
  const { lang } = useLang();
  return lang === 'en' ? EN : RU;
}
