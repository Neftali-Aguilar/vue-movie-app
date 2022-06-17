<template>
  <div class="my-10">
    <h2 class="text-3xl mb-5">Trailers</h2>
    <swiper
      :slides-per-view="2"
      :space-between="10"
      :loop="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="{ videos } in trailers" :key="videos.id">
        <a
          v-for="video in videos.slice(0, 1)"
          class="block w-full"
          :href="`https://www.youtube.com/watch?v=${video.key}`"
          :key="video.id"
          target="_blank"
        >
          <img
            class="object-cover"
            :src="`https://img.youtube.com/vi/${video.key}/0.jpg`"
            :alt="`${video.key}`"
          />
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { getMovies, getTrailers } from '@/modules/movie/helpers/getMoviesOptions';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: 'TopTrailersMovies',
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
      trailers: [],
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
    const trailers = await getTrailers(topRated);
    this.trailers = trailers;
  },
};
</script>

<style scoped></style>
