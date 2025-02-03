<script setup>
import { useSneakersStore } from '../../store/state';
import { onMounted } from 'vue';
const sneakersStore = useSneakersStore();
onMounted(() => {
  sneakersStore.fetchItems();
});
</script>

<template>
  <div class="shadow rounded-lg p-6 mb-6">
    <div class="flex items-center space-x-8">
      <img src="../../../public/avatar (1).svg" class="w-40" />
      <div>
        <h1 class="font-bold text-2xl text-gray-900">John Doe</h1>
        <p class="text-gray-600">@sneakerHead</p>
      </div>
    </div>
    <div class="flex justify-between mt-6 text-center">
      <div>
        <p class="text-2xl font-bold text-gray-900">
          {{ sneakersStore.cartItems.length }}
        </p>
        <p class="text-gray-600">Orders</p>
      </div>
      <div>
        <p class="text-2xl font-bold text-gray-900">12</p>
        <p class="text-gray-600">Reviews</p>
      </div>
      <div>
        <p class="text-2xl font-bold text-gray-900">
          {{ sneakersStore.followedItems.length }}
        </p>
        <p class="text-gray-600">Followed</p>
      </div>
    </div>
  </div>
</template>
