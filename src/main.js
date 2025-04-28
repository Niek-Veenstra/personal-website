import './assets/app.css'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/aura';
import {createApp} from 'vue'
import App from './App.vue'
import {createHead} from "@unhead/vue/client";

import Tooltip from 'primevue/tooltip';

const app = createApp(App)
    .use(createHead())
    .use(PrimeVue, {
        theme: {
            preset: Material,
            options: {
                darkMode: false,
                darkModeSelector: "",
                cssLayer: {
                    name: 'primevue',
                    order: 'theme, base, primevue',
                }
            }
        }
    })

app.directive('tooltip', Tooltip);
app.mount('#app')