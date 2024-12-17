<script setup>
import { storeToRefs } from 'pinia';
import { useSneakersStore } from '../store/state';
import FollowedCard from '../components/Followed/FollowedCard.vue';
import { onMounted } from 'vue';

const sneakersStore = useSneakersStore();
const { updateFollowed } = storeToRefs(sneakersStore);

onMounted(() => {
  sneakersStore.fetchItems();
});
</script>

<template>
  <div>
    <div v-if="sneakersStore.followedItems.length === 0">
      <p>Your followed is empty!</p>
    </div>
    <div v-else class="grid grid-cols-4 gap-5">
      <FollowedCard
        v-for="item in updateFollowed"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>
