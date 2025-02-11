<script setup>
import { storeToRefs } from 'pinia';
import { useSneakersStore } from '../../store/state';
import { computed } from 'vue';

const sneakersStore = useSneakersStore();
const { updateCartItems, vatTotal } = storeToRefs(sneakersStore);

const shipping = computed(() => {
  return updateCartItems.value.length * 15;
});

const total = computed(() => {
  return vatTotal.value + shipping.value;
});
</script>

<template>
  <div class="flex-1 bg-gray-100 rounded-lg shadow p-6">
    <h2 class="text-xl font-semibold mb-4">Your Cart</h2>
    <div class="space-y-4">
      <div
        v-for="item in updateCartItems"
        :key="item.id"
        class="flex items-center space-x-4 border-b pb-4 hover:bg-gray-50"
      >
        <img :src="item.imageUrl" class="w-24 h-24 object-cover rounded" />

        <div class="flex-1">
          <h3 class="font-semibold text-gray-900">
            {{ item.title }}
          </h3>
          <p class="text-gray-600">Quantity:{{ item.quantity }}</p>
        </div>

        <p class="font-semibold text-gray-900">${{ item.price }}</p>
      </div>
    </div>

    <div class="mt-4 space-y-2">
      <div class="flex justify-between">
        <span>Subtotal(+VAT)</span>
        <span>$ {{ vatTotal }}</span>
      </div>

      <div class="flex justify-between">
        <span>Shipping</span>
        <span>${{ shipping }}</span>
      </div>

      <div class="flex justify-between font-semibold text-lg pt-2 border-t">
        <span>Total</span>
        <span>$ {{ total }}</span>
      </div>
    </div>
  </div>
</template>
