// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Simple Studio',
  tagline: 'Majestic documentation for powerful Minecraft plugins',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-site-url.com',
  baseUrl: '/',

  organizationName: 'simple-studio', // your GitHub username/org
  projectName: 'simple-studio-docs', // your repo name

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,      // ❌ disable tutorial/docs system
        blog: false,      // ❌ remove blog
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Home',
      items: [
        {to: '/plugins', label: 'Plugins', position: 'left'},
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Simple Studio',
          items: [
            {label: 'Home', to: '/'},
            {label: 'Plugins', to: '/plugins'},
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/yourdiscord',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Simple Studio.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;