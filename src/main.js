/*
 * @Author: your name
 * @Date: 2022-04-22 22:41:33
 * @LastEditTime: 2022-05-04 16:15:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

// 引入Element，打开项目，找到src/main.js文件,添加下面代码
import Element from 'element-ui'; // 全量引入 UI 组件库组件
import 'element-ui/lib/theme-chalk/index.css'; // 引入 UI 组件样式
Vue.use(Element)

// 引入Antd，打开项目，找到src/main.js文件,添加下面代码
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

import i18n from './i18n'; // 引入语言国际化设置

// 换肤可以在此处引入不同的样式文件内容
import './style/reset.scss'; // 引入部分 reset 样式内容

// 引入 echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
