<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="recommend-item border-bottom"
          v-for="(item,index) of recommendList"
          :key="index"
      >
        <img class="item-img" :src="item.imgUrl" alt="" >
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Recommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
      recommend: [
        {
          imgUrl: require('@/assets/swiper.jpg'),
          title: '必须付出代价',
          desc:
            '防静电会计分录看手机打开了附近考虑的设计开发垃圾的数量会计分录看电视剧李开复'
        },
        {
          imgUrl: require('@/assets/swiper.jpg'),
          title: '必须付出代价',
          desc:
            '防静电会计分录看手机打开了附近考虑的设计开发垃圾的数量会计分录看电视剧李开复'
        },
        {
          imgUrl: require('@/assets/swiper.jpg'),
          title: '必须付出代价',
          desc:
            '防静电会计分录看手机打开了附近考虑的设计开发垃圾的数量会计分录看电视剧李开复'
        },
        {
          imgUrl: require('@/assets/swiper.jpg'),
          title: '必须付出代价',
          desc:
            '防静电会计分录看手机打开了附近考虑的设计开发垃圾的数量会计分录看电视剧李开复'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import "~style/varibles.less";
.recommend {
  &-title {
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
    font-size: 0.28rem;
  }
  &-item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    .item-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: 0.1rem;
    }
    .item-info {
      flex: 1;
      padding: 0.1rem;
      min-width: 0;
      .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
      }
      .item-desc {
        line-height: 0.4rem;
        font-size: 0.28rem;
        color: #666;
        .ellipsis;
      }
      .item-btn {
        margin-top: 0.15rem;
        background: #ff9300;
        padding: 0.1rem 0.2rem;
        border-radius: 0.06rem;
        border: none;
        color: #fff;
        font-size: 0.28rem;
      }
    }
  }
}
</style>
