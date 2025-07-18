
// https://vitepress.dev/reference/site-config
// export default defineConfig({
//   title: "My Awesome Project",
//   description: "A VitePress Site",
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [
//       { text: 'Home', link: '/' },
//       { text: 'Examples', link: '/markdown-examples' }
//     ],

//     sidebar: [
//       {
//         text: 'Examples',
//         items: [
//           { text: 'Markdown Examples', link: '/markdown-examples' },
//           { text: 'Runtime API Examples', link: '/api-examples' }
//         ]
//       }
//     ],

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//     ]
//   }
// })

// import { defineTeekConfig } from "vitepress-theme-teek/config";

// // Teek 主题配置
// const teekConfig = defineTeekConfig({});

// // VitePress 配置
// export default defineConfig({
//   extends: teekConfig,
//   // ...
// });


// .vitepress/config.mts
import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekConfig = defineTeekConfig({});

// VitePress 配置
export default defineConfig({
  extends: teekConfig,
  // ...
});
