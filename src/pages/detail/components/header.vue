<template>
  <div class="header" :style="opacityStyle">
    <router-link to="/" tag="div">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    景点详情
  </div>
</template>
<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.body.scrollTop
      if (top > 0) {
        let opacity = top / 150
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="less" scoped>
@import "~style/varibles.less";
.header {
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  font-size: .32rem;
  width: 100%;
  background: @bgColor;
  color: #fff;
  padding: .2rem;
  box-sizing: border-box;
  .header-abs-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    font-size: .4rem;
    height: 100%;
    padding-top: .2rem;
  }
}
</style>
