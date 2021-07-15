<template>
  <nuxt-link :to="articleLink" class="">
    <div class="article-teaser">
      <div class="article-teaser__image">
        <img :src="articleImage.feature_image.filename" />
      </div>
      <div class="article-teaser__body">
        <h2 class="article-teaser__headline">
          {{ articleContent.name }}
        </h2>
        <p class="">
          {{ articleContent.intro }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>
 
<script>
export default {
  props: {
    articleContent: {
      type: Object,
      required: true
    },
    articleLink: {
      type: String,
      required: true
    },
    articleImage: {
      type: String,
      required: true,
    }
  }
}
</script>
 
<style lang="scss">
  .article-teaser {
    background: $white;
    &__body {
      padding: $spacer-3;
    }
  }
</style>