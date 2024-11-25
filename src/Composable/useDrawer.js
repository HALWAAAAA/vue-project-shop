import { ref } from 'vue';
import { defineStore } from 'pinia';
export const useDrawerStore = defineStore('drawer', ()=>{
  const drawerOpenData = ref(false)
  const closeDrawer = () => {
    drawerOpenData.value = false;
  };
  const openDrawer = () => {
    
    drawerOpenData.value = true;
  };
  return {drawerOpenData,openDrawer, closeDrawer };
});
    
