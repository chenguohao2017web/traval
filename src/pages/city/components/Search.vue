<template>
  <div>
    <div class="search">
      <input class="search-input" v-model="keyWord" type="text" placeholder="输入城市名字或者拼音">
    </div>
    <div class="search-content" v-show="hasKeyWord" ref="content">
      <ul>
        <li class="search-item border-bottom" v-for="(item,index) of list" :key="index" @click="selectCity">
          {{item.name}}
        </li>
        <li v-show="hasList" class="search-item border-bottom">
          没有找到匹配
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasList () {
      return !this.list.length
    },
    hasKeyWord () {
      return this.keyWord
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.content)
  },
  methods: {
    selectCity (e) {
      this.CHANGECITY(e.target.innerText)
      this.$router.back()
    },
    ...mapMutations({
      CHANGECITY: 'changeCity'
    })
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let key in this.cities) {
          this.cities[key].forEach((item) => {
            if ((item.spell.indexOf(this.keyWord) > -1) || (item.name.indexOf(this.keyWord) > -1)) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>
<style lang="less" scoped>
@import "~style/varibles.less";
.search {
  height: 0.72rem;
  background: @bgColor;
  padding:.1rem;
  .search-input {
    height:.64rem;
    border: none;
    border-radius: 0.06rem;
    text-align: center;
    font-size: 0.24rem;
    box-sizing:border-box;
    width:100%;
    padding:0 .1rem;
  }
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top:1.76rem;
  width:100%;
  bottom:0;
  background:#eee;
  .search-item {
    line-height: .64rem;
    padding-left: .2rem;
    background:#fff;
    color:#666
  }
}
</style>
