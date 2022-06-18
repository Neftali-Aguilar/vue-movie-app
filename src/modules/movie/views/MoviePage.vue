<template>
  <div v-if="isLoading">
    <h2>Cargando ...</h2>
  </div>
  <div v-if=" movie">
    <div class="container mx-auto">
      <div>
        <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
             :alt="movie.title"
             class="rounded-bl-3xl rounded-br-3xl"
        />
      </div>
      <div class="flex p-5">
        <div class="w-4/12">
          <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.title"
               class="rounded-xl relative -top-12 "/>
        </div>
        <div class="w-8/12 pl-3">
          <h1 class="font-bold">{{ movie.title }}</h1>
          <div class="flex py-1">
            <img class="min-w-fit mr-2 object-contain" src="../../../assets/icons/star.png"
                 alt="movie average">
            <h4>{{ movie.vote_average }}</h4>
          </div>
          <div class="flex overflow-x-scroll">
            <span
              v-for="genre in movie.genres"
              :key="genre.id"
              class="p-1 bg-gray-100 inline-block mx-2 text-gray-500 text-sm min-w-fit"
            >{{ genre.name }}</span>
          </div>
        </div>
      </div>
      <section class="flex p-5">
        <div class="w-full">
          <ul class="font-semibold">
            <li>Release date: <span class="font-thin">{{ movie.release_date }}</span></li>
            <li>Director: <span class="font-thin"></span></li>
            <li>Producer: <span class="font-thin"></span></li>
            <li>Box Office: <span class="font-thin"></span></li>
          </ul>
        </div>
      </section>
      <section class="flex p-5">
        <div class="w-full">
          <h2 class="text-xl uppercase mb-2">StoryLine</h2>
          <p class="font-light">{{ movie.overview }}</p>
        </div>
      </section>
      <section class="flex p-5">
        <div class="w-full">
          <h2 class="text-xl uppercase mb-2">Cast</h2>
          <div class="flex flex-row overflow-x-scroll">
            <router-link to=""
                         v-for="characters in movieCharacters" :key="characters.id"
            >
              <div class="w-32 mr-3">
                <img
                  :src="`https://image.tmdb.org/t/p/original/${characters.profile_path}`"
                  :alt="characters.name"
                  class="rounded-3xl"
                >
              </div>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { getMovie, getMovieCredits } from '@/modules/movie/helpers/getMoviesOptions';

export default {
  name: 'MoviePage',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      movie: null,
      movieCharacters: [],
      isLoading: true,
    };
  },
  methods: {
    async loadMovie() {
      this.isLoading = true;
      const { data: movie } = await getMovie(this.id);
      const movieCredits = await getMovieCredits(this.id);
      const { cast } = await movieCredits.data;
      const characters = cast.slice(0, 10);
      this.movie = movie;
      this.movieCharacters = characters;
      this.isLoading = false;
      console.log(characters);
    },
  },
  created() {
    this.loadMovie();
  },
  computed: {
    getMovieTime() {
      const time = (this.movie.runtime / 60);
      const hours = Math.floor(time);
      const minutes = (time - hours) * 60;
      return {
        hours,
        minutes: minutes.toFixed(0),
      };
    },
  },
  watch: {
    id() {
      this.loadMovie();
    },
  },
};
</script>

<style scoped></style>
