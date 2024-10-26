import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import { zh_CN } from './configs/zh_CN'
import { head , socialLinks } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: './.vitepress/dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-Hans',
      ...zh_CN
    },
  },

  head,

  lastUpdated: true,
  cleanUrls: true,

  // 站点地图
  sitemap: {
    hostname: 'https://brokoon.college/',
  },

  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    },
    // 组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
          return htmlResult;
      }
    },
  },


  /* 主题配置 */
  themeConfig: {
    i18nRouting: true,
    logo: {
      light: '/light-icon.png',
      dark: '/dark-icon.png',
      alt: 'Logo'
    },
    socialLinks,
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})