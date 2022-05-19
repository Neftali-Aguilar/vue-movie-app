<template>
  <div class="h-screen flex justify-center items-center text-center">
    <h1 class="text-3xl text-red-500 px-10 md:px-5">Welcome to my Movie App</h1>
  </div>
</template>

<script>
export default {
  name: 'introMovie',
  mounted() {
    setTimeout(() => {
      this.$router.push('movies');
    }, 2000);
  },
};
</script>

<style scoped>

</style>
