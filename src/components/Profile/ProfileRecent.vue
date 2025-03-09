<script setup>
import { ref } from 'vue';
const props = defineProps({
  item: Object,
});

const currentDate = ref(new Date().toLocaleDateString());
</script>

<template>
  <div
    class="shadow rounded-lg p-6 mb-6 hover:bg-gray-50 border border-gray-200 transition"
  >
    <div
      class="flex items-center justify-between flex-wrap sm:flex-nowrap gap-4"
    >
      <div class="flex items-center gap-6">
        <img
          :src="props.item.imageUrl"
          class="w-24 h-24 rounded-lg shadow-sm"
        />
        <div>
          <h3 class="font-semibold text-gray-900 text-lg">
            {{ props.item.title }}
          </h3>
          <p class="text-sm text-gray-600">{{ currentDate }}</p>
        </div>
      </div>
      <div class="text-right px-6">
        <p class="font-semibold text-gray-900 text-lg">
          $ {{ props.item.price }}
        </p>
        <span class="bg-green-100 text-green-800 font-medium p-1 rounded"
          >Delivered</span
        >
      </div>
    </div>
  </div>
</template>
