import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import goods from 'components/goods/goods'
// import ratings from 'components/ratings/ratings'
// import seller from 'components/seller/seller'

let app = Vue.extend(App)
Vue.use(VueRouter)
let router = new VueRouter()
// let router = new VueRouter({
//   linkActiveClass: 'active'
// })
router.map({
  '/goods': {
    component: goods
  }
  // ,
  // '/ratings': {
  //   component: ratings
  // },
  // '/seller': {
  //   component: seller
  // }
})
router.start(app, '#app')
