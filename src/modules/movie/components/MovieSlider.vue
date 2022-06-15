<template>
  <div>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :preloadImages="false"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :preload-images="false"
      lazy
    >
      <swiper-slide v-for="movie in slideMovies" :key="movie.id">
        <img
          class="w-full object-contain swiper-lazy"
          :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { getMovies } from '@/modules/movie/helpers/getMoviesOptions';
import { Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: 'MovieSlider',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    movies: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      slideMovies: [],
    };
  },
  setup() {
    const onSwiper = () => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [Lazy],
    };
  },
  async created() {
    let popularMovies = await getMovies('popular');
    popularMovies = await popularMovies.splice(0, this.movies);
    this.slideMovies = popularMovies;
  },
};
</script>

<style scoped></style>
