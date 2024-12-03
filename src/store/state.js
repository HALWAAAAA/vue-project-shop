import { defineStore } from 'pinia';
import { db, collection, getDocs } from '../assets/firebase';

export const useSneakersStore = defineStore('sneakers', {
  state: () => ({
    items: [],
    cartItems: [],
  }),
  actions: {
    async fetchItems() {
      const localData = JSON.parse(localStorage.getItem('items'));
      if (localData && localData.length > 0) {
        this.items = localData;
      } else {
        const querySnapshot = await getDocs(collection(db, 'items'));
        this.items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      }
      localStorage.setItem('items', JSON.stringify(this.items));
    },
    updateSneakersDate(id, newAttributes) {
      const index = this.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.items[index] = { ...this.items[index], ...newAttributes };
        localStorage.setItem('items', JSON.stringify(this.items));
      }
    },
    addToCart(id) {
      const itemIdx = this.items.findIndex((item) => item.id === id);
      if (itemIdx !== -1) {
        const currentItem = this.items[itemIdx];
        const reverse = !currentItem.isAdded;
        this.updateSneakersDate(id, { isAdded: reverse });
      }
    },
    updateCartItems() {
      this.cartItems = this.items.filter((item) => item.isAdded);
    },
  },
  getters: {
    totalPrice: (state) => {
      return parseFloat(
        state.cartItems
          .reduce((acc, item) => acc + (item.price || 0), 0)
          .toFixed(2)
      );
    },
    vatTotal:(state) => {
      return parseFloat((state.totalPrice * 1.05).toFixed(2));
    }
}
})