<template>
  <nav id="ilavista-admin-panel-left-menu" v-bind:style="nav_styles">

    <div class="top-box">
      <router-link to="/" v-if="logo">
        <img :src="logo">
      </router-link>
      <span v-bind:style="link_styles">Панель администрирования</span>
    </div>


    <ul class="list-group">
      <router-link v-for="link in links" v-bind:key="link.title" v-bind:style="link_styles"
                   class="list-group-item list-group-item-action" :to="link.href">
        <span>{{ link.title }}</span>
      </router-link>
    </ul>
  </nav>

</template>


<script>
export default {
  props: {

    links: {
      type: Array,
      required: false
    },

    logo: {
      type: String,
      required: false
    },

    background_color: {
      type: String,
      default: '#0d0d0d'
    },

    text_color: {
      type: String,
      default: '#eaeaea'
    },

  },

  computed: {
    link_styles() {
      return {
        'background-color': this.background_color,
        'color': this.text_color,
      }
    },
    nav_styles() {
      return {
        'background-color': this.background_color
      }
    },
  }
}
</script>
