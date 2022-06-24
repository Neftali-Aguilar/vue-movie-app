<template>
  <div v-if="!isLoading">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="10"
      :pagination="{ clickable: true }"
      loop
    >
      <swiper-slide v-for="movie in slideMovies" :key="movie.id">
        <router-link :to="{name: 'movie.show', params: {id: movie.id}}">
          <img
            class="w-full object-cover h-80 swiper-lazy"
            :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`"
            alt=""
          />
          <h3
            class="
            absolute bottom-0 bg-red-500 text-white p-3 w-full text-center text-sm">
            {{
              movie.title
            }}</h3>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { getMovies } from '@/modules/movie/helpers/getMoviesOptions';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
// eslint-disable-next-line
import 'swiper/css/pagination';
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
      isLoading: true,
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
      modules: [Pagination],
    };
  },
  async created() {
    this.isLoading = true;
    let popularMovies = await getMovies('popular');
    popularMovies = await popularMovies.splice(0, this.movies);
    this.slideMovies = popularMovies;
    this.isLoading = false;
  },
};
</script>
