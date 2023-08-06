<template>
  <div class="main">
    <ArticleCard
      v-if="article"
      :key="article.id"
      :article="article"
      :is-full="true"
    />
  </div>
</template>
<script>
import ArticleCard from '~/components/ArticleCard.vue'
export default {
  components: {
    ArticleCard
  },
  data () {
    return {
      article: null,
    }
  },
  async mounted () {
    const { id } = this.$route.params
    const articleInStore = this.$store.getters.getCurrentArticle(id)
    this.article = articleInStore || await this.$axios.get(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`).then(res => res.data)
  },
}

</script>
<style  scoped>
.main {
  box-sizing: border-box;
  padding-top: 34px;
  margin-bottom: 120px;
  display: flex;
justify-content: center;
}
</style>
