export default {

  updateVarys: function({ commit }, args) {
    commit('updateVarys', {
      quaOfVary: args
    })
  },

  updateCurrentWord: function({ commit }, arg) {
    commit('updateCurrentWord', {
      currentWord: arg
    })
  },

  checkAnswer: function({ commit }, arg) {
    commit('checkAnswer', {
      currentWord: arg
    })
  }
}
