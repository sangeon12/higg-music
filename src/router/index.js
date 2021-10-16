import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Chart from '@/components/Chart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/chart',
      name:  'Chart',
      component: Chart
    }
  ]
})
