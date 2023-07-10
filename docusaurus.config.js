// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learning Micro',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'athoney', // Usually your GitHub org/user name.
  projectName: 'learning-micro', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/athoney/learning-micro/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Learning Micro',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Acknowledgements',
            items: [
              {
                label: 'Adapted From TACoS IX',
                href: 'https://community.pages.ssc.dev/wycs/tacos/2023/cs-website/docs/day1/',
              },
              {
                label: 'Makecode activities',
                href: 'https://microbit.org/projects/make-it-code-it/',
              },
              {
                label: 'CEDAR Lab',
                href: 'https://uwcedar.github.io/digiflyer#slide=1',
              },
            ],
          },
          {
            title: 'Makecode Resources',
            items: [
              {
                label: 'Blocks Documentation',
                href: 'https://makecode.microbit.org/blocks',
              },
              {
                label: 'Makecode FAQ',
                href: 'https://makecode.microbit.org/faq',
              },
              {
                label: 'Makecode Docs',
                href: 'https://makecode.microbit.org/docs',
              },
            ],
          },
          {
            title: 'More Micro:bit Material',
            items: [
              {
                label: 'Intro CS w/ Micro:bit',
                href: 'https://makecode.microbit.org/v0/--docs#book:/courses/csintro/SUMMARY',
              },
              {
                label: 'Python User Guide',
                href: 'https://microbit.org/get-started/user-guide/python/',
              },
              {
                label: 'Javscript Tutorial',
                href: 'https://makecode.microbit.org/courses/blocks-to-javascript/hello-javascript',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Learning Micro, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
