<script setup>
import IconCheck from '../icons/IconCheck.vue';

const props = defineProps({
  isAdded: Boolean,
});
const emit = defineEmits(['toggle']);
</script>

<template>
  <div class="flex items-center">
    <button
      type="button"
      class="button"
      @click="emit('toggle')"
      :class="{ 'button--added': isAdded }"
    >
      <span class="button__text">{{ isAdded ? 'Added!' : 'Add Item' }}</span>
      <span class="button__icon">
        <svg
          v-if="!isAdded"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke="currentColor"
          height="24"
          fill="none"
          class="svg"
        >
          <line y2="19" y1="5" x2="12" x1="12"></line>
          <line y2="12" y1="12" x2="19" x1="5"></line>
        </svg>
        <IconCheck v-else />
      </span>
    </button>
  </div>
</template>

<style scoped>
.button {
  position: relative;
  width: 150px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #34974d;
  background-color: #3aa856;
}

.button,
.button__icon,
.button__text {
  transition: all 0.3s;
}

.button .button__text {
  transform: translateX(30px);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
}

.button .button__icon {
  position: absolute;
  transform: translateX(109px);
  height: 100%;
  width: 39px;
  background-color: #34974d;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button .svg {
  width: 30px;
  stroke: #fff;
}

.button:hover {
  background: #34974d;
}

.button:hover .button__text {
  color: transparent;
}

.button:hover .button__icon {
  width: 148px;
  transform: translateX(0);
}

.button:active .button__icon {
  background-color: #2e8644;
}

.button:active {
  border: 1px solid #2e8644;
}
.button--added {
  background: #2e8644 !important;
  border: 1px solid #2e8644;
  transform: scale(1.05);
}

.button--added .button__icon {
  background-color: #2e8644;
}
</style>
