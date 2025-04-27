<template>
  <div class="user-page">
    <h1>User Information</h1>
    <div v-if="user" class="user-info">
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <h2>Rented Items</h2>
      <ul>
        <li v-for="rental in user.rentals" :key="rental.id">
          {{ rental.itemName }} (from: {{ rental.startDate }} to {{ rental.endDate }})
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Loading user data...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import api from '@/services/api';

const route = useRoute();
const user = ref(null);

const fetchUser = async () => {
  try {
    const response = await api.get(`/users/${route.params.id}`);
    user.value = response.data;
  } catch (error) {
    console.error('Failed to load user:', error);
  }
};

onMounted(fetchUser);
</script>

<style scoped>
.user-page {
  padding: 2rem;
}
.user-info {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
}
.user-info p {
  margin: 0.5rem 0;
}
.user-info ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}
</style>
