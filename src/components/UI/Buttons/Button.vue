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
  <div class="btn">
    <button :class="buttonClasses" @click="emit('click')">
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 2em;
  background-color: #171717;
  border-radius: 8px;
  padding: 0;
  box-sizing: border-box;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.1s ease-in-out;
}

/* Стилі кнопки "мінус" */
.button--minus {
  background-color: #c7c3c0;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 5px, #ffffff 1px 1px 2px 0px inset,
    #c7c3c0 -1.5px -1.5px 4px 0px inset;
}

.button--minus:active {
  box-shadow: inset 0.5px 0.5px 3px #000000, #c7c3c0 -1.5px -1.5px 4px 0px inset;
}

/* Стилі кнопки "плюс" */
.button--plus {
  background-color: #c7c3c0;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 5px, #ffffff 1px 1px 2px 0px inset,
    #c7c3c0 -1.5px -1.5px 4px 0px inset;
}

.button--plus:active {
  box-shadow: inset 0.5px 0.5px 3px #000000, #c7c3c0 -1.5px -1.5px 4px 0px inset;
}

.button svg {
  fill: #5f5f5f;
  width: 15px;
  height: 15px;
  transition: 0.1s ease-in-out;
}

.button:active svg {
  scale: 0.95;
}
</style>
