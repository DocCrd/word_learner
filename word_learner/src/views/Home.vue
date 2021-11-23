<template>
<div class="home">
  <img alt="Vue logo" src="../assets/logo.png" class="logo">
  <StartingPage msg="Добро пожаловать!" />
</div>
</template>

<script>
// @ is an alias to /src
import StartingPage from '@/components/StartingPage.vue'
import {
  mapGetters
} from 'vuex'

export default {
  name: 'Home',
  data: function() {
    return {
      cash_msg: 'Найден кэш, вы желаете доучить слова из прошлой сессии?'
    }
  },
  beforeCreate: function() {
    document.querySelector('#app').className = 'app-home';
  },
  mounted: function() {
    if (this.aboutCash.wanted) {
      this.checkIfAnyCash()
      if (this.aboutCash.any_cash) {
        if (confirm(this.cash_msg)) {
          this.perform_restore()
          this.update_current_word()
        }
      }
      this.aboutCash.wanted = false
    }
  },
  methods: {
    checkIfAnyCash: function() {
      this.$store.commit('anyCash')
    },
    perform_restore: function() {
      this.$store.commit('restoreCash')
    },
    update_current_word: function() {
      this.$store.commit('updateWord')
    }
  },
  computed: {
    ...mapGetters(['aboutCash']),
  },
  components: {
    StartingPage
  }
}
</script>
<style scoped>
.logo {
  height: 20%;
  width: 20%;
}

@media screen and (max-width: 450px) {
  .logo {
    height: 50%;
    width: 50%;
  }
}

.home {
  text-align: -webkit-center;
}
</style>
