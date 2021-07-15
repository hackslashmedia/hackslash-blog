import Vue from 'vue'
import Page from '~/components/Page.vue'
import Grid from '~/components/Grid.vue'
import FeaturedArticle from '~/components/FeaturedArticle.vue'
import FeaturedArticles from '~/components/FeaturedArticles.vue'
import FeaturedArticlesGrid from '~/components/FeaturedArticlesGrid.vue'
import ArticleTeaser from '~/components/ArticleTeaser.vue'
 
Vue.component('page', Page)
Vue.component('grid', Grid)
Vue.component('feature-article', FeaturedArticle)
Vue.component('featured-articles', FeaturedArticles)
Vue.component('featured-articles-grid', FeaturedArticlesGrid)
Vue.component('article-teaser', ArticleTeaser)