<script setup>
import Drawer from './components/Drawer/Drawer.vue';
import Header from './Header.vue';
import { useDrawer } from './components/Composable/useDrawer';
import { RouterView } from 'vue-router';

const { drawerOpenData } = useDrawer();
</script>

<template>
  <Drawer class="border border-pink-500" v-if="drawerOpenData" />
  <div
    class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-14 border border-purple-500"
  >
    <Header />
    <div class="p-10 border border-yellow-500">
      <RouterView />
    </div>
  </div>
</template>
