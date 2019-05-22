const utils = require('./utils')

module.exports = {
  title: '弋朝夕',
  description: '不积跬步无以至千里，不积小流无以成江海。',
  base: '/notes/',
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
        text: '笔记',
        items: [
          {
            text: 'java', link: '/notes/java/'
          },
          {
            text: 'docker', link: '/notes/docker/'
          },
          {
            text: 'spring', link: '/notes/spring/'
          }
        ]
      },
      {
        text: '工具',
        link: '/tool/'
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