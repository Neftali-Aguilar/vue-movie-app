<template>
  <div>
    <h1>Movie Card</h1>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
