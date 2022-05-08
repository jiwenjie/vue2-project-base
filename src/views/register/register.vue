<!--
 * @Author: your name
 * @Date: 2022-05-04 11:59:59
 * @LastEditTime: 2022-05-04 13:26:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/views/register/register.vue
-->
<template>
  <div id="registerDIV" class="page-root">
    <!-- 界面主题内容 -->
    <div class="page-main-content">
      <div class="page-main-left">
        <img src="@/assets/registerLeft.png" alt="bgImg" class="bg-img-main">
      </div>
      <div class="page-main-right">
        <!-- 头部内容点击切换 -->
        <div class="page-main-head" @click="handlePageHeadClick">
          <div class="arrow-left-space">
            <img src="@/assets/arrowLeft.png" alt="icon" class="arrow-left-img">
          </div>
          <span class="switch-btn-text">{{ $t("registerBtn") }}</span>
        </div>
        <!-- body 内容部分 -->
        <div class="page-form-item">
          <p class="page-item-label">{{ $t("email") }}</p>
          <div class="page-item-content">
            <a-input placeholder="Email address" />
          </div>
        </div>
        <div class="page-form-item">
          <p class="page-item-label">{{ $t("verifyCode") }}</p>
          <div class="page-item-content">
            <a-input placeholder="verifyCode" />
            <span class="verify-desc-text" @click="handleGetVerifyCodeClick" v-show="!loadVerifyBtn">请输入验证码</span>

            <span class="verify-desc-text count-down-span" v-show="loadVerifyBtn">{{ countTime }}s</span>
          </div>
        </div>
        <div class="page-form-item">
          <p class="page-item-label">{{ $t("password") }}</p>
          <div class="page-item-content">
            <a-input-password placeholder="input password" />
          </div>
        </div>
        <div class="page-form-item">
          <p class="page-item-label">{{ $t("password") }}</p>
          <div class="page-item-content">
            <a-input-password placeholder="input password" />
          </div>
        </div>
        <div class="page-form-item">
          <p class="page-item-label">{{ $t("userName") }}</p>
          <div class="page-item-content">
            <a-input placeholder="Email address" />
          </div>
        </div>

        <!-- 按钮 btn -->
        <div class="submit-btn" @click="handleSubmitClick">提交</div>
        <p class="page-desc-content">
          <span class="label-content-desc">已有账户?</span>
          <span class="label-content-import-tips">登录</span>
        </p>
      </div>
    </div>
  </div>
</template>


<script>

  import register from './js/register';
  export default {
    name: 'register',
    components: {
    },
    mixins: [register]
  }

</script>
<style lang="scss" scope>
@import "./css/register.scss"
</style>
