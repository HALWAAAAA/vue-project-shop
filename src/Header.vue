<script setup>
import { useDrawerStore } from './Composable/useDrawer';

const drawerStore = useDrawerStore();
const props = defineProps({
  totalPrice: Number,
  default: 0
  
});

</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <div class="flex items-center gap-4">
      <img src="/logo.png" alt="Logo" class="w-10" />
      <div>
        <h2 class="text-xl font-bold uppercase">Vue sneakers</h2>
        <p class="text-slate-400">Sneakers shop</p>
      </div>
    </div>
    <ul class="flex items-center gap-10">
      <li
        class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
        @click="drawerStore.openDrawer"
      >
        <img src="/cart.svg" alt="Cart" />
        <b>{{ totalPrice }}$</b>
      </li>
      <li
        class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
      >
        <img src="/heart.svg" alt="Followed" />
        <span>Followed</span>
      </li>
      <li
        class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
      >
        <img src="/profile.svg" alt="Profile" />
        <span>Profile</span>
      </li>
    </ul>
  </header>
</template>
