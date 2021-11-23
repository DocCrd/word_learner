<template>
<div class="about">
  <VaryHolder />
</div>
</template>
<script>
// @ is an alias to /src
import VaryHolder from '@/components/VaryHolder.vue'
import {
  mapActions
} from 'vuex'

export default {
  name: 'Quiz',
  beforeCreate: function() {
    document.querySelector('#app').className = 'app-quiz';
  },
  components: {
    VaryHolder
  },
  methods: {
    ...mapActions(['updateVarys', 'updateCurrentWord'])
  }
}
</script>
