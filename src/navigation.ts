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