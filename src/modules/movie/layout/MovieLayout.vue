<template>
  <header class="container mx-auto p-5 drop-shadow-md shadow-black border-b-4 fixed bg-white z-50">
    <div class="flex">
      <div class="w-3/12 my-auto">
        <button @click="goBack">Go Back</button>
      </div>
      <div class="w-6/12 my-auto text-center">
        <router-link :to="{ name: 'movie-home'}">
          <h1>Movietime</h1>
        </router-link>
      </div>
      <div class="w-3/12 my-auto"></div>
    </div>
  </header>
  <div class="container mx-auto pt-16">
    <div class="flex">
      <div class="w-full">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieLayout',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped></style>
