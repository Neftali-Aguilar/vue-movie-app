<template>
  <div>
    <swiper
      :slides-per-view="1"
      :space-between="20"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="movie in slideMovies" :key="movie.id">
        <router-link :to="{name: 'movie.show', params: {id: movie.id}}">
          <img
            class="w-full object-contain"
            :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`"
            alt=""
          />
          <h4>{{ movie.id }}</h4>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { getMovies } from '@/modules/movie/helpers/getMoviesOptions';
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
    const onSwiper = () => {
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
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
