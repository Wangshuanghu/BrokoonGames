import { h, watch } from 'vue'
import { useData, EnhanceAppContext, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { createMediumZoomProvider } from './composables/useMediumZoom'
import MLayout from './components/MLayout.vue'
import MNavLinks from './components/MNavLinks.vue'
import './styles/index.scss'
import vitepressMusic from 'vitepress-plugin-music'
import 'vitepress-plugin-music/lib/css/index.css'
import confetti from "./components/confetti.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import giscusTalk from 'vitepress-plugin-comment-with-giscus'

let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,

  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
        
    // giscus配置
    giscusTalk({
      repo: 'Wangshuanghu/BrokoonGames',
      repoId: 'R_kgDOMpZeUg',
      category: 'Announcements',
      categoryId: 'DIC_kwDOMpZeUs4CjHM3',
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      locales: {
        'zh-Hans': 'zh-CN',
        'en_US': 'en'
      },
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );

  },

  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(MLayout, props)
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    createMediumZoomProvider(app, router)
    app.component('confetti' , confetti)
    app.provide('DEV', process.env.NODE_ENV === 'development')
    vitepressMusic(playlist)
    app.component('MNavLinks', MNavLinks)
    app.component('ArticleMetadata' , ArticleMetadata)

    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () =>
          updateHomePageStyle(
            /* /vitepress-nav-template/ 是为了兼容 GitHub Pages */
            location.pathname === '/' || location.pathname === '/vitepress-nav-template/',
          ),
        { immediate: true },
      )
    }
  },
}

if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome')) {
    document.documentElement.classList.add('browser-chrome')
  } else if (browser.includes('firefox')) {
    document.documentElement.classList.add('browser-firefox')
  } else if (browser.includes('safari')) {
    document.documentElement.classList.add('browser-safari')
  }
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}

const playlist = [
  {
    name: 'Start-Home',
    author: 'Endcat-终猫',
    file: '/music/Start-Home.mp3',
  },
  {
    name: 'Shine Line',
    author: 'Hancai',
    file: '/music/Shine line (2024 remaster）.mp3',
  },
  {
    name: 'Sun Never Sets(EndCat vs RUFUKI)',
    author: 'EndCat vs RUFUKI',
    file: '/music/Sun Never Sets(EndCat vs RUFUKI).wav',
  },
  {
    name: 'Sun Never Sets(RUFUKI .ver)',
    author: 'RUFUKI',
    file: '/music/Sun Never Sets(RUFUKI .ver).wav',
  },
  {
    name: 'UNE',
    author: 'Hancai',
    file: '/music/une.mp3',
  },
]
