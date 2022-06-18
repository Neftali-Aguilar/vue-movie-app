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
</template>

<script>
import { getCharacterInfo, getCharacterPhotos } from '@/modules/movie/helpers/getMoviesOptions';

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
      character: null,
      characterPhotos: [],
    };
  },
  methods: {
    async loadCharacterInfo() {
      this.isLoading = true;
      const { data: chararterInfo } = await getCharacterInfo(this.id);
      this.character = chararterInfo;
      const { data: characterPhotos } = await getCharacterPhotos(this.id);
      const fewPhotos = characterPhotos.profiles.slice(0, 5);
      this.characterPhotos = fewPhotos;
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
