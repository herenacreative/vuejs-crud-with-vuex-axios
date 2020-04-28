import Vue from 'vue'
import VueRouter from 'vue-router'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/calender',
    name: 'calender',
    component: () => import(/* webpackChunkName: "about" */ '../views/Calender')
  },
  {
    path: '/add_contact',
    name: 'add_contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Add_contact')
  },
  {
    path: '/update_contact/:id',
    name: 'update_contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Update_contact')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
