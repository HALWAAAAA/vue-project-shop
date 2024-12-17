import { ref } from 'vue';

const drawerOpenData = ref(false);

export const useDrawer = () => {
  const closeDrawer = () => {
    drawerOpenData.value = false;
  };

  const openDrawer = () => {
    drawerOpenData.value = true;
  };

  return {
    drawerOpenData,
    closeDrawer,
    openDrawer,
  };
};
