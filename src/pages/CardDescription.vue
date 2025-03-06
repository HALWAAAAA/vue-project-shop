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
          <button-add-item
            alt="add to cart"
            @toggle="sneakersStore.toggleCartItem(card.id)"
            :isAdded="card.isAdded"
          />
          <div
            class="flex pt-1 gap-3"
            v-if="card.isAdded && card.currentQuantity >= 1"
          >
            <BaseButton
              @click="sneakersStore.itemQuantityDecrement(card.id)"
              type="minus"
            >
            </BaseButton>
            <b class="mt-1">{{ card.currentQuantity }}</b>
            <BaseButton
              @click="sneakersStore.itemQuantityIncrement(card.id)"
              type="plus"
            >
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
