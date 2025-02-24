<script setup>
import { useSneakersStore } from '../../store/state';

const sneakersStore = useSneakersStore();

const props = defineProps({
  item: Object,
});
</script>

<template>
  <div
    class="relative border border-green-500 rounded-3xl p-8 cursor-pointer bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
  >
    <img
      :src="!props.item.isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="Like 1"
      class="absolute top-6 w-8 h-8 transition-transform duration-200 hover:scale-110 active:scale-90"
      @click="sneakersStore.toggleFollowed(props.item.id)"
    />
    <router-link :to="`/card/${props.item.id}`">
      <img :src="props.item.imageUrl" alt="Sneaker" />
      <p class="mt-2 text-lg text-gray-800">{{ props.item.title }}</p>
    </router-link>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Price:</span>
        <b class="text-lg">{{ props.item.price }}$</b>
      </div>
      <img
        :src="!props.item.isAdded ? '/plus.svg' : '/checked.svg'"
        alt="add to cart"
        @click="sneakersStore.toggleCartItem(props.item.id)"
      />
    </div>
    <div
      class="flex justify-between pt-1"
      v-if="props.item.isAdded && props.item.currentQuantity >= 1"
    >
      <p class="text-gray-600">Quantity:</p>
      <button
        @click="sneakersStore.itemQuantityDecrement(props.item.id)"
        class="border rounded px-1 hover:bg-gray-200"
      >
        -
      </button>
      <b class="text-lg">{{ props.item.currentQuantity }}</b>
      <button
        class="border rounded px-2 hover:bg-gray-200"
        @click="sneakersStore.itemQuantityIncrement(props.item.id)"
      >
        +
      </button>
    </div>
  </div>
</template>
