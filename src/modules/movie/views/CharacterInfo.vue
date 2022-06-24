<template>
  <div v-if="isLoading" class="w-screen h-screen text-center flex items-center justify-center">
    <img src="https://tradinglatam.com/wp-content/uploads/2019/04/loading-gif-png-4.gif" alt="">
  </div>
  <section v-if="character" class="container flex mx-auto p-5">
    <div class="w-4/12 pr-2">
      <img
        :src="`https://image.tmdb.org/t/p/original/${character.profile_path}`"
        :alt="character.name"
        class="rounded-3xl"
      >
    </div>
    <div class="w-8/12">
      <h1 class="text-xl font-bold mb-3">{{ character.name }}</h1>
      <ul class="font-semibold">
        <li>Date of birth: <span class="font-thin">{{ character.birthday }}</span></li>
        <li>Place of birth: <span class="font-thin">{{ character.place_of_birth }}</span></li>
      </ul>
    </div>
  </section>
  <section class="container mx-auto p-5">
    <h2 class="text-xl uppercase mb-2 w-full mb-2">Photos</h2>
    <div class="flex overflow-x-scroll">
      <img
        v-for="photo in characterPhotos"
        :key="photo.id"
        :src="`https://image.tmdb.org/t/p/original/${photo.file_path}`"
        class="w-28 mr-5 rounded-xl"
        :alt="character.name">
    </div>
  </section>
  <section class="container mx-auto p-5">
    <h2 class="text-xl uppercase mb-2 w-full mb-2">Movies</h2>
    <div class="flex overflow-x-scroll">
      <div v-for="topCharacterMovie in topCharacterMovies"
           :key="topCharacterMovie.id" class="mr-2">
        <router-link :to="{name: 'movie.show', params: {id: topCharacterMovie.id } }"
                     class="relative h-44 w-28 block overflow-y-hidden">
          <img
            :src="`https://image.tmdb.org/t/p/original/${topCharacterMovie.poster_path}`"
            class="absolute top-0 left-0 object-cover rounded-xl"
            :alt="topCharacterMovie.title">
        </router-link>
        <router-link :to="{name: 'movie.show', params: {id: topCharacterMovie.id } }"
                     class="block">
          <span class="text-sm">{{ topCharacterMovie.title }}</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import {
  getCharacterInfo,
  getCharacterPhotos,
  getCharacterMovies,
} from '@/modules/movie/helpers/getMoviesOptions';

export default {
  name: 'CharacterInfo',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isLoading: true,
      character: null,
      characterPhotos: [],
      topCharacterMovies: [],
    };
  },
  methods: {
    async loadCharacterInfo() {
      this.isLoading = true;
      const { data: characterInfo } = await getCharacterInfo(this.id);
      this.character = characterInfo;

      const { data: characterPhotos } = await getCharacterPhotos(this.id);
      this.characterPhotos = characterPhotos.profiles.slice(0, 5);
      let { data: characterMovies } = await getCharacterMovies(this.id);
      characterMovies = characterMovies.cast;
      const topCharacterMovies = characterMovies.filter((movie) => movie.vote_average > 7.0);
      this.topCharacterMovies = topCharacterMovies;
      console.log(topCharacterMovies);
      this.isLoading = false;
    },
  },
  created() {
    this.loadCharacterInfo();
  },
};
</script>

<style scoped>

</style>
