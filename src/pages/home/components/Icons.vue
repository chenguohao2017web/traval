<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="(item,index) of page" :key="index">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      icons: [
        {
          imgUrl: require('@/assets/swiper.jpg'),
          desc: '热门'
        },
        {
          imgUrl: require('@/assets/swiper.jpg'),
          desc: '热门'
        },
        {
          imgUrl: require('@/assets/swiper.jpg'),
          desc: '热门'
        },
        {
          imgUrl: require('@/assets/swiper.jpg'),
          desc: '热门'
        },
        {
          imgUrl: require('@/assets/swiper.jpg'),
          desc: '热门'
        },
        {
          imgUrl: require('@/assets/swiper.jpg'),
          desc: '热门'
        },
        {
          imgUrl: require('@/assets/swiper.jpg'),
          desc: '热门'
        },
        {
          imgUrl: require('@/assets/swiper.jpg'),
          desc: '热门'
        },
        {
          imgUrl: require('@/assets/swiper.jpg'),
          desc: '热门'
        },
        {
          imgUrl: require('@/assets/swiper.jpg'),
          desc: '热门'
        }
      ],
      swiperOption: {}
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        // 获取当前item属于第几页 0-8第一页
        const page = Math.floor(index / 8) // => 0 | 1
        // 如果 pages[0] | pages[1] 不存在 那么就创建一个新数组  最后会创建两个二维数组
        if (!pages[page]) {
          pages[page] = []
        }
        // 最后分别将对应的item添加到数组里 如 page=0 那么就添加进去pages[0]这个二维数组里
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="less" scoped>
@import "~style/varibles.less";
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    height: 0;
    width: 25%;
    padding-bottom: 25%;
    .icon-img {
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon-img-content {
        display: block;
        margin: 0 auto;
        margin-top:.1rem;
        height:100%;
      }
    }
    .icon-desc {
      position: absolute;
      width: 100%;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: #333;
      .ellipsis;
    }
  }
}
</style>
