<script setup>
import Login from './views/Login.vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
watch(route, (to) => {
  console.log('Route changed to:', to.fullPath);
});
</script>

<template>
  <router-view />
</template>

<style>
 
</style>