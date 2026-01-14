import { defineConfig } from 'vitepress'
import site from './site.json'
import { withSidebar  } from 'vitepress-sidebar';

const vitePressOptions = {
  // VitePress's options here...
  // https://vitepress.dev/reference/site-config
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
    socialLinks: site.theme.socialLinks,    
  }
}

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  // https://vitepress-sidebar.cdget.com/advanced-usage/
  documentRootPath: '/docs',
  collapsed: false,
  capitalizeFirst: true
}

export default defineConfig(
  withSidebar(
    vitePressOptions, 
    vitePressSidebarOptions
  )
)