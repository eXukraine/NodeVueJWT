import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import home from '../views/home'
import schedule from '../views/schedule'
import registration from '../views/Registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    { 
       path: '/schedule',
       name: 'schedule',
       component: schedule
      
    },
    {
      path: '/registration',
      name: 'registration',
      component: registration
    }


  ]
})