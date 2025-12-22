export interface WebProject {
  title: string;
  url: string;
  tools: string;
  summary: string;
}

export const webProjects: WebProject[] = [
  {
    title: 'kristinepemberton.com',
    url: 'https://kristinepemberton.com',
    tools: 'React 19, Next.js 16',
    summary:
      'You are here! This is my personal portfolio site and testing ground for new technologies and ideas.',
  },
  {
    title: 'Skamania Native Plants',
    url: 'https://skamanianativeplants.com',
    tools: 'Shopify Liquid, JavaScript, CSS',
    summary:
      "My backyard native plant nursery. I opted for a fully-managed service to handle the UI, inventory, payments, and shipping so that I can spend more time with the plants and less on configuration. I customize the theme where needed using Shopify's Liquid template language, JavaScript, and CSS.",
  },
];
