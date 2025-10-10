import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = path ? path : '/';
    return route;
  }

  const getRoute = path ? '/' + path : '/';
  return getRoute;
}

export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = pathname.match(/\/([a-z]{2})\//);
  return langCodeMatch ? langCodeMatch[1] : defaultLang;
}

export function translatePath(path: string, l: string) {
  const pathName = path.replaceAll('/', '');
  const hasTranslation = defaultLang !== l && translations[l] !== undefined && translations[l][pathName] !== undefined;
  const translatedPath = hasTranslation ? '/' + translations[l][pathName] : path;

  return !hasTranslation || l === defaultLang ? path : '/' + l + translatedPath;
}

// Optional: Path translations for different languages
const translations = {
  tr: {
    'about': 'hakkimizda',
    'services': 'hizmetler',
    'portfolio': 'portfolyo',
    'contact': 'iletisim',
    'blog': 'blog',
    'getaquote': 'teklif-al',
    'jewelry': 'mucevher',
    'printondemand': 'baski-talebi',
    'textile': 'tekstil',
  },
} as const;