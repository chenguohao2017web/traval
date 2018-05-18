<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
html {
  font-size: 50px;
  body {
    font-size:.24rem;
  }
}
</style>
