<template>
    <div class="hero" v-editable="blok">
        <img :src="blok.hero_image.filename" :alt="blok.hero_image.alt" />
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
    .hero {
    }
</style>