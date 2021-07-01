<template>
    <div class="hero">
        <HeroBackground />
    </div>
</template>

<script>
import HeroBackground from '../images/HeroBackground.vue';
export default {
  components: {
    HeroBackground,
  },
}
</script>

<style lang="scss" scoped>
    .hero {
      position: absolute;
      width: 100%;
      top: 0;
      z-index: 0;
    }
</style>