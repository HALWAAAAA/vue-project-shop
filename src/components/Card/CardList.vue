<script setup>
import Card from './Card.vue';
const props = defineProps({
  items: Array,
});
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-if="items.length === 0">
      <p>Your filters finds nothing. Sorry</p>
    </div>
    <Card v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>
