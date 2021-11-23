<template>
<div class="settings">
  <SettingsPanel />
</div>
</template>
<script>
// @ is an alias to /src
import SettingsPanel from '@/components/SettingsPanel.vue'
import {
  mapActions
} from 'vuex'

export default {
  name: 'About',
  components: {
    SettingsPanel
  },
  beforeCreate: function() {
    document.querySelector('#app').className = 'app-settings';
  },
  methods: {
    ...mapActions(['updateVarys', 'updateCurrentWord'])
  }
}
</script>
<style>
.settings {
  text-align: -webkit-center;
  text-align: center;
}
</style>
