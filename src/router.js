import { createRouter, createWebHistory } from 'vue-router';
import Followed from './pages/Followed.vue';
import Home from './pages/Home.vue';
import Profile from './pages/Profile.vue';
import CardDescription from './pages/CardDescription.vue';
import Checkout from './pages/Checkout.vue';

import { CHECKOUT_NAME, CHECKOUT_ROUTE } from './routerPath';

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
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/card/:id',
    name: 'CardDescription',
    component: CardDescription,
  },
  {
    path: CHECKOUT_ROUTE,
    name: CHECKOUT_NAME,
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
