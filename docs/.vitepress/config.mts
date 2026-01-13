import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "El Estado Real de Florabís",
  description: "The official website for Florabis a state in the IF.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "Florabís",
    logo: "media/FloraFlag.svg",
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Constitution', link: '/constitution' },
      { text: 'Laws', link: '/laws' }
    ],

    sidebar: {},

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/7Uu8hBsX2q' },
      { icon: 'github', link: 'https://github.com/Florabis/florabis.github.io' }
    ]
  }
})
