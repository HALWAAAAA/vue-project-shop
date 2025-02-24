<script setup>
import { useSneakersStore } from '../../store/state';
import ButtonFollowed from '../UI/Buttons/ButtonFollowed.vue';

const sneakersStore = useSneakersStore();

const props = defineProps({
  item: Object,
});
</script>

<template>
  <div
    class="relative border border-green-500 rounded-3xl p-8 cursor-pointer bg-white transition hover:-translate-y-2 hover:shadow-xl"
  >

<ButtonFollowed alt="image_followed" @toggle="sneakersStore.toggleFollowed(props.item.id)" :isFavorite = "props.item.isFavorite"/>
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
        @click="sneakersStore.toggleCartItem(props.item.id)"
      />
    </div>
    <div
      class="flex justify-between pt-1"
      v-if="props.item.isAdded && props.item.currentQuantity >= 1"
    >
      <p>Quantity:</p>
      <button
        @click="sneakersStore.itemQuantityDecrement(props.item.id)"
        class="border rounded px-1 hover:bg-gray-200"
      >
        -
      </button>
      <b>{{ props.item.currentQuantity }}</b>
      <button
        class="border rounded px-2 hover:bg-gray-200"
        @click="sneakersStore.itemQuantityIncrement(props.item.id)"
      >
        +
      </button>
    </div>
  </div>
</template>
