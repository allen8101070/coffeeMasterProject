import Vue from 'vue'
import Router from 'vue-router'
import coffeeCart from '@/components/coffeeCart'
import coffeeOrder from '@/components/coffeeOrder'
import info from '@/components/info'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'info',
      component: info
    },
    {
      path: '/coffeeCart',
      name: 'coffeeCart',
      component: coffeeCart
    },
    {
      path: '/coffeeOrder',
      name: 'coffeeOrder',
      component: coffeeOrder
    }
  ]
})
