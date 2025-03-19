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
  width: auto;
  max-width: 110px;
  height: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #34974d;
  background-color: #3aa856;
  border-radius: 8px;
  padding: 5px 10px;
  margin-top: 5px;
}

.button,
.button__icon,
.button__text {
  transition: all 0.3s;
}

.button .button__text {
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  flex-grow: 1;
}

.button .button__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button .svg {
  width: 20px;
  stroke: #fff;
}

.button:hover {
  background: #34974d;
}

.button:hover .button__text {
  color: transparent;
}

.button:hover .button__icon {
  width: 100%;
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

@media (max-width: 640px) {
  .button {
    height: 32px;

    max-width: 80px;
    padding: 4px 8px;
  }

  .button .svg {
    width: 18px;
  }

  .button .button__text {
    font-size: 12px !important;
  }
}

@media (max-width: 480px) {
  .button {
    height: 30px;
    max-width: 70px;
    padding: 3px 6px;
  }

  .button .svg {
    width: 16px;
  }

  .button .button__text {
    font-size: 11px !important;
  }
}

@media (max-width: 1024px) {
  .button {
    max-width: 90px;
    transform: none !important;
    font-size: 13px !important;
  }

  .button .button__text {
    font-size: 13px !important;
  }
}
</style>
