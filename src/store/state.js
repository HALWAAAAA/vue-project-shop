import { defineStore } from 'pinia';
import { db, collection, getDocs } from '../assets/firebase';
import { computed, ref } from 'vue';
import CartItem from '../components/Cart/CartItem.vue';

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
      const cartItem = localCart.find((cart) => cart.id === item.id);
      return {
        ...item,
        isFavorite: localFollowed.includes(item.id),
        isAdded: !!cartItem,
        currentQuantity: cartItem ? cartItem.currentQuantity : 0,
      };
    });
  }

  function localSetItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function updateList(id, list, type = 'id') {
    const itemIdx = list.value.findIndex((item) =>
      type === 'object' ? item.id === id : item === id
    );

    if (itemIdx === -1) {
      if (type === 'object') {
        list.value.push({ id, currentQuantity: 1 });
      } else {
        list.value.push(id);
      }
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

  function updateItemQuantity(id) {
    const targetItem = items.value.find((item) => item.id === id);
    const cartItem = cartItems.value.find((cart) => cart.id === id);

    if (cartItem) {
      targetItem.currentQuantity = cartItem.currentQuantity;
    } else {
      targetItem.currentQuantity = 0;
    }
  }

  function itemQuantityIncrement(id) {
    const targetItem = items.value.find((item) => item.id === id);
    const cartItem = cartItems.value.find((cart) => cart.id === id);

    targetItem.currentQuantity += 1;
    cartItem.currentQuantity = targetItem.currentQuantity;

    localSetItem('cartItems', cartItems.value);
  }

  function itemQuantityDecrement(id) {
    const targetItem = items.value.find((item) => item.id === id);
    const cartItem = cartItems.value.find((cart) => cart.id === id);

    if (targetItem.currentQuantity > 1) {
      targetItem.currentQuantity -= 1;
    } else if (targetItem.currentQuantity === 1) {
      toggleCartItem(id);
    }
    cartItem.currentQuantity = targetItem.currentQuantity;
    localSetItem('cartItems', cartItems.value);
  }

  function toggleCartItem(id) {
    updateList(id, cartItems, 'object');
    updateItemProperty(id, 'isAdded');
    localSetItem('cartItems', cartItems.value);
    updateItemQuantity(id);
  }

  function toggleFollowed(id) {
    updateList(id, followedItems);
    updateItemProperty(id, 'isFavorite');
    localSetItem('followedItems', followedItems.value);
  }

  const updateCartItems = computed(() => {
    return items.value.filter((item) =>
      cartItems.value.some((cart) => cart.id === item.id)
    );
  });

  const updateFollowed = computed(() => {
    return items.value.filter((item) => followedItems.value.includes(item.id));
  });

  const totalPrice = computed(() => {
    return parseFloat(
      items.value
        .filter((item) => cartItems.value.some((cart) => cart.id === item.id))
        .reduce((acc, item) => {
          const quantity = item.currentQuantity || 1;
          return acc + (item.price || 0) * quantity;
        }, 0)
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
    toggleCartItem,
    totalPrice,
    vatTotal,
    updateFollowed,
    followedItems,
    toggleFollowed,
    itemQuantityIncrement,
    itemQuantityDecrement,
  };
});
