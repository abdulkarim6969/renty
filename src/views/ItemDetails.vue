<!-- src/views/ItemDetail.vue -->
<template>
  <div class="item-detail">
    <div v-if="loading" class="loading">Loading item...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="detail-grid">
      <img
        :src="item.imageUrl"
        :alt="`Image of ${item.name}`"
        class="item-image"
      />
      <div class="item-info">
        <h1>{{ item.name }}</h1>
        <p>{{ item.description }}</p>
        <p><strong>Price per day:</strong> {{ item.pricePerDay}}</p>
        <p><strong>Available:</strong> {{ item.availableQuantity }}</p>

        <!-- Example date pickers for rental period -->
        <div class="date-select">
          <label for="start">From:</label>
          <input type="date" id="start" v-model="startDate" />
          <label for="end">To:</label>
          <input type="date" id="end" v-model="endDate" />
        </div>

        <button
          @click="rentItem"
          :disabled="!canRent"
          aria-label="Rent this item now"
          class="rent-button"
        >
          Rent Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import api from '@/services/api';

const route = useRoute();
const item = ref(null);
const loading = ref(true);
const error = ref(null);
const startDate = ref('');
const endDate = ref('');

// Fetch item details
const fetchItem = async () => {
  loading.value = true;
  try {
    const { data } = await api.get(`/items/${route.params.id}`);
    item.value = data;
  } catch (err) {
    error.value = 'Could not load item details.';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

// Computed to enable the Rent button only when dates are valid
const canRent = computed(() => {
  return item.value && startDate.value && endDate.value && startDate.value <= endDate.value;
});

// Post a rental request
const rentItem = async () => {
  if (!canRent.value) return;
  try {
    await api.post('/rentals', {
      itemId: item.value.id,
      startDate: startDate.value,
      endDate: endDate.value,
    });
    alert('Rental confirmed!');
  } catch (err) {
    console.error(err);
    alert('Failed to rent item.');
  }
};

onMounted(fetchItem);
</script>

<style scoped>
.item-detail {
  padding: 2rem;
}
.loading, .error {
  font-size: 1.2rem;
  text-align: center;
}
.detail-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.item-image {
  flex: 1 1 300px;
  max-width: 400px;
  object-fit: cover;
  border-radius: 8px;
}
.item-info {
  flex: 1 1 300px;
}
.date-select {
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
}
.rent-button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.rent-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
