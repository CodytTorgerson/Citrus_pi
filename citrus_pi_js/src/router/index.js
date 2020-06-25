import Vue from 'vue'
import Router from 'vue-router'
import statuspage from '@/components/statuspage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'statuspage',
      component: statuspage
    },
    {
      path: '/thisisanotherpath',
      name: 'statuspage',
      component: statuspage
    }
  ]
})
