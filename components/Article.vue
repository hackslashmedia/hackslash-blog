<template>
  <div
    v-editable="blok"
  >
    <h1>{{ blok.title }}</h1>
    <img :src="blok.feature_image.filename" :alt="blok.alt_text" />
    <p>{{ blok.intro}}</p>
    <rich-text-renderer
      :document="blok.body_text"
    />
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