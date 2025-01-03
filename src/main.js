// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia';
import Header from './components/Header.vue';
const app = createApp(App);
const pinia = createPinia();
app.component('app-header',Header)
app.use(pinia)
app.use(router)
app.mount('#app')
