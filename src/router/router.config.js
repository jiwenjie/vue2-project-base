/*
 * @Author: your name
 * @Date: 2022-04-22 23:28:48
 * @LastEditTime: 2022-05-04 13:39:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/router/router.config.js
 */
// import Home from '../views/Home.vue';
import register from '@/views/register/register.vue' // 注册
import IndexHome from '@/views/home/IndexHome.vue' // 首页
import MinerMail from '@/views/minerMail/minerMail.vue' // 矿机商城

import showModal from '@/views/modalView/showModal.vue' // 矿机商城

// 定义路由
const routes = [{
    path: '/',
    redirect: "/register"
  },
  {
    path: '/IndexHome',
    name: 'IndexHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: IndexHome
  },
  {
    path: '/minerMail',
    name: 'minerMail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MinerMail
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: register
  },
  // 展示弹出框页面
  {
    path: '/showModal',
    name: 'showModal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: showModal
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
];

export {
  routes
};
