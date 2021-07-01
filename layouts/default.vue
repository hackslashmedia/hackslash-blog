<template>
  <div>
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
</style>
