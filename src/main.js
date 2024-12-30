// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import Header from './components/Header.vue';
const app = createApp(App);
app.component('app-header',Header)
app.use(router)
app.mount('#app')
