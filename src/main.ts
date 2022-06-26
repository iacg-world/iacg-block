import { createApp } from 'vue'
import Block from './index'
import App from './App.vue'
const app = createApp(App)
app.use(Block)
app.mount('#app')
