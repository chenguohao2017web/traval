<template>
  <div class="weekend">
    <div class="weekend-title">我们去哪游玩呢？</div>
    <div class="weekend-item border-bottom"
        v-for="(item,index) of weekendList"
        :key="index"
    >
      <img class="item-img" :src="item.imgUrl" alt="" >
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'weekend',
  props: {
    weekendList: Array
  },
  data () {
    return {
      weekend: [
        {
          imgUrl: require('@/assets/swiper.jpg'),
          title: '水上世界',
          desc: '附近考虑到解放路口的交流空间打开了房间'
        },
        {
          imgUrl: require('@/assets/swiper.jpg'),
          title: '水上世界',
          desc: '附近考虑到解放路口的交流空间打开了房间'
        },
        {
          imgUrl: require('@/assets/swiper.jpg'),
          title: '水上世界',
          desc: '附近考虑到解放路口的交流空间打开了房间'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.weekend {
  &-title {
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
    font-size: 0.28rem;
  }
  &-item {
    .item-img {
      width: 100%;
    }
    .item-info {
      padding: 0.2rem;
      .item-title {
        line-height: 0.5rem;
        font-size: 0.32rem;
      }
      .item-desc {
        line-height: 0.5rem;
        font-size: 0.28rem;
        color: #666;
      }
    }
  }
}
</style>
