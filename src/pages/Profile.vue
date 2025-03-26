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
  <div class="px-4 sm:px-6 mb-6 max-w-screen-lg mx-auto">
    <ProfileHeader />
    <div class="bg-white shadow p-4 sm:p-6 rounded-lg">
      <div
        class="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6"
      >
        <h2
          class="text-xl sm:text-xl font-bold text-gray-900 mb-4 text-center sm:text-left"
        >
          Recent Orders
        </h2>
        <ButtonClearHistory
          @click="sneakersStore.clearHistory()"
          class="w-full sm:w-auto mt-2 sm:mt-0"
        />
      </div>

      <div v-if="sneakersStore.historyItems.length === 0">
        <p
          class="text-lg sm:text-2xl text-gray-900 p-4 bg-gray-100 rounded-lg shadow-md text-center"
        >
          There are no recent orders
        </p>
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
