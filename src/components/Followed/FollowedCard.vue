<script setup>
import { useSneakersStore } from '../../store/state';

const sneakersStore = useSneakersStore();

const props = defineProps({
  item: Object,
});
</script>

<template>
  <div
    class="relative border border-green-500 rounded-3xl p-8 cursor-pointer bg-white transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img
      :src="!props.item.isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="Like 1"
      class="absolute top-8 left-8"
      @click="sneakersStore.toggleFollowed(props.item.id)"
    />
    <img :src="props.item.imageUrl" alt="Sneaker" />
    <p class="mt-2">{{ props.item.title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Price:</span>
        <b>{{ props.item.price }}$</b>
      </div>
      <img
        :src="!props.item.isAdded ? '/plus.svg' : '/checked.svg'"
        alt="add to cart"
        @click="sneakersStore.addToCart(props.item.id)"
      />
    </div>
  </div>
</template>
