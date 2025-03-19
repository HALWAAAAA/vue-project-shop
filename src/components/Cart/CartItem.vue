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
    class="flex items-center border border-slate-200 p-3 sm:p-4 rounded-xl gap-3 sm:gap-4 shadow-sm bg-white"
  >
    <img
      :src="props.item.imageUrl"
      alt="Sneaker"
      class="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-lg"
    />
    <div class="flex flex-col flex-1">
      <p class="text-sm sm:text-base font-medium text-gray-800">
        {{ props.item.title }}
      </p>
      <div class="flex justify-between mt-2 items-center">
        <b class="text-gray-900">{{ props.item.price }}$</b>

        <div
          class="flex items-center gap-2 sm:gap-3"
          v-if="props.item.isAdded && props.item.currentQuantity >= 1"
        >
          <BaseButton
            @click="sneakersStore.itemQuantityDecrement(props.item.id)"
            class="border rounded px-1 sm:px-2 hover:bg-gray-200"
            type="minus"
          >
          </BaseButton>
          <b class="text-gray-800 text-sm sm:text-base">{{
            props.item.currentQuantity
          }}</b>
          <BaseButton
            class="border rounded px-1 sm:px-2 hover:bg-gray-200"
            @click="sneakersStore.itemQuantityIncrement(props.item.id)"
            type="plus"
          >
          </BaseButton>
        </div>

        <img
          src="/close.svg"
          class="opacity-50 hover:opacity-100 cursor-pointer transition w-7 sm:w-8"
          @click="sneakersStore.toggleCartItem(props.item.id)"
        />
      </div>
    </div>
  </div>
</template>
