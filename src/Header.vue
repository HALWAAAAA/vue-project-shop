<script setup>
import { RouterLink } from 'vue-router';
import { useDrawer } from './composables/useDrawer';
import { useSneakersStore } from './store/state';
import { FOLLOWED_ROUTE, HOME_ROUTE, PROFILE_ROUTE } from './routerPath';

const { openDrawer } = useDrawer();
const sneakersStore = useSneakersStore();
</script>

<template>
  <header
    class="flex flex-col sm:flex-row justify-between border-b border-slate-300 px-6 sm:px-10 py-6 sm:py-8 w-full mx-auto"
  >
    <RouterLink :to="HOME_ROUTE">
      <div class="flex items-center sm:gap-4 gap-3">
        <img src="/logo.png" alt="Logo" class="sm:w-10 w-8" />
        <div>
          <h2 class="text-lg sm:text-xl font-bold uppercase">Vue sneakers</h2>
          <p class="text-slate-400 text-sm sm:text-base">Sneakers shop</p>
        </div>
      </div></RouterLink
    >
    <ul class="flex items-center gap-5 sm:gap-10 mt-4 sm:mt-0">
      <li
        class="flex items-center gap-2 sm:gap-3 text-gray-500 hover:text-black cursor-pointer"
        @click="openDrawer"
      >
        <img src="/cart.svg" alt="Cart" class="w-5 sm:w-6 xs:pt-2" />
        <b class="text-sm sm:text-base xs:pt-2"
          >{{ sneakersStore.totalPrice }}$</b
        >
      </li>
      <router-link :to="FOLLOWED_ROUTE">
        <li
          class="flex items-center gap-2 sm:gap-3 text-gray-500 hover:text-black cursor-pointer"
        >
          <img src="/heart.svg" alt="Followed" class="w-5 sm:w-6 xs:pt-2" />
          <span class="hidden sm:inline">Followed</span>
        </li>
      </router-link>
      <router-link :to="PROFILE_ROUTE">
        <li
          class="flex items-center gap-2 sm:gap-3 text-gray-500 hover:text-black cursor-pointer"
        >
          <img src="/profile.svg" alt="Profile" class="w-5 sm:w-6 xs:pt-2" />
          <span class="hidden sm:inline">Profile</span>
        </li></router-link
      >
    </ul>
  </header>
</template>
