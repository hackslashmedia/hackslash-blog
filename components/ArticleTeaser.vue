<template>
  <nuxt-link
    :to="articleLink"
    class="">
    <img :src="articleImage.feature_image.filename" />
    <h2 class="">
      {{ articleContent.name }}
    </h2>
    <p class="">
      {{ articleContent.intro }}
    </p>
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
 
<style>
.article-teaser:hover {
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
}
</style>