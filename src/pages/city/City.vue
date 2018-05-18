<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet @change="letterClick" :cities="cities"></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('../../../../static/mock/city.json').then(({ data }) => {
        if (data.ret) {
          const result = data.data
          this.cities = result.cities
          this.hotCities = result.hotCities
        }
      })
    },
    letterClick (letter) {
      this.letter = letter
    }
  }
}
</script>
<style lang="less" scoped>

</style>
