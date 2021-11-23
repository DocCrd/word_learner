import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

store.commit('initStudyMassive')
store.commit('updateWord')
createApp(App).use(store).use(router).mount('#app')
