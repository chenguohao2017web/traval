<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市的主题
    </div>
    <router-link tag="div" to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapGetters(['city'])
  }
}
</script>
<style lang="less" scoped>
  @import "~style/varibles.less";
.header {
  display: flex;
  line-height: 0.86rem;
  height: 0.86rem;
  background: @bgColor;
  color: #fff;
  &-left {
    width: 0.64rem;
    float: left;
    .back-icon {
      text-align: center;
      font-size:.4rem;
    }
  }
  &-input {
    flex: 1;
    height: 0.64rem;
    line-height: .6rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: .2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }
  &-right {
    min-width: 1.24rem;
    padding:0 .05rem;
    float: right;
    text-align: center;
    .arrow-icon {
      margin-left: -.04rem;
      font-size: .24rem;
    }
  }
}
</style>
