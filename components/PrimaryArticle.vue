<template>
    <div v-editable="blok" class="primary-article">
        <h2>{{ blok.title }}</h2>
        <div>
      <div v-for="article in primaryArticle" :key="article._uid">
        <article-teaser
          v-if="article.content"
          :article-link="article.full_slug"
          :article-image="article.content"
          :article-content="article.content"/>
        <p v-else>This content loads on save. <strong>Save the entry & reload.</strong></p>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        blok: {
            type: Object,
            required: true
        },
    },
    computed: {
    sortedArticles() {
      // Load reference data/content from store
      const primaryArticle = this.$store.state.articles.articles.filter((article) => {
        return this.blok.articles.includes(article.uuid)
      })
 
      // Enable the ordering of the article previews
      primaryArticle.sort((a, b) => {
        return this.blok.articles.indexOf(a.uuid) - this.blok.articles.indexOf(b.uuid);
      })
 
      return primaryArticle
    }
  }
};
</script>