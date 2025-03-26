<script setup>
import { onMounted, ref, watch } from 'vue';
import CardList from '../components/Card/CardList.vue';
import { storeToRefs } from 'pinia';
import { useSneakersStore } from '../store/state';

const sneakersStore = useSneakersStore();
const { items } = storeToRefs(sneakersStore);
const searchQuery = ref('');
const sortBy = ref('');
const displayedItems = ref([]);

const applyFilters = () => {
  let filteredItems = items.value;

  if (searchQuery.value) {
    filteredItems = filteredItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  if (sortBy.value) {
    const order = sortBy.value.startsWith('-') ? -1 : 1;
    const key = sortBy.value.replace('-', '');
    filteredItems = filteredItems
      .slice()
      .sort((a, b) => (a[key] - b[key]) * order);
  }

  displayedItems.value = filteredItems;
};

watch([sortBy, searchQuery], applyFilters);

const onChangeSelect = (event) => {
  sortBy.value = event.target.value;
};

onMounted(async () => {
  await sneakersStore.fetchItems();
  applyFilters();
});
</script>

<template>
  <div
    class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full max-w-screen-lg mx-auto"
  >
    <h2 class="text-2xl sm:text-3xl font-bold whitespace-nowrap">
      All sneakers
    </h2>
    <div
      class="flex flex-col md:flex-row gap-3 w-full sm:w-auto items-center sm:items-stretch"
    >
      <select
        @change="onChangeSelect"
        class="py-2 px-3 border rounded-md outline-none text-sm sm:text-base w-full sm:w-40"
      >
        <option value="title">By name</option>
        <option value="-price">By price(hight)</option>
        <option value="price">By price(low)</option>
      </select>
      <div class="relative w-full sm:max-w-[220px] lg:max-w-[250px]">
        <img
          src="/search.svg"
          alt="Image search"
          class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
        <input
          type="search"
          placeholder="Search..."
          class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400 w-full"
          v-model="searchQuery"
        />
      </div>
    </div>
  </div>

  <div class="sm:mt-10 mt-6 max-w-screen-lg mx-auto px-4">
    <CardList :items="displayedItems" :isLoading="sneakersStore.isLoading" />
  </div>
</template>
