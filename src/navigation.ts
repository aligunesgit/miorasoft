import About from './pages/about.astro';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Development',
      links: [
        {
          text: 'Shopify & Shopify Plus Development',
          href: getPermalink('/homes/shopifydevelopment'),
        },
        {
          text: 'Shopify Speed Optimization',
          href: getPermalink('/homes/speedoptimization'),
        },
        {
          text: 'Shopify Migration',
          href: getPermalink('/homes/shopifymigration'),
        },
        {
          text: 'Shopify Consulting',
          href: getPermalink('/homes/shopifyconsulting'),
        },
      ],
    },
    {
      text: 'AI Development',
      links: [
        {
          text: 'ChatGPT integration',
          href: getPermalink('/homes/chatgptintegration'),
        },
        {
          text: 'AI chatbot development',
          href: getPermalink('/homes/aichatbotdevelopment'),
        },
       
      ],
    },
    {
      text: 'Clients',
      links: [
        {
          text: 'Pharmacy & Supplement',
          href: getPermalink('/services'),
        },
        {
          text: 'Jewelry & Accessories',
          href: getPermalink('/jewelry'),
        },
        {
          text: 'Print on Demand',
          href: getPermalink('/printondemand'),
        },
        {
          text: 'Textile & Apparel',
          href: getPermalink('/textile'),
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
        { text: 'Shopify Development', href:getPermalink('/homes/shopifydevelopment') },
        { text: 'Shopify Speed Optimization', href:getPermalink('/homes/speedoptimization') },
        { text: 'Shopify Migration', href:getPermalink('/homes/shopifymigration') },
        { text: 'Our Development', href:getPermalink('/homes/ourthemes')},
        { text: 'Shopify Consulting', href:getPermalink('/homes/shopifyconsulting') },
        { text: 'AI Chatbot Development', href:getPermalink('/homes/aichatbotdevelopment') },
        { text: 'Shopify & ChatGPT Integraion', href:getPermalink('/homes/chatgptintegration') },
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
        { text: 'About', href:getPermalink('/about') },
        { text: 'Blog', href:getPermalink('/blog') },
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
  ],
  footNote: `
    <div class="text-sm">
      <p class="mb-1">30 N Gould St, STE R, Sheridan, Wyoming, 82801, United States</p>
      <p class="mb-2"><a href="mailto:hello@miorasoft.com" class="hover:underline">hello@miorasoft.com</a></p>
      <p>Made by MIORA @ 2025</p>
    </div>
  `,
};