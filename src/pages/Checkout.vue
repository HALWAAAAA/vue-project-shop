<script setup>
import { useSneakersStore } from '../store/state';
import { onMounted } from 'vue';
import CheckoutCart from '../components/Checkout/CheckoutCart.vue';
import CheckoutForm from '../components/Checkout/CheckoutForm.vue';

const sneakersStore = useSneakersStore();

onMounted(() => {
  sneakersStore.fetchItems();
});
</script>

<template>
  <div class="min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Checkout</h1>
      <div class="flex flex-col lg:flex-row gap-8">
        <CheckoutCart />
        <CheckoutForm />
      </div>
    </div>
  </div>
</template>
