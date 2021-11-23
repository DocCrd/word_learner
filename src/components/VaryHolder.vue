<template>
<div class="varyholder">
  <p class="wordholder">{{current.word}}</p>
  <VaryButton v-for="(vary, index) of current.variants" :key="index" :option="vary" />
</div>
</template>

<script>
// @ is an alias to /src
import VaryButton from './VaryButton.vue'
import {
  mapGetters
} from 'vuex'

export default {
  name: 'VaryHolder',
  computed: {
    ...mapGetters(['current'])
  },
  components: {
    VaryButton
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wordholder {
  font-size: 24px;
  font-weight: 800;
}
</style>
