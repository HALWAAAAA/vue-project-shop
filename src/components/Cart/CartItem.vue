<script setup>
import { useSneakersStore } from '../../store/state';
import BaseButton from '../UI/Buttons/BaseButton.vue';

const sneakersStore = useSneakersStore();

const props = defineProps({
  item: Object,
});
</script>

<template>
  <div
    class="flex items-center border border-slate-200 p-4 rounded-xl gap-4 shadow-sm bg-white"
  >
    <img
      :src="props.item.imageUrl"
      alt="Sneaker"
      class="w-16 h-16 object-contain rounded-lg"
    />
    <div class="flex flex-col flex-1">
      <p class="text-base font-medium text-gray-800">{{ props.item.title }}</p>
      <div class="flex justify-between mt-2 items-center">
        <b class="text-gray-900">{{ props.item.price }}$</b>

        <div
          class="flex items-center gap-3"
          v-if="props.item.isAdded && props.item.currentQuantity >= 1"
        >
          <BaseButton
            @click="sneakersStore.itemQuantityDecrement(props.item.id)"
            class="border rounded px-1 hover:bg-gray-200"
            type="minus"
          >
          </BaseButton>
          <b class="text-gray-800">{{ props.item.currentQuantity }}</b>
          <BaseButton
            class="border rounded px-2 hover:bg-gray-200"
            @click="sneakersStore.itemQuantityIncrement(props.item.id)"
            type="plus"
          >
          </BaseButton>
        </div>

        <img
          src="/close.svg"
          class="opacity-50 hover:opacity-100 cursor-pointer transition"
          @click="sneakersStore.toggleCartItem(props.item.id)"
        />
      </div>
    </div>
  </div>
</template>
