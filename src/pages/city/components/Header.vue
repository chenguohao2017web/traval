<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    城市选择
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="less" scoped>
@import "~style/varibles.less";
.header {
  position: relative;
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background: @bgColor;
  font-size: 0.28rem;
  .back-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color:#fff;
  }
}
</style>
