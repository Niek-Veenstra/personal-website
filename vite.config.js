import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import {unheadVueComposablesImports} from "@unhead/vue";
import Components from 'unplugin-vue-components/vite';
import tailwindcss from "@tailwindcss/vite";
import {PrimeVueResolver} from "@primevue/auto-import-resolver";

export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        tailwindcss(),
        Components({
            resolvers: [
                PrimeVueResolver()
            ]
        }),
        AutoImport({
            imports:
                [unheadVueComposablesImports]
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
