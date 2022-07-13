import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import './static/fontawesome-free-6.1.1-web/fontawesome-free-6.1.1-web/css/all.min.css'
createApp(App).use(store).mount('#app')