<script setup>
import { inject} from 'vue';
import Card from './Card.vue';
const addToCart  =inject('addToCart');
const props = defineProps({
  items: Array,
});
</script>

<template>
  <div class="border border-red-500 grid grid-cols-4 gap-5">
    <Card
      v-for="item in items"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :isAdded="item.isAdded"
      :isFavorite="item.isFavorite"
      :add-to-cart="addToCart"
    ></Card>
  </div>
</template>
