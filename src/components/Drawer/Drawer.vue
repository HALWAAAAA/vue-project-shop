<script setup>
import DrawerHeader from './DrawerHeader.vue';
import CartItemList from '../Cart/CartItemList.vue';
import { useSneakersStore } from '../../store/state';
import { useDrawer } from '../../composables/useDrawer';
import { useRouter } from 'vue-router';
import { CHECKOUT_ROUTE } from '../../routerPath';

const router = useRouter();
const sneakersStore = useSneakersStore();
const { closeDrawer } = useDrawer();

function goToCheckout() {
  closeDrawer();

  router.push(CHECKOUT_ROUTE);
}
</script>

<template>
  <div class="drawer-container">
    <div
      class="fixed top-0 left-0 w-full h-full bg-black z-10 opacity-70"
    ></div>
    <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 drawer">
      <DrawerHeader />

      <CartItemList />

      <div class="flex flex-col gap-2 mt-7">
        <div class="flex gap-2 ite">
          <span class="text-lg text-gray-800">Vat: </span>
          <div class="flex-1 border-b border-dashed border-gray-300"></div>
          <b class="text-lg text-gray-800">5%</b>
        </div>

        <div class="flex gap-2 items-center">
          <span class="text-lg text-gray-800">Total: </span>
          <div class="flex-1 border-b border-dashed border-gray-300"></div>
          <b>{{ sneakersStore.vatTotal }}$</b>
        </div>

        <button
          @click="goToCheckout()"
          class="mt-4 bg-lime-500 transition-colors w-full rounded-xl py-2 text-white hover:bg-lime-600 disabled:bg-slate-300 active:bg-lime-700 cursor-pointer disabled:pointer-events-none"
          :disabled="sneakersStore.cartItems.length === 0"
        >
          Go to checkout
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.drawer {
  width: 384px;
}

@media (max-width: 640px) {
  .drawer {
    width: 100%;
  }
}
</style>
