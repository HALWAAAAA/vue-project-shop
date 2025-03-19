<script setup>
import CheckoutCart from '../components/Checkout/CheckoutCart.vue';
import CheckoutForm from '../components/Checkout/CheckoutForm.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col items-center">
    <div class="w-full max-w-screen-lg mx-auto px-4 py-8 sm:px-6">
      <h1 class="sm:text-3xl text-2xl font-bold mb-6 sm:mb-8 text-center">
        Checkout
      </h1>
      <div class="flex flex-col lg:flex-row sm:gap-8 gap-6">
        <CheckoutCart class="w-full lg:w-2/5" />
        <CheckoutForm class="w-full lg:w-3/5" />
      </div>
    </div>
  </div>
</template>
