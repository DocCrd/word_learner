const AMOUNT = 25
const randomElement = function(array) {
  return array[Math.floor(Math.random() * array.length)]
}

const randomNumber = function(array) {
  return Math.floor(Math.random() * array.length)
}

const makeElements = function(sended, len) {
  let array = []
  sended.forEach((item, i) => {
    array.push(item)
  });

  let elements = []
  for (let i = 0; i < len; i += 1) {
    elements[i] = randomElement(array)
    array.splice(array.indexOf(elements[i]), 1)
  }

  return elements
}

export default {
  anyCash(st) {
    if (localStorage.getItem('savedWords')) {
      let cashed = localStorage.getItem('savedWords').split(',')
      if (cashed.length > 5) {
        st.aboutCash.any_cash = true
      }
    }
  },

  restoreCash(st, status) {
    st.current.studyMassive = []
    const sItemsExist = function() {
      let cashed = localStorage.getItem('savedWords').split(',')
      cashed.forEach((item, i) => {
        let word = st.wholeWords.find(thing => thing[1] === item)
        word[4] = 0
        word[5] = st.current.studyMassive.length
        st.current.studyMassive.push(word)
      });
    }
    const sNotExist = function() {}
    const sArr = [sItemsExist, () => {}]
    sArr[(!localStorage.getItem('savedWords')) * 1]()
  },

  updateCash(st, status) {
    if (st.current.studyMassive === 5 || st.current.studyMassive < 5) {

    } else {
      let toSave = []
      st.current.studyMassive.forEach((item, i) => {
        toSave.push(item[1])
      })
      localStorage.setItem('savedWords', toSave)
    }
    st.aboutCash.wanted = false
  },

  deleteWords(st, status) {
    for (let i = st.checks.length; i > 0; i -= 1) {
      st.current.studiedWords.push(st.current.studyMassive[st.checks[i - 1]])
      st.current.studyMassive.splice(st.checks[i - 1], 1)
    }
  },

  undeleteWords(st, status) {
    for (let i = st.checks.length; i > 0; i -= 1) {
      st.current.studyMassive.push(st.current.studiedWords[st.checks[i - 1]])
      st.current.studiedWords.splice(st.checks[i - 1], 1)
    }
  },

  initStudyMassive(st, status) {
    const fillUpStudyMassive = function(id) {
      let elem = []
      if (st.current.studyMassive.find(item => item[1] === st.wholeWords[id][1])) {} else {
        elem = st.wholeWords[id]
        elem[4] = 0
        elem[5] = st.current.studyMassive.length
        st.current.studyMassive.push(elem)
      }
    }

    const sMakeNew = function() {
      let start = randomNumber(st.wholeWords)
      start = (start < AMOUNT) * (AMOUNT - start) + start
      for (let i = start; i > start - AMOUNT; i -= 1) {
        fillUpStudyMassive(i)
      }
    }

    const sContinue = function() {
      for (let i = 0; i < st.checks.length; i += 1) {
        fillUpStudyMassive(st.checks[i])
      }
    }

    const sArr = [sMakeNew, sContinue]

    sArr[0 + (st.checks.length >= 1) * 1]()
  },

  updateWord(st, status) {
    let ellength = 5
    if (st.current.studyMassive.length < 5) {
      ellength = st.current.studyMassive.length
    }
    st.current.elements = makeElements(st.current.studyMassive, ellength)
    let cur_word = randomElement(st.current.elements)
    if (st.current.studyMassive.length >= 2) {
      while (st.current.meaning === cur_word[3]) {
        cur_word = randomElement(st.current.elements)
      }
    }
    st.current.word = cur_word[1] + ' ' + cur_word[2]
    st.current.meaning = cur_word[3]
    st.current.counts = cur_word[4]
    st.current.position = cur_word[5]
    for (let i = 0; i < st.current.elements.length; i += 1) {
      st.current.variants[i] = st.current.elements[i][3]
    }
  },

  actionPositive(st) {
    st.current.counts += 1
    let fi = 0
    for (let i = 0; i < st.current.studiedWords.length; i += 1) {
      if (st.current.position > st.current.studiedWords[i][5]) {
        fi -= 1
      }
    }
    if (st.current.counts === st.steep || st.current.counts > st.steep) {
      st.current.studiedWords.push(st.current.studyMassive[st.current.position + fi])
      st.current.studyMassive.splice(st.current.position + fi, 1)
      this.commit('updateCash')
    } else {
      st.current.studyMassive[st.current.position + fi][4] = st.current.counts
    }
  }
}
