import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import i18n from './locales/i18n'
import 'aos/dist/aos.css'
import 'animate.css'
import 'vue3-carousel/dist/carousel.css'
import SectionHeader from "@/components/elements/SectionHeader";
import Skeleton from 'vue-loading-skeleton';
import "vue-loading-skeleton/dist/style.css"
import TheLoader from "@/components/layout/TheLoader";
const app = createApp(App)
store.i18n = i18n
app.use(i18n)
app.use(store)
app.use(router)
app.use(Skeleton)
app.component('base-header', SectionHeader)
app.component("TheLoader", TheLoader)
app.mount('#app')

