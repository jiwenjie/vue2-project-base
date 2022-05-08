<!--
 * @Author: your name
 * @Date: 2022-05-04 09:30:59
 * @LastEditTime: 2022-05-04 17:34:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/views/minerMail/minerMail.vue
-->
<template>
  <div id="minerMailDIV" class="home">
    <PageHead :activeIndex="2"></PageHead>

    <!-- 内容 body 区域 -->
    <div class="mail-banner-space">
      <div class="mail-banner-content-space">
        <p class="banner-head-title">搭载TSMC专用定制芯片</p>
        <p class="banner-content">S9 Hydro的芯片采用了世界知名晶圆厂TSMC16mm工艺制程，芯片应用深度定制的低电压设计</p>
      </div>

      <!-- 按钮 -->
      <div class="mail-banner-btn" @click="handleViewToClick">
        <span>去查看  -></span>
      </div>

      <img src="@/assets/mailProduct.png" alt="icon" class="mail-banner-product">
    </div>

    <!-- container -->
    <div class="page-part-2">
      <div class="page-center-content part-2-center-content">
        <div class="part-2-item">
          <div class="top-box-part">
            <img src="@/assets/gn01.png" alt="icon" class="gn-icon-part">
          </div>
          <p class="gn-text">水冷散热</p>
          <p class="gn-desc-text">水冷散热设计，低温低噪音</p>
        </div>
        <div class="part-2-item">
          <div class="top-box-part">
            <img src="@/assets/gn02.png" alt="icon" class="gn-icon-part">
          </div>
          <p class="gn-text">家庭挖矿</p>
          <p class="gn-desc-text">水冷散热设计，可适用于家庭</p>
        </div>
        <div class="part-2-item">
          <div class="top-box-part">
            <img src="@/assets/gn03.png" alt="icon" class="gn-icon-part">
          </div>
          <p class="gn-text">性能稳定</p>
          <p class="gn-desc-text">产品可靠性高</p>
        </div>
        <div class="part-2-item">
          <div class="top-box-part">
            <img src="@/assets/gn04.png" alt="icon" class="gn-icon-part">
          </div>
          <p class="gn-text">芯片</p>
          <p class="gn-desc-text">产品可靠性高</p>
        </div>
      </div>
    </div>

    <!-- part 03 -->
    <div class="page-part-3">
      <div class="product-layout-space">
        <div class="circle-01"></div>
        <div class="circle-02"></div>
        <img src="@/assets/mailProduct.png" alt="img" class="part03-product-img">
      </div>

      <!-- 界面右侧功能描述信息内容 -->
      <div class="page-part-3-content-space">
        <p class="part-3-main-content">算力53TH/s 大无止境</p>
        <p class="part-3-desc-content">持续优化整机结构，单机算力高达53TH/s，性能爆发算力</p>
        <div class="part-3-detail-content">
          <p class="detail-content-title">单机算力</p>
          <p class="detail-content-desc">53TH/s</p>
        </div>
      </div>
    </div>

    <!-- 界面 part 04 -->
    <div class="page-part-4">
      <div class="page-part-content">
        <div class="inter-img-part"></div>
        <div class="inter-content-space">
          <p class="inter-content-title">第二代7nm挖矿大有可为</p>
          <p class="inter-content-desc cus-margin-top">搭载比特大陆第二代7nm芯片，采用全球领先的TSMC FinFET技术</p>
          <p class="inter-content-desc">应用全局优化方法学，芯片性能显著提升</p>
          <p class="inter-content-desc">成就整机超强性能，挖矿大有可为</p>

          <div class="part-4-detail-content">
            <p class="detail-content-title">芯片</p>
            <p class="detail-content-desc">第二代7nm</p>
          </div>
        </div>
      </div>
    </div>

    <PageBottom></PageBottom>
  </div>
</template>

<script>
  import PageHead from '@/components/PageHead';
  import PageBottom from '@/components/PageBottom';

  import minerMail from './js/minerMail';
  export default {
    name: 'minerMail',
    components: {
      PageHead,
      PageBottom
    },
    mixins: [minerMail]
  }

</script>
<style lang="scss" scope>
@import "./css/minerMail.scss"
</style>

