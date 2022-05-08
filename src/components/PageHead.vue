<!--
 * @Author: your name
 * @Date: 2022-04-23 10:36:47
 * @LastEditTime: 2022-05-04 09:42:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/components/HelloWorld copy.vue
-->
<template>
  <div id="PageHeadDIV" class="page-head-container">
    <div class="common-page-head page-head-left">
      <img src="@/assets/logo.png" alt="logo" class="head-logo-img">

      <span class="split-line"></span>

      <div class="head-btn-span active" @click="handleHeadBtn01Click">
        <span>{{ $t("headBtnText01") }}</span>
        <span class="head-btn-bottom-line" :class="{
          'show-line': activeIndex == 1
        }"></span>
      </div>
      <div class="head-btn-span" @click="handleHeadBtn02Click">
        <span>{{ $t("headBtnText02") }}</span>
        <span class="head-btn-bottom-line" :class="{
          'show-line': activeIndex == 2
        }"></span>
      </div>
    </div>
    <div class="common-page-head page-head-right">
      <div class="inline-block change-btn-part">
        <div class="operation-part">
          <span class="select-span">EN/USD</span>
          <span class="arrow-icon"></span>
        </div>

        <div class="drop-menu-space">
          <p class="menu-item-span" @click="handleSelectLanguage('EN/USD')">EN/USD</p>
          <p class="menu-item-span" @click="handleSelectLanguage('ZN/PSD')">ZN/PSD</p>
        </div>
      </div>
      <span class="common-top-btn sign-up-btn" @click="handleTopBtnClick">{{ $t("registerDesc") }}</span>
      <span class="common-top-btn login-btn" @click="handleTopBtnClick">{{ $t("loginDesc") }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHead',
  props: {
    activeIndex: {
      type: String | Number,
      default: "1"
    }
  },
  data() {
    return {
      languageStr: "EN/USD"
    }
  },
  created() {

  },
  methods: {
    // 头部按钮点击事件
    handleHeadBtn01Click() {
      console.log('btn01 click')
    },

    // 头部按钮点击事件
    handleHeadBtn02Click() {
      console.log('btn01 click')
    },

    handleTopBtnClick() {

    },

    handleSelectLanguage(value) {
      this.languageStr = value;
      this.$i18n.locale = this.languageStr == 'EN/USD' ? 'en' : 'zh';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-head-container {
  height: 8rem;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  font-size: 0;
  background-color: #fff;

  .common-page-head {
    display: inline-flex;
    width: 50%;
    align-items: center;
  }

  .head-logo-img {
    height: 3rem;
  }

  .page-head-left {
    padding-left: 4.9%;

    .split-line {
      display: inline-block;
      width: 1px;
      height: 4rem;
      background: #E6E8EC;
      margin-left: 14.6%;
      margin-right: 4.8rem;
    }

    .head-btn-span {
      font-family: 'PingFang SC';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #222222;
      margin-right: 28px;
      position: relative;
      cursor: pointer;
    }

    .head-btn-bottom-line {
      opacity: 0;
      transition: all .2s;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      margin: auto;
      display: block;
      width: 28px;
      height: 2px;
      background-color: #00B496;

      &.show-line {
        opacity: 1;
      }
    }
  }

  .page-head-right {
    padding-right: 3.5%;
    justify-content: flex-end;

    .common-top-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 8rem;
      height: 4rem;
      line-height: 1;

      border: 2px solid #E6E8EC;
      box-sizing: border-box;
      border-radius: 90px;

      font-family: 'PingFang SC';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      text-align: center;
      color: #23262F;
      cursor: pointer;
    }

    .login-btn {
      transition: background-color .2s .1s;

      &:hover {
        background-color: rgba($color: #000000, $alpha: 0.1);
      }
    }

    .sign-up-btn {
      margin-right: 1rem;
      background-color: #00B496;
      border: none;
      color: #fff;
    }

    .change-btn-part {
      margin-right: 2.4rem;
      padding: 1.2rem;
      position: relative;

      .operation-part {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }

      .arrow-icon {
        display: inline-block;
        width: 4px;
        height: 4px;
        // background: #777E90;
        border-left: 2px solid transparent;
        border-top: 2px solid transparent;
        border-right: 2px solid #777E90;
        border-bottom: 2px solid #777E90;
        transform: rotate(45deg);
        margin-top: -4px;
      }

      .select-span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #23262F;
        margin-right: 8px;
      }

      .menu-item-span {
        font-size: 14px;
        line-height: 28px;
        padding-left: 10px;
        cursor: pointer;

        &:hover {
          color: #fff;
          background-color: rgba($color: #00B496, $alpha: 1.0);
        }
      }

      .drop-menu-space {
        opacity: 0;
        // z-index: -1;
        display: inline-block;
        position: absolute;
        padding: 8px 0;
        left: 0;
        right: -4px;
        margin-top: 24px;
        border-radius: 2px;
        background-color: #fff;
        // box-shadow: 2px 2px 2px #ccc;
        filter: drop-shadow(2px 2px 2px #ccc);
      }

      &:hover {
        .drop-menu-space {
          opacity: 1;
          z-index: 3;
        }
      }
    }
  }
}
</style>
