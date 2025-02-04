import { createRouter, createWebHistory } from 'vue-router';
import Followed from './pages/Followed.vue';
import Home from './pages/Home.vue';
import Profile from './pages/Profile.vue';
import CardDescription from './pages/CardDescription.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
