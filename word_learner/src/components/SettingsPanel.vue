<template>
<button @click="show_panel=!show_panel" class="action">{{show_answer}}</button>
<div class="panel" v-if="show_panel">
  <table>
    <tbody>
      <tr>
        <td>
          <input type="radio" id="one" value="delete" v-model="mode">
          <label for="one">Удалить</label>
        </td>
        <td>
          <input type="radio" id="two" value="increase" v-model="mode">
          <label for="two">Добавить</label>
        </td>
        <td>
          <input type="radio" id="three" value="make" v-model="mode">
          <label for="two">Новый</label>
        </td>
        <td>
          <input type="radio" id="three" value="edit_deleted" v-model="mode">
          <label for="two">Удалённые</label>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div class="panel" v-else>
</div>

<div class="edit-words">
  <p class="action-name">{{switch_msg}}</p>
  <table class="the-table">
    <tbody class="study-table">
      <TableLine v-for="(elem, index) of switch_msv" :id="index" :line="elem[1] + ' - ' + elem[3]" />
    </tbody>
  </table>

  <button @click="check()" class="action" id="change_button">Обработать!</button>
</div>
</template>

<script>
import TableLine from './TableLine.vue'
import {
  mapGetters
} from 'vuex'

export default {
  name: 'SettingsPanel',
  data: function() {
    return {
      mode: 'delete',
      show_panel: false,
      msg_delete: 'Отметить выученные слова',
      msg_increase: 'Добавить слов для заучивания',
      msg_edit_deleted: 'Вернуть выученые слова',
      msg_make: 'Создать список слов'
    }
  },
  computed: {
    ...mapGetters(['current', 'wholeWords', 'checks']),
    show_answer: function() {
      const sArr = ['Показать доступные опции', 'Скрыть опции']
      return sArr[(this.show_panel) * 1]
    },
    switch_msv: function() {
      const sArr = ['delete', 'edit_deleted', 'make', 'increase']
      const aArr = [this.current.studyMassive, this.current.studiedWords, this.wholeWords]
      return aArr[0 + (this.mode === 'edit_deleted') * 1 + (this.mode === 'make' || this.mode === 'increase') * 2]
    },
    switch_msg: function() {
      const sArr = ['delete', 'edit_deleted', 'make', 'increase']
      const aArr = [this.msg_delete, this.msg_edit_deleted, this.msg_increase, this.msg_make]
      return aArr[0 + (this.mode === 'edit_deleted') * 1 + (this.mode === 'increase') * 2 + (this.mode === 'make') * 3]
    }
  },
  components: {
    TableLine
  },
  methods: {
    check: function() {
      const sFnc = function() {
        this.current.studyMassive = []
        this.add_words()
      }
      const sArr = ['delete', 'edit_deleted', 'make', 'increase']
      const aArr = [this.delete_words, this.return_words, this.add_words, sFnc]
      this.checks.sort((a, b) => {
        return a - b;
      })
      aArr[0 + (this.mode === 'edit_deleted') * 1 + (this.mode === 'increase') * 2 + (this.mode === 'make') * 3]()
      this.update_cash()
      this.clear_checks()
      this.update_current_word()
      this.mode = 'delete'
    },
    clear_checks: function() {
      for (var i = this.checks.length; i > 0; i -= 1) {
        document.getElementsByName(this.checks[i - 1])[0].checked = !document.getElementsByName(this.checks[i - 1])[0].checked
        this.checks.splice(this.checks.indexOf(this.checks[i - 1]), 1)
      }
    },
    update_cash: function() {
      this.$store.commit('updateCash')
    },
    add_words: function() {
      this.$store.commit('initStudyMassive')
    },
    update_current_word: function() {
      this.$store.commit('updateWord')
    },
    delete_words: function() {
      this.$store.commit('deleteWords')
    },
    return_words: function() {
      this.$store.commit('undeleteWords')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.action-name {
  font-weight: 700
}

.study-table {
  text-align: left;
}


.action-button {}

TABLE {
  table-layout: fixed;
  margin: auto;
  /* Ячейки фиксированной ширины */
}

/*half-golden*/
/*background: rgba(212, 175, 55, 0.5);*/
.action {
  /*half-half-aliceblue-like*/
  background: rgba(200, 240, 245, 0.5);
  border: 2px solid black;
  font-family: fantasy;
  margin-top: 10px;
  color: black;
  margin-top: 15px;
  margin-bottom: 15px;
}

.the-table {
  width: 30%;
  border-right: 5px solid black;
}

#change_button {
  position: sticky;
  bottom: 0;
}

@media screen and (min-width: 1650px) {
  .action {
    width: 30%;
    height: 60px;

  }
}

@media screen and (max-width: 450px) {
  .the-table {
    width: 100%;
  }

  .action {
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
    height: 60px
  }
}
</style>
