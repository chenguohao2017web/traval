<template>
  <div class="list" ref="list">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门</div>
        <div class="button-list">
          <div class="button-wrapper"
                v-for="item of hotCities"
                :key="item.id"
                @click="selectCity"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <p class="p"></p>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="(innerItem) of item" :key="innerItem.id"
           @click="selectCity">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
    {{letters}}
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import Bscroll from 'better-scroll'
export default {
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    letters () {
      const letters = []
      for (let key in this.cities) {
        letters.push(key)
      }
      return letters
    },
    ...mapGetters(['city'])
  },
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.list)
  },
  methods: {
    ...mapMutations({
      CHANGECITY: 'changeCity'
    }),
    selectCity (e) {
      this.CHANGECITY(e.target.innerText)
      this.$router.back()
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const el = this.$refs[this.letter][0]
        this.scroll.scrollToElement(el)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.list {
  overflow: hidden;
  position: absolute;
  top: 1.78rem;
  bottom: 0;
  width: 100%;
  .title {
    line-height: 0.44rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }
  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper {
      float: left;
      width: 33.33%;
      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        border-radius: 0.06rem;
        text-align: center;
        border: 0.02rem solid #ccc;
      }
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
.border-topbottom {
  &:before {
    border-color: #ccc;
  }
  &:after {
    border-color: #ccc;
  }
}
.border-bottom {
  &:before {
    border-color: #ccc;
  }
}
</style>
