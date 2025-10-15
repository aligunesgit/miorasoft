import { defineMiddleware } from 'astro:middleware';
import { defaultLang } from './i18n/ui';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  
  // Zaten /tr ile başlıyorsa devam et
  if (url.pathname.startsWith('/tr/') || url.pathname === '/tr') {
    return next();
  }
  
  // Static dosyalar ve özel path'ler için middleware'i atla
  if (
    url.pathname.startsWith('/_astro') || 
    url.pathname.startsWith('/assets') ||
    url.pathname.startsWith('/api') ||
    url.pathname.includes('.xml') ||
    url.pathname.includes('.txt') ||
    url.pathname.includes('.')
  ) {
    return next();
  }
  
  // Cookie kontrolü - kullanıcı daha önce dil seçmiş mi?
  const langCookie = context.cookies.get('preferred-lang');
  if (langCookie?.value === 'en') {
    return next();
  }
  
  // SADECE SSR modunda headers'a erişelim
  let acceptLanguage: string | null = null;
  let country: string | null = null;
  
  try {
    // Headers'a sadece runtime'da erişmeye çalış
    if (import.meta.env.SSR) {
      acceptLanguage = context.request.headers.get('accept-language');
      country = context.request.headers.get('cf-ipcountry') || 
                context.request.headers.get('x-vercel-ip-country') ||
                context.request.headers.get('x-country');
    }
  } catch (e) {
    // Build time'da headers yok, devam et
  }
  
  const browserLang = acceptLanguage?.split(',')[0].split('-')[0];
  const shouldRedirectToTurkish = (country === 'TR' || browserLang === 'tr') && !langCookie;
  
  if (shouldRedirectToTurkish && !url.pathname.startsWith('/tr')) {
    context.cookies.set('preferred-lang', 'tr', {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax',
      httpOnly: false,
      secure: import.meta.env.PROD
    });
    
    const newPath = url.pathname === '/' ? '/tr/' : `/tr${url.pathname}`;
    return context.redirect(newPath, 302);
  }
  
  return next();
});