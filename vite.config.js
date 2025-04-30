import Vue from 'unplugin-vue/vite'
import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import {unheadVueComposablesImports} from "@unhead/vue";
import Components from 'unplugin-vue-components/vite';
import tailwindcss from "@tailwindcss/vite";
import {PrimeVueResolver} from "@primevue/auto-import-resolver";

export default defineConfig({
    plugins: [
        Vue(),
        vueDevTools(),
        tailwindcss(),
        AutoImport({
            imports:
                [unheadVueComposablesImports, 'vue']
        }),
        Components({
            resolvers: [
                PrimeVueResolver(),
            ]
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
