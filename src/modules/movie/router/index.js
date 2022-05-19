export default {
  name: 'movies',
  component: () => import(/* webpackChunkName: "movieLayout" */ '@/modules/movie/layout/MovieLayout.vue'),
  children: [
    {
      path: '',
      name: 'movie-home',
      component: () => import(/* webpackChunkName: "movie-home" */ '@/modules/movie/views/MovieHome.vue'),
    },
  ],
};
