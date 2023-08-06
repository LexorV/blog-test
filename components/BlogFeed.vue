<template>
  <main>
    <div class="list-blog" v-loading="$store.state.loading">
      <ArticleCard v-for="article in $store.state.blog" :key="article.id" :article="article" />
    </div>
  </main>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue"
export default {
  name: 'BlogFeed',
  components: {
    ArticleCard
  },
  props: {
    msg: String
  },
  data() {
    return {
      testData: [],
    }
  },
  mounted () {
    console.log(this.$store.state.blog)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-blog {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen and (max-width: 700px) {
  .list-blog {
    flex-direction: column;
    align-items: center;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}

.example-showcase .el-loading-mask {
  z-index: 9;
}
</style>
