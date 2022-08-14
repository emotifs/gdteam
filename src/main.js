import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import i18n from './locales/i18n'
import 'aos/dist/aos.css'
import 'animate.css'
import SectionHeader from "@/components/elements/SectionHeader";
const app = createApp(App)
store.i18n = i18n
app.use(i18n)
app.use(store)
app.use(router)
app.component('base-header', SectionHeader)
app.mount('#app')

