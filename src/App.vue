<script setup>
import Drawer from './components/Drawer.vue';
import { onMounted, ref, watch, provide, computed, reactive } from 'vue';
import Header from './Header.vue';
import CardList from './components/CardList.vue';
import { db, collection, getDocs, doc, updateDoc } from './assets/firebase';

const drawerOpen = ref(false);
const closeDrawer = () => {
  drawerOpen.value = false;
};
const openDrawer = () => {
  updateCartItems();
  drawerOpen.value = true;
};

const items = ref([]);
const searchQuery = ref('');
const displayedItems = ref([]);
const sortBy = ref('');
provide('cartActions', {
  closeDrawer,
  openDrawer,
});

const addToCart = async (id) => {
  try {
    const itemIdx = items.value.findIndex((item) => item.id === id);
    if (itemIdx !== -1) {
      const item = items.value[itemIdx];
      const reverse = !items.value[itemIdx].isAdded;
      const itemRef = doc(db, 'items', id);
      await updateDoc(itemRef, { isAdded: reverse });
      item.isAdded = reverse;
      updateCartItems();
    }
  } catch (error) {
    console.error('Error toggling item in cart:', error);
  }
};
provide('addToCart', addToCart);

const removeFromCart = async (id) => {
  try {
    const itemRef = doc(db, 'items', id);
    await updateDoc(itemRef, { isAdded: false });
    const itemIdx = items.value.findIndex((item) => item.id === id);
    if (itemIdx !== -1) {
      items.value[itemIdx].isAdded = false;
      updateCartItems();
    }
  } catch (error) {
    console.error('Error removing item from cart:', error);
  }
};

provide('removeFromCart', removeFromCart);

const fetchItems = async () => {
  const querySnapshot = await getDocs(collection(db, 'items')); // Отримуємо колекцію "items"
  items.value = querySnapshot.docs.map((doc) => doc.data());
  applyFilters();
  updateCartItems();
};

const cartItems = ref([]);
const updateCartItems = () => {
  cartItems.value = items.value.filter((item) => item.isAdded);
};
provide('cartItems', cartItems);
const totalPrice = computed(() => {
  return parseFloat(
    cartItems.value.reduce((acc, item) => acc + (item.price || 0), 0).toFixed(2)
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
  displayedItems.value = filteredItems;
};
watch([sortBy, searchQuery], applyFilters);

const onChangeSelect = (event) => {
  sortBy.value = event.target.value;
};
onMounted(fetchItems);
</script>

<template>
  <Drawer
    class="border border-pink-500"
    v-if="drawerOpen"
    :vat-total="vatTotal"
  ></Drawer>
  <div
    class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-14 border border-purple-500"
  >
    <Header @open-drawer="openDrawer" :total-price="totalPrice"></Header>

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
        <CardList :items="displayedItems"></CardList>
      </div>
    </div>
  </div>
</template>
