import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import UserPage from '@/views/UserPage.vue';

const routes = [
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
