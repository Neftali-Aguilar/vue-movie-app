<template>
  <header class="container mx-auto py-5 drop-shadow-md shadow-black border-b-4">
    <div class="flex">
      <div class="w-3/12">

      </div>
      <div class="w-6/12 text-center">
        <h1>Movietime</h1>
      </div>
      <div class="w-3/12">

      </div>
    </div>
  </header>
  <MovieSlider/>
</template>

<script>
import getMovies from '@/modules/movie/helpers/getMoviesOptions';
import MovieSlider from '@/modules/movie/components/MovieSlider.vue';

export default {
  name: 'MovieLayout',
  components: { MovieSlider },
  data() {
    return {
      movies: null,
    };
  },
  methods: {
    async getTheMovies() {
      const response = await getMovies('popular');
      const { results } = response.data;
      this.movies = results
        .sort(() => Math.random() - 0.5)
        .splice(0, 3);
    },
  },
};
</script>

<style scoped>

</style>
