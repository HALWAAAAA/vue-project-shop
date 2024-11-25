<script setup>
const props = defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  id: String,
  onClickAdd: Function,
  removeFromCart: Function
});


</script>

<template>
  <div class="flex items-center border border-slate-200 p-4 rounded-xl gap-4">
    <img :src="imageUrl" alt="Sneaker" class="w-16 h-16" />
    <div class="flex flex-col">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-2">
        <b>{{ price }}$</b>
        <img
          src="/close.svg"
          class="opacity-40 hover:opacity-100 cursor-pointer transition"
          @click="() => removeFromCart(id)"
        />
      </div>
    </div>
  </div>
</template>
