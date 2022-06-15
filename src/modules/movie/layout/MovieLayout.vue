<template>
  <header class="container mx-auto py-5 drop-shadow-md shadow-black border-b-4">
    <div class="flex">
      <div class="w-3/12"></div>
      <div class="w-6/12 text-center">
        <h1>Movietime</h1>
      </div>
      <div class="w-3/12"></div>
    </div>
  </header>
  <MovieSlider :movies="10" />
  <div class="px-5">
    <TopMovies :movies="8" />
  </div>
  <div class="px-5">
    <TopTrailersMovies :movies="5" />
  </div>
</template>

<script>
import MovieSlider from '@/modules/movie/components/MovieSlider.vue';
import TopMovies from '@/modules/movie/components/TopMovies.vue';
import TopTrailersMovies from '@/modules/movie/components/TopTrailersMovies.vue';

export default {
  name: 'MovieLayout',
  components: {
    MovieSlider,
    TopMovies,
    TopTrailersMovies,
  },
};
</script>

<style scoped></style>
