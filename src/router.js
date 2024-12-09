import { createRouter, createWebHistory } from 'vue-router';
import Followed from './assets/pages/Followed.vue';
import Home from './assets/pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/followed',
    name: 'Followed',
    component: Followed,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
