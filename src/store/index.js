/*
 * @Author: your name
 * @Date: 2022-04-22 22:41:33
 * @LastEditTime: 2022-05-04 09:28:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/store/index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// import {
//   getToken,
// } from '@/utils/auth'

export default new Vuex.Store({
  state: {
    name: '',
    avatar: '',
    // token: getToken('Token'),
  },
  getters: {
    token: state => state.token,
    avatar: state => state.avatar,
    name: state => state.name,
  },
  mutations: {},
  actions: {},
  modules: {}
})
