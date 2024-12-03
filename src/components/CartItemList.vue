<script setup>
import CartItem from './CartItem.vue';
import { useSneakersStore } from '../store/state';
const sneakersStore = useSneakersStore();
</script>

<template>
  <div class="border border-red-500 flex flex-col gap-4">
    <div v-if="sneakersStore.cartItems.length===0">
      <p>Your cart is empty</p>
    </div>
    <CartItem
      v-for="item in sneakersStore.cartItems"
      :id="item.id"
    ></CartItem>
  </div>
</template>
