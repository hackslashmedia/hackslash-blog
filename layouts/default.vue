<template>
  <div class="site-container">
    <SiteHeader />
    <Nuxt />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '../components/layout/SiteHeader.vue';
import SiteFooter from '../components/layout/SiteFooter.vue';

export default {
  components: {
    SiteHeader,
    SiteFooter,
  }
}
</script>

<style>
.site-container {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
