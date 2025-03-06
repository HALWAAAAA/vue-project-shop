<script setup>
import { useSneakersStore } from '../../store/state';
import ButtonFollowed from '../UI/Buttons/ButtonFollowed.vue';
import ButtonAddItem from '../UI/Buttons/ButtonAddItem.vue';
import ButtonPlus from '../UI/Buttons/ButtonPlus.vue';
import ButtonMinus from '../UI/Buttons/ButtonMinus.vue';
import Button from '../UI/Buttons/Button.vue';
import IconPlus from '../UI/icons/IconPlus.vue';
import IconMinus from '../UI/icons/IconMinus.vue';

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
        :isAdded="props.item.isAdded"
      />
    </div>

    <div
      class="flex justify-between pt-1 items-center"
      v-if="props.item.isAdded && props.item.currentQuantity >= 1"
    >
      <p class="text-gray-600">Quantity:</p>
      <Button
        @click="sneakersStore.itemQuantityDecrement(props.item.id)"
        class="border rounded px-1 hover:bg-gray-200"
        type="minus"
      >
        <IconMinus/>
      </Button>
      <b class="text-lg">{{ props.item.currentQuantity }}</b>
      <Button
        class="border rounded px-2 hover:bg-gray-200"
        @click="sneakersStore.itemQuantityIncrement(props.item.id)"
        type="plus"
      >
        <IconPlus/>
      </Button>
    </div>
  </div>
</template>
