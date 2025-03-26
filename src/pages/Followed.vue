<script setup>
import { storeToRefs } from 'pinia';
import { useSneakersStore } from '../store/state';
import Card from '../components/Card/Card.vue';
import { onMounted } from 'vue';
import SpinnerLoader from '../components/UI/Spinner/SpinnerLoader.vue';

const sneakersStore = useSneakersStore();
const { updateFollowed } = storeToRefs(sneakersStore);

onMounted(async () => {
  await sneakersStore.fetchItems();
});
</script>

<template>
  <div>
    <div
      v-if="sneakersStore.isLoading"
      class="flex justify-center items-center h-64 w-full"
    >
      <SpinnerLoader />
    </div>
    <div v-else-if="sneakersStore.followedItems.length === 0">
      <p class="text-gray-500 text-lg font-medium text-center mt-6">
        Your followed is empty!
      </p>
    </div>
    <div v-else class="grid grid-cols-1 gap-5 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Card v-for="item in updateFollowed" :key="item.id" :item="item" />
    </div>
  </div>
</template>
