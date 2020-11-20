import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: '活动量管理'
      },
      component: (resolve) => require(['@/layouts/BasicLayouts.vue'], resolve),
      children: [
        {
          path: '/',
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'Home',
          meta: {
            title: '我的'
          },
          component: (resolve) => require(['@/views/Home.vue'], resolve)
        },
        {
          path: 'about',
          name: 'About',
          meta: {
            title: '我的'
          },
          component: (resolve) => require(['@/views/About.vue'], resolve)
        }
      ]
    }
  ]
})