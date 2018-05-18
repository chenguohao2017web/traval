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
import {mapGetters} from 'vuex'
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
      weekendList: [],
      currentCity: '',
      first: false
    }
  },
  mounted () {
    this.getData()
  },
  computed: {
    ...mapGetters(['city'])
  },
  methods: {
    getData () {
      this.currentCity = this.city
      axios.get(`../../../static/mock/index.json`, {
        params: {
          city: this.city
        }
      }).then(({ data }) => {
        if (data.ret) {
          const result = data.data
          this.swiperList = result.swiperList
          this.iconList = result.iconList
          this.recommendList = result.recommendList
          this.weekendList = result.weekendList
        }
      })
    }
  },
  activated () {
    // 当keep alive 存在的时候，不会再执行mounted函数，会走 activeted 里重新获取数据
    if (this.currentCity !== this.city) {
      this.currentCity = this.city
      this.getData()
    }
  }
}
</script>
<style lang="less" scoped>

</style>
