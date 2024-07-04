import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import emptylayout from '@/layouts/mainLayout.vue';
import LoginForm from '../components/signUp.vue'
import Auth from '../components/LoginAuthCheck.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: LoginForm,
    meta: {
        title: "LoginForm",
        layout: emptylayout,
    },
  },
  {
    path: '/user/add',
    name: 'login',
    component: LoginForm,
    meta: {
        title: "LoginForm",
        layout: emptylayout,
    },
  },
  {
    path: '/authCheck',
    name: 'authCheck',
    component: Auth,
    meta: {
        title: "Auth",
        layout: emptylayout,
    },
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router
