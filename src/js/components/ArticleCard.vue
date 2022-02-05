<template>
  <div id="ilavista-admin-panel-article-card" v-bind:style="styles">
    <img :src="article[image]" :alt="article[image]">
    <p>{{ article[title] }}</p>
    <p>{{ article[desc] }}</p>
  </div>
</template>

<script>
export default {
  props: {

    image: {
      type: String,
      default: 'image'
    },

    title: {
      type: String,
      default: 'title'
    },

    desc: {
      type: String,
      default: 'desc'
    },

    link: {
      type: String,
      default: 'link'
    },

    article: {
      type: Object,
      required: false
    },

    background_color: {
      type: String,
      default: '#2b2b2b'
    },

    text_color: {
      type: String,
      default: '#eaeaea'
    },

  },

  computed: {
    styles() {
      return {
        'background-color': this.background_color,
        'color': this.text_color,
      }
    },
  }

}
</script>