<template>
  <div>
    <swiper
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="movie in movies" :key="movie.id">
        <img class="w-full object-contain" :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import getMovies from '@/modules/movie/helpers/getMoviesOptions';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';

export default {
  name: 'MovieSlider',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      movies: [],
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],

    };
  },
  async mounted() {
    const response = await getMovies('popular');
    const results = response;
    this.movies = results;
  },
};
</script>

<style scoped>

</style>
