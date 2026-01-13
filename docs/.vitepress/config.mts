import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "El Estado Real de Florabís",
  description: "A sovereign state in the Imperial Federation on the CivMC Minecraft server.",
  lastUpdated: true,

  head: [
    ['meta', { property: 'og:title', content: 'Florabis' }],
    ['meta', { property: 'og:description', content: 'A sovereign state in the Imperial Federation on the CivMC Minecraft server.' }],
    ['meta', { property: 'og:image', content: 'https://florabis.github.io/media/FloraFlag_1200x630.png' }],
    ['meta', { property: 'og:url', content: 'https://florabis.github.io/' }],
    ['meta', { property: 'og:type', content: 'website' }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Florabis' }],
    ['meta', { name: 'twitter:description', content: 'A sovereign state in the Imperial Federation on the CivMC Minecraft server.' }],
    ['meta', { name: 'twitter:image', content: 'https://florabis.github.io/media/FloraFlag_1200x630.png' }],
  ],


  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "Florabís",
    logo: "media/FloraFlag.svg",

    lastUpdated: {
      text: "Last updated",
      formatOptions: {
        dateStyle: 'medium'
      } as Intl.DateTimeFormatOptions
    },

    search: {
      provider: "local"
    },

    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Constitution', link: '/constitution' },
      { text: 'Laws', link: '/laws' }
    ],

    sidebar: {
      "/guide/": [
        {
          text: 'Guide',
          items: [
            { text: 'Overview', link: '/guide' },
            { text: 'Leadership', link: '/guide/leadership' },
            { text: 'Citizen Tiers', link: '/guide/tiers' },
            { text: 'Server Plugins', link: '/guide/plugins' },
            { text: 'Recommended Mods', link: '/guide/mods' },
            { text: 'Additional Resources', link: '/guide/resources' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/7Uu8hBsX2q' },
      { icon: 'github', link: 'https://github.com/Florabis/florabis.github.io' }
    ]
  }
})
