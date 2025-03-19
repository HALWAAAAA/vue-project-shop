<script setup>
import { useSneakersStore } from '../../store/state';
import { computed, ref } from 'vue';

const sneakersStore = useSneakersStore();
const cvv = ref('');

const isFormValid = computed(() => {
  return cvv.value.trim().length > 2;
});

const placeOrder = () => {
  if (isFormValid.value) {
    sneakersStore.addToHistory();
  }
};
</script>

<template>
  <div
    class="flex-1 max-w-screen-md bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200"
  >
    <h2 class="text-xl sm:text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
      Shipping information
    </h2>

    <form class="space-y-4 sm:space-y-6" @submit.prevent="placeOrder">
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-800" for="name"
            >First name</label
          >
          <input
            id="name"
            placeholder="John"
            type="text"
            required
            class="input-field"
          />
        </div>
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-800" for="surname"
            >Last name</label
          >
          <input
            type="text"
            id="surname"
            placeholder="Simpson"
            required
            class="input-field"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-800" for="email"
          >Email</label
        >
        <input
          type="email"
          required
          id="email"
          placeholder="example@gmail.com"
          class="input-field"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-800" for="address"
          >Address</label
        >
        <input
          type="text"
          required
          id="address"
          placeholder="Al. Jerozolimskie 148"
          class="input-field"
        />
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex-1">
          <label for="city" class="block text-sm font-medium text-gray-800"
            >City</label
          >
          <input
            type="text"
            id="city"
            required
            placeholder="Warsaw"
            class="input-field"
          />
        </div>
        <div class="flex-1">
          <label for="postal" class="block text-sm font-medium text-gray-800"
            >Postal Code</label
          >
          <input
            placeholder="00-000"
            type="text"
            id="postal"
            required
            class="input-field"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-800" for="card"
          >Card number</label
        >
        <input
          type="text"
          id="card"
          required
          placeholder="0000 0000 0000 0000"
          class="input-field"
        />
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex-1">
          <label for="date" class="block text-sm font-medium text-gray-800"
            >Expiry Date</label
          >
          <input
            type="text"
            id="date"
            required
            placeholder="MM/YY"
            class="input-field"
          />
        </div>
        <div class="flex-1">
          <label for="cvv" class="block text-sm font-medium text-gray-800"
            >CVV</label
          >
          <input
            placeholder="000"
            type="text"
            id="cvv"
            v-model="cvv"
            required
            class="input-field"
          />
        </div>
      </div>

      <button type="submit" :disabled="!isFormValid" class="btn-submit">
        Place Order
      </button>
    </form>
  </div>
</template>

<style scoped>
.input-field {
  margin-top: 4px;
  display: block;
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  transition: border 0.2s;
}

.input-field:focus {
  border-color: #2563eb;
  outline: none;
}

.btn-submit {
  width: 100%;
  padding: 12px;
  font-weight: 600;
  color: white;
  background-color: #2563eb;
  border-radius: 8px;
  transition: background 0.2s;
}

.btn-submit:hover {
  background-color: #1d4ed8;
}

.btn-submit:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
}
</style>
