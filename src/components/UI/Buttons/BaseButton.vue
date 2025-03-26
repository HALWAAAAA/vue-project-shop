<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['plus', 'minus'].includes(value),
  },
});

const emit = defineEmits(['click']);

const buttonClasses = computed(() => ({
  button: true,
  'button--plus': props.type === 'plus',
  'button--minus': props.type === 'minus',
}));
</script>

<template>
  <button :class="buttonClasses" @click="emit('click')">
    {{ props.type === 'plus' ? '+' : '-' }}
  </button>
</template>

<style scoped>
.button {
  width: 40px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  color: #5f5f5f;
  cursor: pointer;
  transition: transform 0.1s ease-in-out, background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  background-color: #fff;
}

.button:active {
  transform: scale(0.9);
}
.button--plus:hover {
  color: #1d6eb7;
  transform: scale(1.1);
}
.button--plus {
  color: #3498db;
}

.button--minus {
  color: #e74c3c;
}
.button--minus:hover {
  color: #c0392b;
  transform: scale(1.1);
}
.button:active {
  transform: scale(0.9);
}
@media (max-width: 640px) {
  .button {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
}
</style>
