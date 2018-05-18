<template>
  <div class="gallary" @click="handleClike">
    <div class="slide-wrapper">
      <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of bannerImgs" :key="index">
        <img class="swiper-img" :src="item" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailGallary',
  props: {
    bannerImgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          observer: true,
          observeParents: true
        }
      }
    }
  },
  methods: {
    handleClike () {
      this.$emit('close')
    }
  }
}
</script>
<style>
.gallary .swiper-pagination-bullet {
  background: #fff;
}
.gallary .swiper-pagination-fraction,.swiper-pagination-fraction > span{
  color:#fff;
}
.gallary .swiper-container {
  overflow: inherit;
}
.gallary .swiper-pagination {
  transform: translate3d(0, 1rem, 0);
}

</style>

<style lang="less" scoped>
.gallary {
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 0;
  background: #000;
  display: flex;
  flex-direction: column; //设置主轴沿着垂直方向，默认水平从左到右
  justify-content: center; //设置主轴对齐位置
  .swiper-wrapper {
    .swiper-img {
      width: 100%;
    }
  }
}
</style>
