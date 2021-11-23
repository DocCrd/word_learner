import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const quiz = () => import(/* webpackChunkName: "about" */ '../views/Quiz.vue')
const sets = () => import(/* webpackChunkName: "about" */ '../views/Settings.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: quiz
  },
  {
    path: '/settings',
    name: 'Settings',
    component: sets
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
