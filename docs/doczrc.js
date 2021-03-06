import { css } from 'docz-plugin-css'

export default {
  title: '🤔 FAQ Documentation',
  description: 'Documentation for the FAQ project',
  base: '/FAQ/',
  codeSandbox: false,
  hashRouter: true,
  wrapper: 'src/Wrapper',
  plugins: [
    css({
      preprocessor: 'postcss'
    })
  ],
  dest: 'dist',
  htmlContext: {
    lang: 'en',
    favicon: 'https://cdn-std.dprcdn.net/files/acc_649651/LUKiMl',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ],
      scripts: [
        {
          src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js',
          type: 'text/javascript',
          defer: true
        }
      ]
    }
  },
  repository: 'https://github.com/zenika-open-source/FAQ',
  menu: [
    'Introduction',
    'Getting started',
    {
      name: 'Advanced',
      menu: ['Configuration', 'Backing services', 'Integrations', 'Multi-tenancy', 'Contributing']
    }
    // 'Components' TODO: find a way to re-enable them
  ]
}
