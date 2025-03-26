<script setup>
import { useSneakersStore } from '../../store/state';
import ButtonFollowed from '../UI/Buttons/ButtonFollowed.vue';
import ButtonAddItem from '../UI/Buttons/ButtonAddItem.vue';
import BaseButton from '../UI/Buttons/BaseButton.vue';

const sneakersStore = useSneakersStore();

const props = defineProps({
  item: Object,
});
</script>

<template>
  <div
    class="relative border border-green-500 rounded-3xl p-6 sm:p-8 cursor-pointer bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between w-full"
  >
    <button-followed
      alt="image_follow"
      @toggle="sneakersStore.toggleFollowed(props.item.id)"
      :isFavorite="props.item.isFavorite"
      class="absolute top-2 right-2"
    />
    <router-link
      :to="`/card/${props.item.id}`"
      class="flex flex-col items-center"
    >
      <img
        :src="props.item.imageUrl"
        alt="Sneaker"
        class="max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[100%]"
      />
      <p class="mt-2 text-sm sm:text-base lg:text-lg  text-gray-800 text-center">
        {{ props.item.title }}
      </p>
    </router-link>

    <div class="flex flex-col smlg:flex-row justify-between mt-5 ">
      <div class="flex flex-col ">
        <span class="text-slate-400 text-xs sm:text-sm md:text-base">Price:</span>
        <b class="text-sm sm:text-lg">{{ props.item.price }}$</b>
      </div>
      <button-add-item
        alt="add to cart"
        @toggle="sneakersStore.toggleCartItem(props.item.id)"
        :isAdded="props.item.isAdded ?? false"
        
      />
    </div>

    <div
      class="flex justify-between pt-1 sm:pt-0 items-center gap-1"
      v-if="props.item.isAdded && props.item.currentQuantity >= 1"
    >
      <p class="text-gray-600 text-sm sm:text-base">Quantity:</p>
      <BaseButton
        @click="sneakersStore.itemQuantityDecrement(props.item.id)"
        type="minus"
        class="w-6 sm:w-8 h-6 sm:h-8"
      >
      </BaseButton>
      <b class="text-sm sm:text-lg">{{ props.item.currentQuantity }}</b>
      <BaseButton
        @click="sneakersStore.itemQuantityIncrement(props.item.id)"
        type="plus"
        class="w-6 sm:w-8 h-6 sm:h-8"
      >
      </BaseButton>
    </div>
  </div>
</template>