/*
 * @Author: your name
 * @Date: 2022-04-23 20:37:43
 * @LastEditTime: 2022-04-23 20:42:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/api/config.js
 */

//判断开发环境
export const baseUrl = process.env.NODE_ENV === "development" ? '/devApi' : '';
