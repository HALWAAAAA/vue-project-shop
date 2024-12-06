<script setup>
import { useSneakersStore } from '../../store/state';
import FollowedCard from './FollowedCard.vue';
import { onMounted, watch } from 'vue';

const sneakersStore = useSneakersStore();

watch(
  () => sneakersStore.items,
  (newItems) => {
    sneakersStore.updateCartItems();
    sneakersStore.updateFollowed();
  },
  { deep: true }
);

onMounted(() => {
  sneakersStore.fetchItems().then(() => {
    sneakersStore.updateFollowed();
    sneakersStore.updateCartItems();
  });
});
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <FollowedCard
      v-for="item in sneakersStore.followedItems"
      :key="item.id"
      :item="item"
    />
  </div>
</template>
