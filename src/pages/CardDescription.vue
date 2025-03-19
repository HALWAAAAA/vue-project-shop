<script setup>
import { useRoute } from 'vue-router';
import { useSneakersStore } from '../store/state';
import { computed, onMounted } from 'vue';
import ButtonAddItem from '../components/UI/Buttons/ButtonAddItem.vue';
import BaseButton from '../components/UI/Buttons/BaseButton.vue';

const sneakersStore = useSneakersStore();
const route = useRoute();
const cardId = route.params.id;
const card = computed(() => {
  return sneakersStore.items.find((item) => item.id == cardId);
});

onMounted(() => {
  sneakersStore.fetchItems();
});
</script>

<template>
  <div
    class="rounded-lg shadow-lg overflow-hidden max-w-screen-lg mx-auto px-4 sm:px-6"
  >
    <div
      v-if="card"
      class="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start"
    >
      <div class="w-full md:w-1/2 flex justify-center p-4 sm:p-6">
        <img
          :src="card.imageUrl"
          alt="Sneaker Image"
          class="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-lg"
        />
      </div>

      <div class="w-full md:w-1/2 p-4 sm:p-6 flex flex-col">
        <div class="mb-4">
          <h1 class="text-2xl sm:text-3xl font-bold mb-2">{{ card.title }}</h1>
          <p class="text-xl sm:text-2xl font-bold">${{ card.price }}</p>
        </div>

        <div class="mb-4">
          <h2 class="text-lg sm:text-xl font-semibold mb-2">Description</h2>
          <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
            {{ card.description }}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 items-center">
          <p class="text-lg sm:text-xl text-gray-600">Add to cart</p>
          <button-add-item
            alt="add to cart"
            @toggle="sneakersStore.toggleCartItem(card.id)"
            :isAdded="card.isAdded"
          />

          <div
            class="flex items-center gap-3"
            v-if="card.isAdded && card.currentQuantity >= 1"
          >
            <BaseButton
              @click="sneakersStore.itemQuantityDecrement(card.id)"
              type="minus"
            />
            <b class="text-lg">{{ card.currentQuantity }}</b>
            <BaseButton
              @click="sneakersStore.itemQuantityIncrement(card.id)"
              type="plus"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
