<template>
  <MovieSlider :movies="5"/>
  <div class="px-5">
    <TopMovies :movies="10"/>
  </div>
  <div class="px-5">
    <TopTrailersMovies :movies="5"/>
  </div>
</template>
<script>
import MovieSlider from '@/modules/movie/components/MovieSlider.vue';
import TopMovies from '@/modules/movie/components/TopMovies.vue';
import TopTrailersMovies from '@/modules/movie/components/TopTrailersMovies.vue';

export default {
  name: 'MovieHome',
  components: {
    MovieSlider,
    TopMovies,
    TopTrailersMovies,
  },
};

</script>
