<template>
  <div class="home" ref="home">
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icons :iconList="iconList"></home-icons>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
import axios from 'axios'
// import BScroll from 'better-scroll'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('../../../static/mock/index.json').then(({ data }) => {
        if (data.ret) {
          const result = data.data
          this.swiperList = result.swiperList
          this.iconList = result.iconList
          this.recommendList = result.recommendList
          this.weekendList = result.weekendList
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
