<template>
  <div class="row">
    <div v-for="article in articles" class="col-3">
      <iap-article-card :article="article" image="images" title="title"></iap-article-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        {images: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80', title: 'Test article', desc: 'Test desc'},
        {images: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80', title: 'Test article', desc: 'Test desc'}
      ]
    }
  }
}
</script>