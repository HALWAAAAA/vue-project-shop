<script setup>
import Drawer from './components/Drawer.vue';
import { onMounted, ref, watch, provide, computed } from 'vue';
import Header from './Header.vue';
import CardList from './components/CardList.vue';
import { storeToRefs } from 'pinia';
import { useSneakersStore } from './store/state';
import { useDrawerStore } from './Composable/useDrawer';
const drawerStore = useDrawerStore();
const sneakersStore = useSneakersStore();
const {items} = storeToRefs(sneakersStore)


watch(()=>sneakersStore.items, (newItems) =>{
  updateCartItems();
}, {deep: true});


const searchQuery = ref('');
const sortBy = ref('');

const updateCartItems = () => {
  sneakersStore.cartItems = items.value.filter((item) => item.isAdded);
};

const totalPrice = computed(() => {
  return parseFloat(
    sneakersStore.cartItems.reduce((acc, item) => acc + (item.price || 0), 0).toFixed(2)
  );
});

const vatTotal = computed(() => {
  return parseFloat((totalPrice.value * 1.05).toFixed(2));
});

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
};
watch([sortBy, searchQuery], applyFilters);

const onChangeSelect = (event) => {
  sortBy.value = event.target.value;
};
onMounted(() => {
  sneakersStore.fetchItems().then(()=>{
    applyFilters()
    updateCartItems()
  });
});
</script>

<template>
  <Drawer
    class="border border-pink-500"
    v-if="drawerStore.drawerOpenData"
    :vat-total="vatTotal"
  ></Drawer>
  <div
    class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-14 border border-purple-500"
  >
    <Header :total-price="totalPrice"></Header>

    <div class="p-10 border border-yellow-500">
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
        <CardList :items="items"></CardList>
      </div>
    </div>
  </div>
</template>
