import Vue from 'vue'
import Router from 'vue-router'
import status_page from '@/components/status_page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Status_Page',
      component: status_page
    }
  ]
})
