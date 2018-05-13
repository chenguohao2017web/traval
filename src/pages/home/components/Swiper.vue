<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of swiperList" :key="index">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiper: [
        {
          imgUrl: require('@/assets/swiper.jpg')
        },
        {
          imgUrl: require('@/assets/swiper.jpg')
        },
        {
          imgUrl: require('@/assets/swiper.jpg')
        },
        {
          imgUrl: require('@/assets/swiper.jpg')
        }
      ]
    }
  }
}
</script>

<style>
.swiper-img {
  width: 100%;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #fff;
}
</style>

<style lang="less" scoped>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.13%;
  background: #ccc;
}
</style>
