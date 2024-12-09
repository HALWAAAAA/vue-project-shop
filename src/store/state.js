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

  function addToCart(id) {
    const itemIdx = cartItems.value.indexOf(id);

    if (itemIdx === -1) {
      cartItems.value.push(id);
    } else {
      cartItems.value.splice(itemIdx, 1);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
    const targetItem = items.value.find((item) => item.id === id);

    if (targetItem) {
      targetItem.isAdded = !targetItem.isAdded;
    }
  }

  function toggleFollowed(id) {
    const itemIdx = followedItems.value.indexOf(id);

    if (itemIdx === -1) {
      followedItems.value.push(id);
    } else {
      followedItems.value.splice(itemIdx, 1);
    }

    localStorage.setItem('followedItems', JSON.stringify(followedItems.value));
    const targetItem = items.value.find((item) => item.id === id);

    if (targetItem) {
      targetItem.isFavorite = !targetItem.isFavorite;
    }
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
