<template>
  <div>
    <div class="list" v-for="(item,index) of list" :key="index">
      <div class="title border-bottom">{{item.title}}</div>
      <div v-if="item.children" class="children">
        <detail-list :list="item.children">{{item.title}}</detail-list>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'detailList',
  props: {
    list: Array
  }
}
</script>
<style lang="less" scoped>

.title {
  line-height: .4rem;
  padding:0 .2rem
}
.children {
  padding: 0 .2rem;
}
</style>
