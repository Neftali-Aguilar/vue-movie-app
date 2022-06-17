<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>
<style lang="css">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translate(-30%);
}
</style>
