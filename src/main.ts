import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import "../src/tailwind.css";
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const instance = axios.create({
    withCredentials: true,
});

const app = createApp(App);

app.config.globalProperties.$http = instance;

app.use(Vue3Toastify, {
    autoClose: 3000,
} as ToastContainerOptions);

  
app.use(store).use(router).mount('#app')
