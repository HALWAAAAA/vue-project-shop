<script setup>
import Card from './Card.vue';
import SpinnerLoader from '../UI/Spinner/SpinnerLoader.vue';

const props = defineProps({
  items: Array,
  isLoading: Boolean,
});
</script>

<template>
  <div v-if="isLoading" class="flex justify-center items-center h-64 w-full">
    <SpinnerLoader />
  </div>
  <div v-else class="grid grid-cols-1 gap-5 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <div v-if="items.length === 0" class="col-span-full text-center">
      <p class="text-xl font-semibold">Your filters finds nothing. Sorry</p>
    </div>
    <Card v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

