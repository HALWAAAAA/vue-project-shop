<script setup>
import { storeToRefs } from 'pinia';
import { useSneakersStore } from '../../store/state';
import { computed, onMounted } from 'vue';

const sneakersStore = useSneakersStore();
const { updateCartItems, vatTotal } = storeToRefs(sneakersStore);
const shippingPricePerItem = 15;

const shipping = computed(() => {
  return updateCartItems.value.length * shippingPricePerItem;
});

const total = computed(() => {
  return vatTotal.value + shipping.value;
});

onMounted(async () => {
  await sneakersStore.fetchItems();
});
</script>

<template>
  <div class="flex-1 bg-white rounded-lg shadow p-4 sm:p-6 border border-gray-200">
    <h2 class="text-xl sm:text-2xl font-bold mb-4 text-gray-800 border-b p-2">
      Your Cart
    </h2>

    <div class="space-y-4">
      <div
        v-for="item in updateCartItems"
        :key="item.id"
        class="flex items-center gap-3 sm:gap-4 border-b pb-4 hover:bg-gray-50 p-2 rounded-md"
      >
        <img
          :src="item.imageUrl"
          class="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-md shadow-sm"
        />

        <div class="flex-1">
          <h3 class="font-semibold text-gray-900 text-sm sm:text-lg">
            {{ item.title }}
          </h3>
          <p class="text-gray-600 text-xs sm:text-sm">Quantity: {{ item.quantity }}</p>
        </div>

        <p class="font-semibold text-gray-900 text-sm sm:text-lg">${{ item.price }}</p>
      </div>
    </div>

    <div class="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
      <div class="flex justify-between text-gray-700 text-sm sm:text-base">
        <span>Subtotal (+VAT)</span>
        <span class="font-medium">$ {{ vatTotal }}</span>
      </div>

      <div class="flex justify-between text-gray-700 text-sm sm:text-base">
        <span>Shipping</span>
        <span class="font-medium">${{ shipping }}</span>
      </div>

      <div
        class="flex justify-between font-semibold text-base sm:text-lg pt-2 border-t text-gray-900"
      >
        <span>Total</span>
        <span>$ {{ total }}</span>
      </div>
    </div>
  </div>
</template>
