import {fileURLToPath, URL} from 'node:url'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite';
import tailwindcss from "@tailwindcss/vite";
import {PrimeVueResolver} from "@primevue/auto-import-resolver";
import vuePlugin from '@vitejs/plugin-vue';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    pages: true,
    devtools: {enabled: true},
    css: [`assets/css/tailwind.css`],
    vite: {
        plugins: [
            vueDevTools(),
            tailwindcss(),
            Components({
                resolvers: [
                    PrimeVueResolver(),
                ]
            }),
        ],
    },
    alias: {
        '@/pages': fileURLToPath(new URL('./pages', import.meta.url))
    },
})
