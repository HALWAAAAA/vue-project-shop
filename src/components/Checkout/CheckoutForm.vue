<script setup>
import { useSneakersStore } from '../../store/state';
import { computed, ref } from 'vue';

const sneakersStore = useSneakersStore();
const cvv = ref('');

const isFormValid = computed(() => {
  return cvv.value.trim().length > 2;
});

const placeOrder = () => {
  if (isFormValid.value) {
    sneakersStore.addToHistory();
  }
};
</script>

<template>
  <div class="flex-1 bg-white rounded-lg shadow-md p-6 border border-gray-200">
    <h2 class="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
      Shipping information
    </h2>
    <form class="space-y-6" @submit.prevent="placeOrder">
      <div class="flex gap-4 flex-wrap sm:flex-nowrap">
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-800" for="name"
            >First name</label
          >
          <input
            id="name"
            placeholder="John"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>

        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-800" for="surname"
            >Last name</label
          >
          <input
            type="text"
            id="surname"
            placeholder="Simpson"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-800" for="email"
          >Email</label
        >
        <input
          type="email"
          required
          id="email"
          placeholder="exaple@gmail.com"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-800" for="address"
          >Address</label
        >
        <input
          type="text"
          required
          id="address"
          placeholder="Al.Jerozolimskie 148"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 w-full"
        />
      </div>

      <div class="flex gap-4 flex-wrap sm:flex-nowrap">
        <div class="flex-1">
          <label for="city" class="block text-gray-800 text-sm font-medium"
            >City</label
          >
          <input
            type
            text
            id="city"
            required
            placeholder="Warsaw"
            class="block mt-1 w-full border-gray-300 p-2 rounded-md focus:border-blue-500 focus:ring-blue-500 shadow-sm w-full"
          />
        </div>
        <div class="flex-1">
          <label for="postal" class="block text-sm font-medium text-gray-800"
            >Postal Code</label
          >
          <input
            placeholder="00-000"
            type="text"
            id="postal"
            required
            class="block mt-1 w-full p-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 shadow-sm w-full"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-800" for="card"
          >Card number</label
        >
        <input
          type="text"
          id="card"
          required
          placeholder="00 0000 0000 0000 00"
          class="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div class="flex gap-4 flex-wrap sm:flex-nowrap">
        <div class="flex-1">
          <label for="date" class="block text-gray-800 text-sm font-medium"
            >Expiry Date</label
          >
          <input
            type
            text
            id="date"
            required
            placeholder="MM/YY"
            class="block mt-1 w-full border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500 shadow-sm w-full"
          />
        </div>
        <div class="flex-1">
          <label for="cvv" class="block text-sm font-medium text-gray-800"
            >CVV</label
          >
          <input
            placeholder="00-000"
            type="text"
            id="cvv"
            v-model="cvv"
            required
            class="block mt-1 w-full p-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 shadow-sm w-full"
          />
        </div>
      </div>
      <button
        type="submit"
        :disabled="!isFormValid"
        class="w-full py-2 px-4 rounded-md transition-colors text-white font-semibold bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Place Order
      </button>
    </form>
  </div>
</template>
