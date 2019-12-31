import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeRecommend from '../views/HomeRecommend.vue'
import HomeHot from '../views/HomeHot.vue'
import HomeSearch from '../views/HomeSearch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect:'/recommend',
    children:[{
      path:'recommend',
      component:HomeRecommend,
    },
    {
      path:'hot',
      component:HomeHot,
    },
    {
      path:'search',
      component:HomeSearch,
    }]
  },
  {
    path: '/playlist',
    name: 'playlist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/PlayList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
