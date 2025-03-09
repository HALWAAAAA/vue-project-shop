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
    class="relative border border-green-500 rounded-3xl p-8 cursor-pointer bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
  >
    <button-followed
      alt="image_follow"
      @toggle="sneakersStore.toggleFollowed(props.item.id)"
      :isFavorite="props.item.isFavorite"
    />
    <router-link :to="`/card/${props.item.id}`">
      <img :src="props.item.imageUrl" alt="Sneaker" />
      <p class="mt-2 text-lg text-gray-800">{{ props.item.title }}</p>
    </router-link>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Price:</span>
        <b class="text-lg">{{ props.item.price }}$</b>
      </div>
      <button-add-item
        alt="add to cart"
        @toggle="sneakersStore.toggleCartItem(props.item.id)"
        :isAdded="props.item.isAdded ?? false"
      />
    </div>

    <div
      class="flex justify-between pt-1 items-center"
      v-if="props.item.isAdded && props.item.currentQuantity >= 1"
    >
      <p class="text-gray-600">Quantity:</p>
      <BaseButton
        @click="sneakersStore.itemQuantityDecrement(props.item.id)"
        type="minus"
      >
      </BaseButton>
      <b class="text-lg">{{ props.item.currentQuantity }}</b>
      <BaseButton
        @click="sneakersStore.itemQuantityIncrement(props.item.id)"
        type="plus"
      >
      </BaseButton>
    </div>
  </div>
</template>
