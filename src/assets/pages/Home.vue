<script setup>
import { onMounted, ref, watch } from 'vue';
import CardList from '../../components/Card/CardList.vue';
import { storeToRefs } from 'pinia';
import { useSneakersStore } from '../../store/state';

const sneakersStore = useSneakersStore();
const { items } = storeToRefs(sneakersStore);

watch(
  () => sneakersStore.items,
  (newItems) => {
    sneakersStore.updateCartItems();
  },
  { deep: true }
);

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

onMounted(() => {
  sneakersStore.fetchItems().then(() => {
    applyFilters();
    sneakersStore.updateCartItems();
    sneakersStore.updateFollowed();
  });
});
</script>

<template>
  <div class="flex justify-between items-center">
    <h2 class="text-3xl font-bold mb-8">All sneakers</h2>
    <div class="flex gap-4">
      <select
        @change="onChangeSelect"
        class="py-2 px-3 border rounded-md outline-none"
      >
        <option value="title">By name</option>
        <option value="-price">By price(hight)</option>
        <option value="price">By price(low)</option>
      </select>
      <div class="relative">
        <img
          src="/search.svg"
          alt="Image search"
          class="absolute left-3 top-3"
        />
        <input
          type="search"
          placeholder="Search..."
          class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400"
          v-model="searchQuery"
        />
      </div>
    </div>
  </div>

  <div class="mt-10 border border-orange-500">
    <CardList :items="displayedItems" />
  </div>
</template>
