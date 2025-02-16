<script setup>
const props = defineProps({
  item: Object,
});
</script>

<template>
  <div class="shadow rounded-lg p-6 mb-6 hover:bg-gray-50">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-8">
        <img :src="props.item.imageUrl" class="w-24" />
        <div>
          <h3 class="font-semibold text-gray-900">
            {{ props.item.title }}
          </h3>
          <p class="text-sm text-gray-600"> {{ new Date().toLocaleDateString() }}</p>
        </div>
      </div>
      <div class="text-right px-6">
        <p class="font-semibold text-gray-900">$ {{ props.item.price }}</p>
        <span class="bg-green-100 text-green-800">Delivered</span>
      </div>
    </div>
  </div>
</template>
