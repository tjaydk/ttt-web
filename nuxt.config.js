const env = require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tic Tac Toe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'Tic Tac Toe example for job interview' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap" rel="stylesheet' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@200;300;500;700&display=swap" rel="stylesheet' }
    ]
  },

  env: env.parsed,

  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  styleResources: {
    scss: [
      '@/assets/scss/variables/variables.scss',
      '@/assets/scss/mixins/mixins.scss',
      '@/assets/scss/animations/animations.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-moment',
    '~/filters/currency',
    '~/plugins/fontawesome.js'
    // '~/plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://www.npmjs.com/package/@nuxtjs/fontawesome
    // '@nuxtjs/fontawesome',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
    // https://content.nuxtjs.org/get-started
    '@nuxt/content'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources'
  ],

  fontawesome: {
    icons: {
      solid: [
        'faHome',
        'faMagnifyingGlass',
        'faX',
        'faEye',
        'faEyeSlash'
      ]
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL,
    credentials: true
  },

  auth: {
    resetOnError: true,
    strategies: {
      local: {
        token: {
          property: 'token',
          maxAge: 60 * 60 * 24 * 365
        },
        endpoints: {
          login: {
            url: process.env.PUBLIC_URL + '/login',
            method: 'POST'
          },
          logout: {
            url: process.env.API_URL + '/logout',
            method: 'GET'
          },
          user: {
            url: process.env.API_URL + '/user',
            method: 'GET'
          }
        },
        redirect: {
          login: '/',
          logout: '/login'
        }
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'lodash-es',
      'vue-clamp'
    ]
  }
}
