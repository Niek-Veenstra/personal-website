import { fileURLToPath, URL } from "node:url";
import vueDevTools from "vite-plugin-vue-devtools";
import Components from "unplugin-vue-components/vite";
import tailwindcss from "@tailwindcss/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  pages: true,
  devtools: { enabled: true },
  css: [`assets/css/tailwind.css`],
  vite: {
    plugins: [
      vueDevTools(),
      tailwindcss(),
      Components({
        resolvers: [PrimeVueResolver()],
      }),
    ],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  image: {
    provider: "ipx",
    ipx: {
      fs: {
        dir: fileURLToPath(new URL("./images/", import.meta.url)),
      },
    },
  },
  alias: {
    "@/pages": fileURLToPath(new URL("./pages", import.meta.url)),
  },

  modules: ["@nuxt/image"],
});
