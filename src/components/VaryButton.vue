<template>
<div class="varybutton">
  <button @click="check_answer" class="button-normal">{{option}}</button>
</div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'

export default {
  name: 'VaryButton',
  props: {
    option: {
      type: String
    }
  },
  computed: {
    ...mapGetters(['current'])
  },
  methods: {
    check_answer: function(value) {
      var delay = 1000
      if (value.target.innerText === this.current.meaning) {
        this.act_positive()
        value.target.className = 'button-right'
      } else {
        delay = 2000
        this.showRight(value.target)
      }
      setTimeout(() => {
        this.update_current_word()
        value.target.className = 'button-normal'
      }, delay)
    },
    showRight: function(el) {
      var buttons = el.parentNode.parentNode.querySelectorAll('button')
      var wordholder = el.parentNode.parentNode.querySelector('.wordholder')
      wordholder.innerText += ' ' + this.current.meaning
      buttons.forEach((item, i) => {
        item.style = 'visibility:hidden'
      });
      setTimeout(() => {
        buttons.forEach((item, i) => {
          item.style = 'visibility:visible'
        });
      }, 2000)
    },
    act_positive: function() {
      this.$store.commit('actionPositive')
    },
    update_current_word: function() {
      this.$store.commit('updateWord')
    }
  }
}
</script>

<style scoped>
.varybutton {
  font-size: 14px;
  color: black;
}

.button-right {
  /*half-green*/
  background: rgba(0, 255, 0, 0.5);
  min-width: 220px;
  margin-bottom: 20px;
  height: 29px;
  font-size: 15px;
  border-color: black;
  text-align: center;
}

.button-normal {
  font-size: 16px;
  min-width: 225px;
  margin-bottom: 20px;
  /*half-half-aliceblue-like*/
  background: rgba(200, 240, 245, 0.5);
  height: 30px;
  border-color: black;
  text-align: center;
}

.button-right:focus {
  outline: none;
}

.button-normal:focus {
  outline: none;
}

@media screen and (max-width: 450px) {
  .button-normal {
    font-size: 18px;
    margin-bottom: 25px;
    height: 50px;
    border-radius: 20px;
  }

  .button-right {
    margin-bottom: 25px;
    height: 49px;
    font-size: 17px;
    border-radius: 20px;
  }
}
</style>
