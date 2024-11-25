<script setup>
import { computed } from 'vue';
import { useSneakersStore } from '../store/state'; 
import { storeToRefs } from 'pinia';

const sneakersStore = useSneakersStore();
const {items} = storeToRefs(sneakersStore);

const props = defineProps({
  id: String,
});

const currentItem = computed(() => items.value.find((item) => item.id === props.id)|| {});

</script>

<template>
  <div
    class="relative border border-green-500 rounded-3xl p-8 cursor-pointer bg-white transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img
      :src="!currentItem.isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="Like 1"
      class="absolute top-8 left-8"
      @click=""
    />
    <img :src="currentItem.imageUrl" alt="Sneaker" />
    <p class="mt-2">{{ currentItem.title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Price:</span>
        <b>{{ currentItem.price }}$</b>
      </div>
      <img     
        :src="!currentItem.isAdded ? '/plus.svg' : '/checked.svg'"
        alt="add to cart"
        @click="sneakersStore.addToCart(id)"
      />
    </div>
  </div>
</template>
