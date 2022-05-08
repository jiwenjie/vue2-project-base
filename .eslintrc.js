/*
 * @Author: your name
 * @Date: 2022-04-22 22:41:33
 * @LastEditTime: 2022-04-22 22:44:15
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    browser: true, // 浏览器环境中的全局变量
    node: true, // Node.js 全局变量和 Node.js 作用域。
    es6: true, // 启用除了 modules 以外的所有 ECMAScript 6 特性
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
