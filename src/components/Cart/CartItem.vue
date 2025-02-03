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

        <div
          class="flex justify-between pt-1 gap-3"
          v-if="props.item.isAdded && props.item.currentQuantity >= 1"
        >
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

        <img
          src="/close.svg"
          class="opacity-40 hover:opacity-100 cursor-pointer transition"
          @click="sneakersStore.toggleCartItem(props.item.id)"
        />
      </div>
    </div>
  </div>
</template>
