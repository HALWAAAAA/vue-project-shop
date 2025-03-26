<script setup>
import IconLeft from '../icons/IconLeft.vue';
import IconRight from '../icons/IconRight.vue';
</script>

<template>
  <button
    class="relative inline-flex items-center justify-center px-2 sm:px-4 py-2 text-sm sm:text-base overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
  >
    <span
      class="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-600 rounded-full group-hover:w-56 group-hover:h-56"
    ></span>
    <span class="absolute bottom-0 left-0 h-full -ml-2">
      <IconLeft />
    </span>
    <span class="absolute top-0 right-0 w-12 h-full -mr-3">
      <IconRight />
    </span>
    <span
      class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
    ></span>
    <span class="relative text-sm sm:text-base font-semibold"
      >Delete order history</span
    >
  </button>
</template>
