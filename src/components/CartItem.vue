<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSneakersStore } from '../store/state';
const sneakersStore = useSneakersStore();
const {cartItems} = storeToRefs(sneakersStore);
const props = defineProps({
  id: String,
});

const currentCartItem = computed(() =>cartItems.value.find((item)=>item.id ===props.id)||{});
</script>

<template>
  <div class="flex items-center border border-slate-200 p-4 rounded-xl gap-4">
    <img :src="currentCartItem.imageUrl" alt="Sneaker" class="w-16 h-16" />
    <div class="flex flex-col">
      <p>{{ currentCartItem.title }}</p>
      <div class="flex justify-between mt-2">
        <b>{{ currentCartItem.price }}$</b>
        <img
          src="/close.svg"
          class="opacity-40 hover:opacity-100 cursor-pointer transition"
          @click="sneakersStore.addToCart(id)"
        />
      </div>
    </div>
  </div>
</template>
