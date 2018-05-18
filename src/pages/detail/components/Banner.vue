<template>
  <div class="BannerWrapper" >
    <div class="banner" @click="showGallary">
      <img :src="bannerImg" alt="" class="banner-img" >
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade>
      <detail-gallary v-show="gallaryShow"
                      @close="handleHideGallary"
                      :bannerImgs="bannerImgs"
      ></detail-gallary>
    </fade>
  </div>
</template>
<script>
import Fade from './Fade'
import detailGallary from './Gallary'
export default {
  name: 'detailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  components: {
    detailGallary,
    Fade
  },
  data () {
    return {
      gallaryShow: false
    }
  },
  methods: {
    showGallary () {
      this.gallaryShow = true
    },
    handleHideGallary () {
      console.log('close')
      this.gallaryShow = false
      console.log(this.gallaryShow)
    }
  }
}
</script>
<style lang="less" scoped>
.banner {
  position: relative;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    position: absolute;
    display: flex;
    line-height: .6rem;
    bottom: 0;
    width: 100%;
    left: 0;
    color: #fff;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.8));
    .banner-title {
      flex: 1;
      padding-left: .2rem;
    }
    .banner-number {
      width: 1rem;
      font-size: .24rem;
      text-align: center;
    }
  }
}
.p {
  height:1000px;
}
</style>
