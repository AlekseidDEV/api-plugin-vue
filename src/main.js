import { createApp } from 'vue'
import App from './App.vue'
import ApiPlugins from './api/api.plugins'

const app = createApp(App)

app.use(ApiPlugins, {
    baseURL: process.env.VUE_APP_URL_AXIOS
})
    .provide('$api', app.config.globalProperties.$api)
    .mount('#app')





