<!--
 * @Author: your name
 * @Date: 2022-04-23 10:37:34
 * @LastEditTime: 2022-04-23 11:31:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/components/PageHead copy.vue
-->
<template>
  <div id="PageBottomDIV" class="page-bottom-part">
    <div class="page-bottom-main">
      <div class="page-bottom-main-left">
        <span class="bottom-btn-span" @click="handleBtn01Click">{{$t('bottomBtnText01')}}</span>
        <span class="bottom-btn-span" @click="handleBtn02Click">{{$t('bottomBtnText02')}}</span>
        <span class="bottom-btn-span" @click="handleBtn03Click">{{$t('bottomBtnText03')}}</span>
      </div>
      <div class="page-bottom-main-right">
        <img src="@/assets/logo.png" alt="logo" class="bottom-logo-img">
      </div>
    </div>
    <div class="page-bottom-desc">Copyright © {{ curYear }} UI8 LLC. All rights reserved</div>
  </div>
</template>

<script>
export default {
  name: 'PageBottom',
  data() {
    return {
      curYear: "",
    }
  },
  created() {
    this.curYear = new Date().getFullYear()
  },
  methods: {
    // 点击第一个按钮
    handleBtn01Click() {
      console.log('click btn01')
    },

    // 点击第二个按钮
    handleBtn02Click() {
      console.log('click btn02')
    },

    // 点击第三个按钮
    handleBtn03Click() {
      console.log('click btn03')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-bottom-part {

  .page-bottom-main {
    height: 9.8rem;
    line-height: 1;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;

    .page-bottom-main-left {
      display: inline-block;
      width: 50%;
      padding-left: 20rem;
      text-align: left;
    }

    .page-bottom-main-right {
      display: inline-flex;
      padding-right: 20rem;

      .bottom-logo-img {
        display: inline-block;
        height: 22px;
      }
    }
  }

  .bottom-btn-span {
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    color: #23262F;

    display: inline-block;
    cursor: pointer;
    margin-right: 6.25%;

    &:last-child {
      margin-right: 0;
    }
  }

  .page-bottom-desc {
    height: 56px;
    background: #FCFCFC;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    /* identical to box height, or 167% */


    color: #777E90;
  }
}
</style>
