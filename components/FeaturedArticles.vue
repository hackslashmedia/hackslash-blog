<template>
  <div v-editable="blok">
    <h2>{{ blok.title }}</h2>
    <ul>
      <li v-for="article in sortedArticles" :key="article._uid">
        <article-teaser
          v-if="article.content"
          :article-link="article.full_slug"
          :article-image="article.content"
          :article-content="article.content"/>
        <p v-else>This content loads on save. <strong>Save the entry & reload.</strong></p>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    sortedArticles() {
      // Load reference data/content from store
      const featuredArticles = this.$store.state.articles.articles.filter((article) => {
        return this.blok.articles.includes(article.uuid)
      })
 
      // Enable the ordering of the article previews
      featuredArticles.sort((a, b) => {
        return this.blok.articles.indexOf(a.uuid) - this.blok.articles.indexOf(b.uuid);
      })
 
      return featuredArticles
    }
  }
}
</script>