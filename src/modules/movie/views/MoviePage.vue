<template>
  <div v-if="movie">
    <div class="container mx-auto">
      <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" alt="" />
    </div>
    <div class="mt-96">
      {{ movie }}
    </div>
  </div>
</template>

<script>
import { getMovie } from '@/modules/movie/helpers/getMoviesOptions';

export default {
  name: 'MoviePage',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      movie: null,
      isLoading: false,
    };
  },
  async mounted() {
    const { data } = await getMovie(this.id);
    this.movie = data;
  },
};
</script>

<style scoped></style>
