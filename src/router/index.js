/*
 * @Author: your name
 * @Date: 2022-04-22 22:41:33
 * @LastEditTime: 2022-04-23 20:55:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  routes
} from './router.config'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: "hash",
  base: process.env.VUE_APP_CONTEXT
})

// 全局前置钩子：beforeEach
// 在进入前做一些事
// to:要去的路由
// from:来的路由
// next:放行，默认参数是false
//上面把账号密码放到window这里也可以访问到
router.beforeEach((to, from, next) => {
  // let userId = this.$store.state;
  let userId = localStorage.getItem('userName');
  console.log('userId', userId);
  //这里是对登录后的值进行判断，也可对token的值进行判断
  if (!userId) {
    if (to.meta.requireAuth || to.name == null) {
      next({
        path: '/'
      })
    } else {
      console.log('2')
      next();
    }
  } else {
    //初始化动态路由方法
    next();
  }
})

// 全局的后置
// to:要去跳转的路由
// from:来的路由
// router.afterEach((to, from) => {
//   console.log('欢迎' + window.uname);
// })

export default router;
