<template>
<tr>
  <td @click="bool_set(id)" class="cell">{{line}}</td>
  <input @click="bool_set_el(id)" type="checkbox" :name="id" class="box">
</tr>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  name: 'TableLineDelete',
  methods: {
    bool_set: function(index) {
      document.getElementsByName(index)[0].checked = !document.getElementsByName(index)[0].checked
      const sArr = []
      if (document.getElementsByName(index)[0].checked) {
        this.checks.push(index)
      } else {
        this.checks.splice(this.checks.indexOf(index), 1)
      }
    },
    bool_set_el: function(index) {
      if (document.getElementsByName(index)[0].checked) {
        this.checks.push(index)
      } else {
        this.checks.splice(this.checks.indexOf(index), 1)
      }
    }
  },
  computed: {
    ...mapGetters(['checks'])
  },
  props: {
    line: String,
    id: Number
  }
}
</script>

<style scoped>
.cell {
  width: 90%;
  padding-left: 14px;
  border: 1px solid black;
  /*half-half-aliceblue-like*/
  background: rgba(200, 240, 245, 0.5);
  font-family: revent;
  color: black;
}


.cell:active {
  /*half-green*/
  background: rgba(0, 255, 0, 0.5);
}

.box {
  margin: 7px;
}
</style>
