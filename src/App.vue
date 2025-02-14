<script setup>
import Drawer from './components/Drawer/Drawer.vue';
import Header from './Header.vue';
import { useDrawer } from './composables/useDrawer';
import { RouterView } from 'vue-router';

const { drawerOpenData } = useDrawer();
</script>

<template>
  <Drawer v-if="drawerOpenData" />
  <div class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-14">
    <Header />
    <div class="p-10">
      <RouterView />
    </div>
  </div>
</template>
