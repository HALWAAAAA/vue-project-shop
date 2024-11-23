<script setup>
import { inject, computed } from 'vue';
import CartItem from './CartItem.vue';
const cartItems = inject('cartItems');
const itemsInCart = computed(() => cartItems.value);
const removeFromCart = inject('removeFromCart');
</script>

<template>
  <div class="border border-red-500 flex flex-col gap-4">
    <CartItem
      v-for="item in itemsInCart"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :isAdded="item.isAdded"
      :isFavorite="item.isFavorite"
      :remove-from-cart="removeFromCart"

    ></CartItem>
  </div>
</template>
