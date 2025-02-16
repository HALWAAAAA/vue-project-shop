import { createRouter, createWebHistory } from 'vue-router';
import Followed from './pages/Followed.vue';
import Home from './pages/Home.vue';
import Profile from './pages/Profile.vue';
import CardDescription from './pages/CardDescription.vue';
import Checkout from './pages/Checkout.vue';

import {
  CHECKOUT_NAME,
  CHECKOUT_ROUTE,
  HOME_NAME,
  HOME_ROUTE,
  FOLLOWED_NAME,
  FOLLOWED_ROUTE,
  PROFILE_NAME,
  PROFILE_ROUTE,
  CARD_DESCRIPTION_NAME,
  CARD_DESCRIPTION_ROUTE,
} from './routerPath';

const routes = [
  {
    path: HOME_ROUTE,
    name: HOME_NAME,
    component: Home,
  },
  {
    path: FOLLOWED_ROUTE,
    name: FOLLOWED_NAME,
    component: Followed,
  },
  {
    path: PROFILE_ROUTE,
    name: PROFILE_NAME,
    component: Profile,
  },
  {
    path: CARD_DESCRIPTION_ROUTE,
    name: CARD_DESCRIPTION_NAME,
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
