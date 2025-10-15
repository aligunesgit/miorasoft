import { defineMiddleware } from 'astro:middleware';
import { defaultLang } from './i18n/ui';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  
  // Zaten /tr ile başlıyorsa devam et
  if (url.pathname.startsWith('/tr/') || url.pathname === '/tr') {
    return next();
  }
  
  // Static dosyalar ve API endpoint'leri için middleware'i atla
  if (url.pathname.startsWith('/_astro') || 
      url.pathname.includes('.') || 
      url.pathname.startsWith('/assets') ||
      url.pathname.startsWith('/api')) {
    return next();
  }
  
  // Cookie kontrolü - kullanıcı daha önce dil seçmiş mi?
  const langCookie = context.cookies.get('preferred-lang');
  if (langCookie?.value === 'en') {
    // Kullanıcı İngilizce'yi tercih ediyor, yönlendirme yapma
    return next();
  }
  
  // Accept-Language header'dan dil tespiti
  const acceptLanguage = context.request.headers.get('accept-language');
  const browserLang = acceptLanguage?.split(',')[0].split('-')[0];
  
  // Cloudflare, Vercel veya diğer platformlardan ülke tespiti
  const country = context.request.headers.get('cf-ipcountry') || 
                  context.request.headers.get('x-vercel-ip-country') ||
                  context.request.headers.get('x-country');
  
  // Türkiye'den geliyorsa veya tarayıcı dili Türkçe ise
  const shouldRedirectToTurkish = (country === 'TR' || browserLang === 'tr') && !langCookie;
  
  // Ana sayfada veya İngilizce sayfalarda ise Türkçe'ye yönlendir
  if (shouldRedirectToTurkish && !url.pathname.startsWith('/tr')) {
    // Cookie'yi ayarla (30 gün)
    context.cookies.set('preferred-lang', 'tr', {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax',
      httpOnly: false
    });
    
    // Türkçe sayfaya yönlendir
    const newPath = url.pathname === '/' ? '/tr/' : `/tr${url.pathname}`;
    return context.redirect(newPath, 302);
  }
  
  return next();
});