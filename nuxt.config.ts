// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/iransans.css'],
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'flower',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' }
            ],
        }
    },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    nitro: {
        prerender: {
            crawlLinks: true
        }
    }
})
