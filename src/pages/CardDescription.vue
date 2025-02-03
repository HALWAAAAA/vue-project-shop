<script setup>
import { useRoute } from 'vue-router';
import { useSneakersStore } from '../store/state';
import { computed, onMounted } from 'vue';

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
  <div class="rounded-lg shadow-lg overflow-hidden">
    <div v-if="card" class="flex gap-3 items-start">
      <div class="p-8 w-96 flex-shrink-0">
        <img
          :src="card.imageUrl"
          alt="Sneaker Image"
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>

      <div class="p-8 flex-1">
        <div class="mb-8">
          <h1 class="text-4xl font-bold mb-2">{{ card.title }}</h1>

          <p class="text-3xl font-bold">${{ card.price }}</p>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Description</h2>
          <p class="text-gray-600 leading-relaxed">{{ card.description }}</p>
        </div>
        <div class="flex gap-5">
          <p class="text-2xl text-gray-600">Add to cart</p>
          <img
            :src="!card.isAdded ? '/plus.svg' : '/checked.svg'"
            alt="add to cart"
            @click="sneakersStore.toggleCartItem(card.id)"
          />

          <div
            class="flex pt-1 gap-3"
            v-if="card.isAdded && card.currentQuantity >= 1"
          >
            <button
              @click="sneakersStore.itemQuantityDecrement(card.id)"
              class="border rounded px-1 hover:bg-gray-200"
            >
              -
            </button>
            <b>{{ card.currentQuantity }}</b>
            <button
              class="border rounded px-2 hover:bg-gray-200"
              @click="sneakersStore.itemQuantityIncrement(card.id)"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
