<template>
  <div class="home-page">
    <Hero />
    <HomeNav />
    <page
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
    class="home-page__content" />
  </div>
</template>
 
<script>
import Hero from '../components/layout/Hero.vue';
import HomeNav from '../components/layout/HomeNav.vue';

export default {
  components: {
    Hero,
    HomeNav,
  },
  data () {
    return {
      story: { content: {} }
    }
  },
  mounted () {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge()
 
      // Listen to Storyblok's Visual Editor event
      storyblokInstance.on(['input', 'published', 'change'], (event) => {
        if (event.action == 'input') {
          if (event.story.id === this.story.id) {
            this.story.content = event.story.content
          }
        } else {
          this.$nuxt.$router.go({
            path: this.$nuxt.$router.currentRoute,
            force: true,
          })
        }
      })
    }, (error) => {
      console.error(error)
    })
  },
  async fetch(context) {
    // Loading reference data - Articles in our case
    if(context.store.state.articles.loaded !== '1') {
 
      let articlesRefRes = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'articles/', version: 'draft' })
      context.store.commit('articles/setArticles', articlesRefRes.data.stories)
      context.store.commit('articles/setLoaded', '1')
    }
  },
  asyncData (context) {
    // We are getting only the draft version of the content in this example.
    // In real world project you should ask for correct version of the content
    // according to the environment you are deploying to.
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
 
    const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path
 
    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi.get(`cdn/stories/${fullSlug}`, {
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  }
}
</script>

 <style lang="scss" scoped>
  .home-page {
    position: absolute;
    width: 100%;
    &__content {
      position: relative;
      padding: 2rem;
    }
  }
 </style>