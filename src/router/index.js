import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import Login from '@/views/Login.vue';
import NuovoOggetto from '@/views/NuovoOggetto.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },

  {
    path: '/',
    name: 'login',
    component: Login,
  },

  {
    path: '/nuovOggetto',
    name: 'nuovOggetto',
    component: NuovoOggetto,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
