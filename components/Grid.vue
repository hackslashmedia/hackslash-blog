<template>
  <div v-editable="blok" class="home-grid">
    <div :key="blok._uid" v-for="blok in blok.columns" class="home-grid__item">
      <component :blok="blok" :is="blok.component" />
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-grid {
    display: grid;
      grid-template-columns: 60% 1fr;
      column-gap: $spacer-5;
      row-gap: $spacer-3;
    &__item {
      
    }
  }
</style>