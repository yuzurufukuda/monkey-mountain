export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Monkey Mountain',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'Monkey Mountain Web Site' },
      { hid: 'og:title', property: 'og:title', content: 'Monkey Mountain Web Site' },
      { hid: 'description', name: 'description', content: 'メイドインオオイタ 香りを楽しむクラフトビール。モンキーマウンテンは大分県大分市府内街にある小さな醸造所です。このサイトではMonkey Moutainの歴史、醸造所についての紹介、クラフトビールの紹介を掲載しております。' },
      { hid: 'og:description', property: 'og:description', content: 'メイドインオオイタ 香りを楽しむクラフトビール。モンキーマウンテンは大分県大分市府内街にある小さな醸造所です。このサイトではMonkey Moutainの歴史、醸造所についての紹介、クラフトビールの紹介を掲載しております。' },
      { hid: 'keywors', name: 'keywords', content: '大分クラフトビール, Monkey Mountain, モンキーマウンテン, クラフトビール, ビール, ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/monkey_logo.jpg' },
      { rel: 'shortcut icon', sizes: '16x16', href: '/monkey_logo.jpg' },
      { rel: 'apple-touch-icon', sizes: '192x192', href: '/monkey_logo.jpg' },
      { rel: 'shortcut icon', sizes: '192x192', href: '/monkey_logo.jpg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/style.css',
    '~/assets/css/slick.css',
    '~/assets/css/slick-theme.css',
    'animate.css/animate.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-slick.js', mode: 'client' },
    { src: './plugins/aos.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment',
    '@aceforth/nuxt-optimized-images'
  ],
  moment: {
    // ここにオプションが記述できる
    locales: ['ja']
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-fontawesome',
    'nuxt-webfontloader'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:300,400,500,700', 'Popins:300,400,500,600,700,800,900', 'Source+Sans+Pro:300,400,699,700,900']
    }
  },
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true
  }
}
