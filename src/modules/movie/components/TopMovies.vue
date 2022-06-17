<template>
  <div class="my-10">
    <h2 class="text-3xl mb-5">Top Rated</h2>
    <swiper
      :slides-per-view="3"
      :space-between="10"
      :loop="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="movie in slideMovies" :key="movie.id">
        <router-link :to="{ name: 'movie.show', params: { id: movie.id } }">
          <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="" />
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { getMovies } from '@/modules/movie/helpers/getMoviesOptions';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: 'TopMovies',
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
    };
  },
  async created() {
    let topRated = await getMovies('top_rated');
    topRated = await topRated.splice(0, this.movies);
    this.slideMovies = topRated;
  },
};
</script>

<style scoped></style>
