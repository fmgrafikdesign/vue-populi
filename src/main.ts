import { registerSW } from 'virtual:pwa-register'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.scss'

registerSW({ immediate: true })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
