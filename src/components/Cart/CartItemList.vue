<script setup>
import CartItem from './CartItem.vue';
import { useSneakersStore } from '../../store/state';
import { storeToRefs } from 'pinia';

const sneakersStore = useSneakersStore();
const { updateCartItems } = storeToRefs(sneakersStore);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div v-if="sneakersStore.cartItems.length === 0">
      <p
        class="text-center text-gray-500 text-lg font-semibold bg-gray-100 p-2 rounded-lg shadow-md"
      >
        Your cart is empty 🛒
      </p>
    </div>
    <div class="flex flex-col gap-4 max-h-80 sm:max-h-96 overflow-y-auto">
      <CartItem v-for="item in updateCartItems" :key="item.id" :item="item" />
    </div>
  </div>
</template>
