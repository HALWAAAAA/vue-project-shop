<script setup>
import { RouterLink } from 'vue-router';
import { useDrawer } from './composables/useDrawer';
import { useSneakersStore } from './store/state';
import { FOLLOWED_ROUTE, HOME_ROUTE, PROFILE_ROUTE } from './routerPath';

const { openDrawer } = useDrawer();
const sneakersStore = useSneakersStore();
</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <RouterLink :to="HOME_ROUTE">
      <div class="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" class="w-10" />
        <div>
          <h2 class="text-xl font-bold uppercase">Vue sneakers</h2>
          <p class="text-slate-400">Sneakers shop</p>
        </div>
      </div></RouterLink
    >
    <ul class="flex items-center gap-10">
      <li
        class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
        @click="openDrawer"
      >
        <img src="/cart.svg" alt="Cart" />
        <b>{{ sneakersStore.totalPrice }}$</b>
      </li>
      <router-link :to="FOLLOWED_ROUTE">
        <li
          class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
        >
          <img src="/heart.svg" alt="Followed" />
          <span>Followed</span>
        </li>
      </router-link>
      <router-link :to="PROFILE_ROUTE">
        <li
          class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
        >
          <img src="/profile.svg" alt="Profile" />
          <span>Profile</span>
        </li></router-link
      >
    </ul>
  </header>
</template>
