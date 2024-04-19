import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Wind from './presets/wind'
import router from './router'
import './style.css'
import ripple from '@/presets/wind/ripple'
import App from './App.vue'
// import TabMenu from 'primevue/tabmenu'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, { unstyled: true, pt: Wind, ripple: true })
// app.directive('ripple', Ripple)

app.mount('#app')
