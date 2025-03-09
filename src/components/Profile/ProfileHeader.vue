<script setup>
import { useSneakersStore } from '../../store/state';
import { onMounted } from 'vue';

const sneakersStore = useSneakersStore();

onMounted(() => {
  sneakersStore.fetchItems();
});
</script>

<template>
  <div class="shadow rounded-lg p-6 mb-6 bg-white">
    <div
      class="flex flex-col sm:flex-row sm:items-start sm:text-left text-center items-center space-x-0 sm:space-x-8"
    >
      <img
        src="../../../public/avatar (1).svg"
        class="w-32 h-32 rounded-full border border-gray-300 shadow-sm"
      />
      <div class="mt-4 sm:mt-2">
        <h1 class="font-bold text-3xl text-gray-900">John Doe</h1>
        <p class="text-gray-600 text-lg">@sneakerHead</p>
      </div>
    </div>

    <div
      class="flex justify-between mt-6 text-center border-t border-gray-300 pt-4"
    >
      <div>
        <p class="text-3xl font-bold text-gray-900">
          {{ sneakersStore.cartItems.length }}
        </p>
        <p class="text-gray-600 text-sm">Orders</p>
      </div>
      <div>
        <p class="text-3xl font-bold text-gray-900">12</p>
        <p class="text-gray-600 text-sm">Reviews</p>
      </div>
      <div>
        <p class="text-3xl font-bold text-gray-900">
          {{ sneakersStore.followedItems.length }}
        </p>
        <p class="text-gray-600 text-sm">Followed</p>
      </div>
    </div>
  </div>
</template>
