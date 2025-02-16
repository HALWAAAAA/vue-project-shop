<script setup>
import { storeToRefs } from 'pinia';
import ProfileHeader from '../components/Profile/ProfileHeader.vue';
import ProfileRecent from '../components/Profile/ProfileRecent.vue';
import { useSneakersStore } from '../store/state';
import ButtonClearHistory from '../components/UI/Buttons/ButtonClearHistory.vue';
const sneakersStore = useSneakersStore();
const { getItemsHistory } = storeToRefs(sneakersStore);
</script>

<template>
  <div class="p-6 mb-6">
    <ProfileHeader />
    <div class="bg-white shadow p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Recent Orders</h2>
        <ButtonClearHistory @click="sneakersStore.clearHistory()" />
      </div>

      <div v-if="sneakersStore.historyItems.length === 0">
        <p class="text-xl text-gray-900">There are no recent orders</p>
      </div>
      <div v-else>
        <ProfileRecent
          v-for="item in getItemsHistory"
          :item="item"
          :key="item.id"
        />
      </div>
    </div>
  </div>
</template>
