import About from './pages/about.astro';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Shopify Development',
      links: [
        {
          text: 'Shopify Development',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Shopify Plus Development',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Shopify Speed Optimization',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Shopify Migration',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Shopify Consulting',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'AI Development',
      links: [
        {
          text: 'ChatGPT integration',
          href: getPermalink('/services'),
        },
        {
          text: 'AI chatbot development',
          href: getPermalink('/services'),
        },
       
      ],
    },
    {
      text: 'Case Studies',
      links: [
        {
          text: 'Pharmacy & Supplement',
          href: getPermalink('/services'),
        },
        {
          text: 'Jewelry & Accessories',
          href: getPermalink('/services'),
        },
        {
          text: 'Print on Demand',
          href: getPermalink('/services'),
        },
        {
          text: 'Textile & Apparel',
          href: getPermalink('/services'),
        },
        {
          text: 'Home & Living',
          href: getPermalink('/about'),
        },
        {
          text: 'Checmical & Industrial',
          href: getPermalink('/contact'),
        },
         {
          text: 'Leather & Luxury',
          href: getPermalink('/contact'),
        },
           {
          text: 'Other Categories',
          href: getPermalink('/contact'),
        },
       
      ],
    },
     {
      text: 'Our Shopify Themes',
      href: getBlogPermalink(),
    },
    
     {
      text: 'Blog',
          href: getBlogPermalink(),
    },
     {
      text: 'About',
       href: getPermalink('/about'),
    },
    
  ],
  actions: [{ text: 'GET A QUOTE', href:getPermalink('/getaquote'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Shopify Development', href: '#' },
        { text: 'Shopify Plus Development', href: '#' },
        { text: 'Shopify Speed Optimization', href: '#' },
        { text: 'Shopify Migration', href: '#' },
        { text: 'Shopify Theme Development', href: '#' },
        { text: 'Shopify Consulting', href: '#' },
        { text: 'AI Chatbot Development', href: '#' },
        { text: 'Shopify & ChatGPT Integraion', href: '#' },
      ],
    },
    {
      title: 'Our Shopify Themes',
      links: [
        { text: 'Themes', href: '#' },
        { text: 'Help Center', href: '#' },
        { text: 'Documentation', href: '#' },
        { text: 'Help Center', href: '#' },
      ],
    },
    {
      title: 'MIORA SOFT',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Collabrations', href: '#' },
        { text: 'Contact', href: '#' },
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
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by Ali GUNES @ 2025
  `,
};
