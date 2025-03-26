<script setup>
import Drawer from './components/Drawer/Drawer.vue';
import Header from './Header.vue';
import { useDrawer } from './composables/useDrawer';
import { RouterView } from 'vue-router';

const { drawerOpenData } = useDrawer();
</script>

<template>
  <Drawer v-if="drawerOpenData" />
  <div
    class="w-full xs:w-4/5 max-w-screen m-auto bg-white rounded-xl shadow-xl mt-6 sm:mt-14"
  >
    <Header />
    <div class="sm:p-10 p-4">
      <RouterView />
    </div>
  </div>
</template>
