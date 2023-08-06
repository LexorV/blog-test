<template>
  <main class="main">
    <div class="list-blog " >
      <ArticleCard v-for="article in $store.getters.paginationFilter(startPage, endPage)" :key="article.id" :article="article" />
    </div>
      <el-pagination
    layout="prev, pager, next"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :total="this.$store.state.blog.length">
  </el-pagination>
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
      startPage: 0,
      endPage: 10
    }
  },
  computed: {
    allPagesNow: function () {
      return Math.ceil(this.$store.state.blog.length)
    }

  },
  methods: {
      handleCurrentChange(val) {
        this.startPage = (val - 1) * 10
        this.endPage = this.startPage + 10
      },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
}
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
