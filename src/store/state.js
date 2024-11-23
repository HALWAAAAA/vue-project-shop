import { defineStore } from 'pinia';
import { db, collection, getDocs } from '../assets/firebase';
import { watch } from 'vue';

export const useSneakersStore = defineStore('sneakers', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('items')) || [],
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
  },
});
