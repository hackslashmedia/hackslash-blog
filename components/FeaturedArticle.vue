<template>
  <div v-editable="blok" class="featured-article">
    <div class="featured-article__image">
      <img :src="blok.image.filename" alt="" />
    </div>
    <div class="featured-article__content">
      <h2 class="">{{ blok.title }}</h2>
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
  .featured-article {
    background-color: $white;
    &__image {

    }
    &__content {
      padding: $spacer-4;
    }
  }
</style>