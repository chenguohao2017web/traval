<template>
  <div class="detail">
    <detail-banner
      :bannerImg="bannerImg"
      :sightName="sightName"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <list :list="categoryList"></list>
    <router-link to="/" style="color:red; padding: .2rem">回到首页</router-link>
  </div>
</template>
<script>
import axios from 'axios'
import List from './components/List'
import detailHeader from './components/Header'
import detailBanner from './components/Banner'
export default {
  name: 'detail',
  components: {
    detailBanner,
    detailHeader,
    List
  },
  data () {
    return {
      bannerImg: '',
      sightName: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('../../../static/mock/detail.json').then(({data}) => {
        if (data.ret) {
          const result = data.data
          this.bannerImg = result.bannerImg
          this.sightName = result.sightName
          this.gallaryImgs = result.gallaryImgs
          this.categoryList = result.categoryList
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
