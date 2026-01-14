import { defineConfig } from 'vitepress'
import site from './site.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: site.title,
  description: site.description,
  lastUpdated: site.lastUpdated,
  head: site.head,

  themeConfig: {
    siteTitle: site.theme.siteTitle,
    logo: site.theme.logo,

    lastUpdated: {
      text: 'Last updated',
      formatOptions: { dateStyle: 'medium' }
    },

    search: { provider: 'local' },
    nav: site.theme.nav,
    sidebar: site.theme.sidebar,
    socialLinks: site.theme.socialLinks
  }
})
