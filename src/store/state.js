import { defineStore } from 'pinia';
import { db, collection, getDocs } from '../assets/firebase';
import { computed, ref } from 'vue';

export const useSneakersStore = defineStore('sneakers', () => {
  const items = ref([]);
  const cartItems = ref([]);
  const followedItems = ref([]);

  async function fetchItems() {
    const localData = JSON.parse(localStorage.getItem('items'));

    if (localData && localData.length > 0) {
      items.value = localData;
    } else {
      const querySnapshot = await getDocs(collection(db, 'items'));
      items.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    }

    localStorage.setItem('items', JSON.stringify(items.value));
  }

  function updateSneakersDate(id, newAttributes) {
    const index = items.value.findIndex((item) => item.id === id);

    if (index !== -1) {
      items.value[index] = { ...items.value[index], ...newAttributes };
      localStorage.setItem('items', JSON.stringify(items.value));
    }
  }

  function addToCart(id) {
    const itemIdx = items.value.findIndex((item) => item.id === id);

    if (itemIdx !== -1) {
      const currentItem = items.value[itemIdx];
      const reverse = !currentItem.isAdded;
      updateSneakersDate(id, { isAdded: reverse });
    }
  }

  function updateCartItems() {
    cartItems.value = items.value.filter((item) => item.isAdded);
  }

  function toggleFollowed(id) {
    const itemIdx = items.value.findIndex((item) => item.id === id);

    if (itemIdx !== -1) {
      const currentItem = items.value[itemIdx];
      const reverse = !currentItem.isFavorite;
      updateSneakersDate(id, { isFavorite: reverse });
    }
  }

  function updateFollowed() {
    followedItems.value = items.value.filter((item) => item.isFavorite);
  }

  const totalPrice = computed(() => {
    return parseFloat(
      cartItems.value
        .reduce((acc, item) => acc + (item.price || 0), 0)
        .toFixed(2)
    );
  });

  const vatTotal = computed(() => {
    return parseFloat((totalPrice.value * 1.05).toFixed(2));
  });
  return {
    items,
    cartItems,
    fetchItems,
    updateSneakersDate,
    updateCartItems,
    addToCart,
    totalPrice,
    vatTotal,
    updateFollowed,
    followedItems,
    toggleFollowed,
  };
});
