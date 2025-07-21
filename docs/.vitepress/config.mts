
// https://vitepress.dev/reference/site-config
import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekConfig = defineTeekConfig({});
export default defineConfig({
  title: "My Blog",
  description: "个人博客",
  extends: teekConfig,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '例子1', link: '/markdown-examples' },
          { text: '例子2', link: '/api-examples' }
        ]
      },
       {
        text: 'Home',
        items: [
          { text: 'home', link: '/home' },
        ]
      }
    ],

    socialLinks: [
      { icon: '图标', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})




