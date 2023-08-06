<template>
  <div class="error-block">
    <h1 class="header">
      Ой!
    </h1>
    <h2 class="text-error">
      Статус: {{ error.statusCode }}
    </h2>
    <h2 v-if="error.statusCode === 404">
      Мы не смогли найти нужную вам страницу
    </h2>
    <h2 v-if="error.statusCode !== 404">
      Сообщение об ошибке: {{ error.message }}
    </h2>
  </div>
</template>

<script>

export default {
  props: {
    error: {
      type: Object, default: () => ({})
    }
  }
}
</script>

<style  scoped>
.error-block {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.header {
  margin-bottom: 44px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 128px;
line-height: 150px;
}
.text-error {
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 56px;

}

</style>
