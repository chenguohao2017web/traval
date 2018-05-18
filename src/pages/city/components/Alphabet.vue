<template>
  <ul class="alphabet">
    <li class="item" v-for="(item,key) of cities"
                      :key="key"
                      @click="handleClick(key)"
                      @touchstart.prevent="handleTouchStart"
                      @touchmove.prevent="handleTouchMove"
                      @touchend.prevent="handleTouchEnd"
                      :ref="key"
    >{{key}}</li>
  </ul>
</template>
<script>
export default {
  props: {
    cities: Object
  },
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  methods: {
    handleClick (key) {
      this.$emit('change', key)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const startY = this.$refs['A'][0].offsetTop
          const currentClientY = e.touches[0].clientY
          const index = ((currentClientY - startY - 89) / 20) | 0
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="less" scoped>
@import "~style/varibles.less";
.alphabet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 1.78rem;
  bottom: 0;
  width: 0.4rem;
  .item {
    text-align: center;
    line-height: 0.4rem;
    color: @bgColor;
    font-weight: 600;
    font-size: 0.28rem;
  }
}
</style>
