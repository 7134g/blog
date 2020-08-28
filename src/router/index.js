import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//   const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]
//
// const router = new VueRouter({
//   routes
// })
//
// export default router

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "video" */ '../views/Home.vue'),
    },
    {
      path: '/ShowArticles',
      name: 'ShowArticles',
      component: () => import(/* webpackChunkName: "video" */ '../views/ShowArticles.vue'),
    },
    {
      path: '/classfication',
      name: 'classfication',
      component: () => import(/* webpackChunkName: "video" */ '../views/Classfication.vue'),
    },
    {
      path: '/TimeLine',
      name: 'TimeLine',
      component: () => import(/* webpackChunkName: "about" */ '../views/TimeLine.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/JianLi',
      name: 'JianLi',
      component: () => import(/* webpackChunkName: "about" */ '../views/JianLi.vue'),
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    },
    {
      path: '/NewArticle',
      name: 'NewArticle',
      component: () => import(/* webpackChunkName: "about" */ '../views/NewArticle.vue'),
    },
    {
      path: '/DelArticle',
      name: 'DelArticle',
      component: () => import(/* webpackChunkName: "about" */ '../views/DelArticle.vue'),
    },
    {
      path: '/ChangeArticle',
      name: 'ChangeArticle',
      component: () => import(/* webpackChunkName: "about" */ '../views/ChangeArticle.vue'),
    },


  ],
});
