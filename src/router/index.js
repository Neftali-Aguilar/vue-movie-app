import { createRouter, createWebHashHistory } from 'vue-router';
import movieRoutes from '@/modules/movie/router';
import introMovie from '@/views/introMovie.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: introMovie,
  },
  {
    path: '/movies',
    ...movieRoutes,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
