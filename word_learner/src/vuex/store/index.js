import {
  createStore
} from 'vuex'

import getters from '../getters'
import actions from '../actions'
import mutations from '../mutations'
import file from '@/assets/dwawe.csv'
//const file = () => import('@/assets/dwaw.csv')

const state = {
  current: {
    word: '',
    meaning: '',
    position: 0,
    counts: 0,
    variants: [],
    elements:[],
    studyMassive: [],
    studiedWords: []
  },
  aboutCash:{
    wanted: true,
    any_cash: false
  },
  checks: [],
  steep: 5,
  boof: [],
  wholeWords: file
}

export default createStore({
  state,
  actions,
  mutations,
  getters
})
