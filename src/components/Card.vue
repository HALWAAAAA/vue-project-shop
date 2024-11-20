<script setup>
import { doc, updateDoc } from 'firebase/firestore'; // Імпортуємо функцію для оновлення
import { db } from '../assets/firebase'; // Імпорт Firebase-конфігурації
import { ref } from 'vue';
const props = defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  id: String,
  addToCart: Function
});
const isFavorite = ref(props.isFavorite);
const isAdded = ref(props.isAdded);
const toggleFavorite = async () => {
  const newFavoriteStatus = !isFavorite.value;
  const itemRef = doc(db, 'items', props.id);

  try {
    await updateDoc(itemRef, { isFavorite: newFavoriteStatus });
    isFavorite.value = newFavoriteStatus;
  } catch (error) {
    console.error('Error updating favorite status:', error);
  }
};

const imageReverse = ()=>{
  props.addToCart(props.id);
  isAdded.value = !isAdded.value
}
</script>

<template>
  <div
    class="relative border border-green-500 rounded-3xl p-8 cursor-pointer bg-white transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="Like 1"
      class="absolute top-8 left-8"
      @click="toggleFavorite"
    />
    <img :src="imageUrl" alt="Sneaker" />
    <p class="mt-2">{{ title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Price:</span>
        <b>{{ price }}$</b>
      </div>
      <img
        :src="!isAdded ? '/plus.svg' : '/checked.svg'"
        alt="add to cart"
        @click="imageReverse"
      />
    </div>
  </div>
</template>
