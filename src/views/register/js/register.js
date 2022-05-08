/*
 * @Author: your name
 * @Date: 2022-05-04 12:01:08
 * @LastEditTime: 2022-05-04 13:23:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/views/register/js/register.js
 */
export default {
  name: 'register',
  data() {
    return {
      loadVerifyBtn: false, // 是否点击过获取验证码按钮
      countTime: 60, // 倒计时时间
      timer: null, // 倒计时内容
    }
  },
  created() {

  },
  methods: {
    // 界面头部点击事件，可能是切换布局？
    handlePageHeadClick() {

    },

    // 点击界面 banner 按钮去查看部分内容
    handleGetVerifyCodeClick() {
      console.log("点击调用接口，获取短信验证码")
      this.loadVerifyBtn = true;

      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }

      this.timer = window.setInterval(() => {
        if (this.countTime === 1) {
          this.loadVerifyBtn = false;
          window.clearInterval(this.timer);
          this.timer = null;
        }

        this.countTime -= 1;
      }, 1000)
    },

    // 点击提交按钮事件
    handleSubmitClick() {
      console.log("handleSubmitClick ------============")
    }
  },
}
