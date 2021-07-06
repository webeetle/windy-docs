const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Windy",
  tagline: "A React UI Kit powered by Tailwind",
  url: "https://windy-docs.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/windy.svg",
  organizationName: "webeetle", // Usually your GitHub org/user name.
  projectName: "windy", // Usually your repo name.
  plugins: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    hideableSidebar: true,
    liveCodeBlock: {
      playgroundPosition: "top",
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    navbar: {
      hideOnScroll: true,
      title: "windy",
      logo: {
        alt: "Windy Logo",
        src: "img/windy.svg",
      },
      items: [
        {
          type: "doc",
          docId: "getting_started/start",
          position: "right",
          label: "Docs",
        },
        {
          href: "https://github.com/webeetle/windy",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      /*links: [
        {
          title: "Docs",
          items: [
            {
              label: "Installation",
              to: "/docs/start",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/webeetle/windy",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Showcase",
              href: "https://windy-showroom.vercel.app",
            },
          ],
        },
      ],*/
      copyright: `Copyright © ${new Date().getFullYear()} Webeetle`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/webeetle/windy-docs/edit/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
          //  "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
