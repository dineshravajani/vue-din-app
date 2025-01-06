// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia';
import Header from './components/Header.vue';
import { useAuthStore } from './store/auth';
const app = createApp(App);
const pinia = createPinia();


app.component('app-header',Header)
app.use(pinia)
app.use(router)
const authStore = useAuthStore();
authStore.validateToken();
app.mount('#app')
