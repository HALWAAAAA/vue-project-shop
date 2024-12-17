import { defineStore } from 'pinia';
import { db, collection, getDocs } from '../assets/firebase';
import { computed, ref } from 'vue';

export const useSneakersStore = defineStore('sneakers', () => {
  const items = ref([]);
  const cartItems = ref([]);
  const followedItems = ref([]);

  async function fetchItems() {
    const querySnapshot = await getDocs(collection(db, 'items'));
    const localFollowed =
      JSON.parse(localStorage.getItem('followedItems')) || [];
    const localCart = JSON.parse(localStorage.getItem('cartItems')) || [];

    followedItems.value = localFollowed;
    cartItems.value = localCart;
    items.value = querySnapshot.docs.map((doc) => {
      const item = { id: doc.id, ...doc.data() };
      return {
        ...item,
        isFavorite: localFollowed.includes(item.id),
        isAdded: localCart.includes(item.id),
      };
    });
  }

  function localSetItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function updateList(id, list) {
    const itemIdx = list.value.indexOf(id);

    if (itemIdx === -1) {
      list.value.push(id);
    } else {
      list.value.splice(itemIdx, 1);
    }
  }

  function updateItemProperty(id, property) {
    const targetItem = items.value.find((item) => item.id === id);

    if (targetItem) {
      targetItem[property] = !targetItem[property];
    }
  }

  function addToCart(id) {
    updateList(id, cartItems);
    updateItemProperty(id, 'isAdded');
    localSetItem('cartItems', cartItems.value);
  }

  function toggleFollowed(id) {
    updateList(id, followedItems);
    updateItemProperty(id, 'isFavorite');
    localSetItem('followedItems', followedItems.value);
  }

  const updateCartItems = computed(() => {
    return items.value.filter((item) => cartItems.value.includes(item.id));
  });

  const updateFollowed = computed(() => {
    return items.value.filter((item) => followedItems.value.includes(item.id));
  });

  const totalPrice = computed(() => {
    return parseFloat(
      items.value
        .filter((item) => cartItems.value.includes(item.id))
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
    updateCartItems,
    addToCart,
    totalPrice,
    vatTotal,
    updateFollowed,
    followedItems,
    toggleFollowed,
  };
});
