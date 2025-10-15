import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

// Dil tespiti için yardımcı fonksiyon
export function getNavigationData(lang: 'en' | 'tr' = 'en') {
  if (lang === 'tr') {
    return {
      headerData: headerDataTr,
      footerData: footerDataTr,
    };
  }
  return {
    headerData: headerDataEn,
    footerData: footerDataEn,
  };
}

// İngilizce Header Data
export const headerDataEn = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Portfolio',
      href: getPermalink('/portfolio'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      text: 'Get a Quote',
      href: getPermalink('/getaquote'),
      target: '_self',
    },
  ],
};

// Türkçe Header Data
export const headerDataTr = {
  links: [
    {
      text: 'Ana Sayfa',
      href: getPermalink('/tr'),
    },
    {
      text: 'Hakkımızda',
      href: getPermalink('/tr/hakkimizda'),
    },
    {
      text: 'Hizmetler',
      href: getPermalink('/tr/hizmetler'),
    },
    {
      text: 'Portfolyo',
      href: getPermalink('/tr/portfolyo'),
    },
    {
      text: 'Blog',
      href: getPermalink('/tr/blog'),
    },
    {
      text: 'İletişim',
      href: getPermalink('/tr/iletisim'),
    },
  ],
  actions: [
    {
      text: 'Teklif Al',
      href: getPermalink('/tr/teklif-al'),
      target: '_self',
    },
  ],
};

// İngilizce Footer Data
export const footerDataEn = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Shopify Development', href: '/services' },
        { text: 'Theme Development', href: '/services' },
        { text: 'Speed Optimization', href: '/services' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://miora.com.tr/"> MIORA</a> · All rights reserved.
  `,
};

// Türkçe Footer Data
export const footerDataTr = {
  links: [
    {
      title: 'Şirket',
      links: [
        { text: 'Hakkımızda', href: '/tr/hakkimizda' },
        { text: 'Blog', href: '/tr/blog' },
        { text: 'İletişim', href: '/tr/iletisim' },
      ],
    },
    {
      title: 'Hizmetler',
      links: [
        { text: 'Shopify Geliştirme', href: '/tr/hizmetler' },
        { text: 'Tema Geliştirme', href: '/tr/hizmetler' },
        { text: 'Hız Optimizasyonu', href: '/tr/hizmetler' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Şartlar', href: getPermalink('/tr/sartlar') },
    { text: 'Gizlilik Politikası', href: getPermalink('/tr/gizlilik') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <a class="text-blue-600 underline dark:text-muted" href="https://miora.com.tr/"> MIORA</a> tarafından yapılmıştır · Tüm hakları saklıdır.
  `,
};

// Varsayılan export (geriye uyumluluk için)
export const headerData = headerDataEn;
export const footerData = footerDataEn;