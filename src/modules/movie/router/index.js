/* eslint-disable */
export default {
  name: 'movies',
  component: () => import(/* webpackChunkName: "movieLayout" */ '@/modules/movie/layout/MovieLayout.vue'),
  children: [
    {
      path: '',
      name: 'movie-home',
      component: () => import(/* webpackChunkName: "movie-home" */ '@/modules/movie/views/MovieHome.vue'),
    },
    {
      path: '/movies/:id',
      name: 'movie.show',
      component: () => import(/* webpackChunkName: "movie-page" */ '@/modules/movie/views/MoviePage.vue'),
      props: (route) => ({
        id: parseInt(route.params.id),
      }),
    },
    {
      path: '/character/:id',
      name: 'character.show',
      component: () => import(/* webpackChunkName: "character-page" */ '@/modules/movie/views/CharacterInfo.vue'),
      props: (route) => ({
        id: parseInt(route.params.id),
      }),
    },
  ],
};
