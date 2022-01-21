export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'episodez',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Discover, create and share episode playlists of your favourite TV Shows.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: './favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/fontArvo.css",
    "~/assets/css/fontMontserrat.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: true,
      regular: true,
      brands: true
    }
  },

  // router
  router: {
    middleware: ['auth']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAg0z6Ykx9mAzmBRi_i-pQ7g9ApF1y5Iy4",
          authDomain: "episodez.firebaseapp.com",
          projectId: "episodez",
          storageBucket: "episodez.appspot.com",
          messagingSenderId: "1027158888659",
          appId: "1:1027158888659:web:c00fd0cd76c4cae2970426",
          measurementId: "G-N3MNKPSGVF"
        },
        services: {
          auth: {
            ssr: {
              ignorePaths: [
                '/admin', // path is ignored if url.pathname.startsWith('/admin')
                /^api/ // path is ignored if url.pathname without the leading slash (/) matches the RegExp
              ]
            },
            persistence: 'local',
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            }
          },
          firestore: true,
          analytics: true
        }
      }],

    '@nuxtjs/toast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
