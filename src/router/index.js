import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/Registry',
    name: 'Registry',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registry.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
