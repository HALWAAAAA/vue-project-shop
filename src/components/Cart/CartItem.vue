<script setup>
import { useSneakersStore } from '../../store/state';

const sneakersStore = useSneakersStore();

const props = defineProps({
  item: Object,
});
</script>

<template>
  <div class="flex items-center border border-slate-200 p-4 rounded-xl gap-4">
    <img :src="props.item.imageUrl" alt="Sneaker" class="w-16 h-16" />
    <div class="flex flex-col">
      <p>{{ props.item.title }}</p>
      <div class="flex justify-between mt-2">
        <b>{{ props.item.price }}$</b>
        <img
          src="/close.svg"
          class="opacity-40 hover:opacity-100 cursor-pointer transition"
          @click="sneakersStore.addToCart(props.item.id)"
        />
      </div>
    </div>
  </div>
</template>
