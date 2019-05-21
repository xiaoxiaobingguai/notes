const utils = require('./utils')

module.exports = {
  title: '弋朝夕',
  description: '不积跬步无以至千里，不积小流无以成江海。',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '库',
        link: '/repository/'
      },
      {
        text: '网站',
        link: '/website/'
      },
      {
        text: '文章',
        link: '/article/'
      },
      // { text: '工具', link: 'https://google.com' },
      {
        text: '面试',
        link: '/interview/'
      },
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: 'ABC',
        link: '/abc/'
      }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'hello/vueblog',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 2
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  // ga: 'UA-109340118-1',
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  }
}
