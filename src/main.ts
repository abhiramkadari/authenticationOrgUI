import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import "../src/tailwind.css";

const instance = axios.create({
    withCredentials: true,
});

const app = createApp(App);

app.config.globalProperties.$http = instance;

app.use(store).use(router).mount('#app')
