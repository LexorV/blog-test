<template>
  <el-container>
    <el-header class="header">
      <h1 class="heading">Blog</h1>
      <el-menu class="menu" default-active="/" mode="horizontal" :router=true>
        <el-menu-item route="/" index="/">All</el-menu-item>
      </el-menu>
    </el-header>
  </el-container>
</template>

<script lang="ts">
export default {
  name: 'headerMenu',
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin-bottom: 50px;
}

.menu {
  display: flex;
  justify-content: center;
  width: 100%;
}

.heading {
  margin: 0;
  width: 100%;
}

@media screen and (max-width: 450px) {
  .heading {
    font-size: 16px;
  }
}
</style>
