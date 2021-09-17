<template>
  <div id="ilavista-admin-panel-top-row"  v-bind:style="styles">

    <p v-if="title">{{ title }}</p>

  </div>
</template>

<script>
export default {
  props: {

    links: {
      type: Array,
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
    title() {
      if(this.$route.meta && this.$route.meta.title) return this.$route.meta.title;
    }
  }

}
</script>