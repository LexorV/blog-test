<template>
  <el-card class="card">
    <div class="in-card">
    <h3>{{ article.title }}</h3>
    <p>Дата создания: {{ dateNew }} </p>
    <p>Анонс: {{ article.preview }} </p>
    <p>Описание: {{ article.description }} </p>
    <img v-if="article.image" class="card-picture" :src="article.image" alt="photo" />
    <el-button v-if="!isFull" class="button" @click="openArticle(article.id)" size="large" type="primary">Открыть</el-button>
  </div>
  </el-card>
</template>

<script lang="ts" >
import { generatorDate } from '~/helpers/helpers'
export default {
  data() {
    return {
      date: ""
    }
  },
  props: {
    article: {
      type: Object,
      default: () => ({})
    },
    isFull: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    generatorDate,
    openArticle ( id:number) {
      this.$router.push(`/${id}`)
    },
  },
  computed: {
    dateNew: function () {
      return generatorDate(this.article.createdAt)
    }

  }

}
</script>

<style scoped>
p {
  margin: 10px 0;
}

.card {
  padding: 10px;
  height: 800px;
  width: 40%;
  box-sizing: border-box;
}
.in-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.button {
  margin: auto;
}

.card-picture {
  margin-top: 10px;
  image-rendering: crisp-edges;
  width: 100%;
  height: 300px;
  object-fit: contain;
  overflow: hidden;
}

@media screen and (max-width: 1100px) {
  .card-picture {
    height: 300px;
  }

  .card {
    height: 700px;
  }
}

@media screen and (max-width: 700px) {
  .card {
    width: 90%;
    height: 650px;
  }

  .card-picture {
    height: 200px;
  }
}

@media screen and (max-width: 400px) {
  .card {
    height: 600px;
  }
}</style>
