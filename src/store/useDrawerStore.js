
import { defineStore } from 'pinia';
export const useDrawerStore = defineStore('drawer', {
  state:() => ({
    drawerOpenData: false,
  }),
  actions: {
   closeDrawer() {
      this.drawerOpenData = false;
    },
    openDrawer() {
      this.drawerOpenData = true;
    }
  }
});
    
