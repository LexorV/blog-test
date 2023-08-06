<template>
  <main class="main">
    <div class="list-blog" v-loading="$store.state.loading">
      <ArticleCard v-for="article in $store.getters.paginationFilter(startPage, endPage)" :key="article.id" :article="article" />
    </div>
    <el-pagination
    layout="prev, pager, next"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    @prev-click="test1"
    @next-click="test2"
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
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        console.log(val)
        this.startPage = (val - 1) * 10
        this.endPage = this.startPage + 10
      },
      arrayPre (arrData) {
      const commonPage = Math.cail(arrData.length / 8)
      const newArr = []
      let countPage = 1
      for (let i = 0, b = 0, c = 3; i < commonPage; i++, b = c + 1, c += 4) {
        newArr.push({ page: countPage, pre: b, next: c })
        countPage++
      }
      return newArr
    },
    test1(e) {
      console.log(e)
    },
    test2(e) {
      console.log(e)
    }
    },
  mounted () {
    console.log(this.allPagesNow)
  }
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
