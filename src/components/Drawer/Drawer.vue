<script setup>
import DrawerHeader from './DrawerHeader.vue';
import CartItemList from '../Cart/CartItemList.vue';
import { useSneakersStore } from '../../store/state';

const sneakersStore = useSneakersStore();
</script>

<template>
  <div class="drawer-container">
    <div
      class="fixed top-0 left-0 w-full h-full bg-black z-10 opacity-70 border border-pink-500"
    ></div>
    <div
      class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 border border-blue-500"
    >
      <DrawerHeader />

      <CartItemList />

      <div class="flex flex-col gap-2 mt-7">
        <div class="flex gap-2">
          <span>Vat: </span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>5%</b>
        </div>

        <div class="flex gap-2">
          <span>Total: </span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ sneakersStore.vatTotal }}$</b>
        </div>

        <button
          class="mt-4 bg-lime-500 transition w-full rounded-xl py-2 text-white hover:bg-lime-600 disabled:bg-slate-300 active:bg-lime-700 cursor-pointer"
          disabled="false"
        >
          Go to checkout
        </button>
      </div>
    </div>
  </div>
</template>
