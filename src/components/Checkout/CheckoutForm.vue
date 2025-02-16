<script setup>
import { useSneakersStore } from '../../store/state';

const sneakersStore = useSneakersStore();
</script>

<template>
  <div class="flex-1 bg-white rounded-lg shadow p-6">
    <h2 class="text-xl font-semibold mb-4">Shipping information</h2>
    <form class="space-y-4" @submit.prevent>
      <div class="flex gap-4">
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700" for="name"
            >First name</label
          >
          <input
            id="name"
            placeholder="John"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700" for="surname"
            >Last name</label
          >
          <input
            type="text"
            id="surname"
            placeholder="Simpson"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="email"
          >Email</label
        >
        <input
          type="email"
          required
          id="email"
          placeholder="exaple@gmail.com"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="address"
          >Address</label
        >
        <input
          type="text"
          required
          id="address"
          placeholder="Al.Jerozolimskie 148"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 w-full"
        />
      </div>

      <div class="flex gap-4">
        <div class="flex-1">
          <label for="city" class="block text-gray-700 text-sm font-medium"
            >City</label
          >
          <input
            type
            text
            id="city"
            placeholder="Warsaw"
            class="block mt-1 border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 shadow-sm w-full"
          />
        </div>
        <div class="flex-1">
          <label for="postal" class="text-sm font-medium text-gray-700"
            >Postal Code</label
          >
          <input
            placeholder="00-000"
            type="text"
            id="postal"
            class="block mt-1 border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 shadow-sm w-full"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="card"
          >Card number</label
        >
        <input
          type="text"
          id="card"
          placeholder="00 0000 0000 0000 00"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div class="flex gap-4">
        <div class="flex-1">
          <label for="date" class="block text-gray-700 text-sm font-medium"
            >Expiry Date</label
          >
          <input
            type
            text
            id="date"
            placeholder="MM/YY"
            class="block mt-1 border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 shadow-sm w-full"
          />
        </div>
        <div class="flex-1">
          <label for="cvv" class="text-sm font-medium text-gray-700">CVV</label>
          <input
            placeholder="00-000"
            type="text"
            id="cvv"
            class="block mt-1 border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 shadow-sm w-full"
          />
        </div>
      </div>
      <button
        type="submit"
        @click="sneakersStore.addToHistory()"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Place Order
      </button>
    </form>
  </div>
</template>
