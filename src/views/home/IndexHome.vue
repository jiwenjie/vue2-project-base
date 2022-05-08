<!--
 * @Author: your name
 * @Date: 2022-04-23 09:16:27
 * @LastEditTime: 2022-05-04 09:43:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/views/home/home.vue
-->
<template>
  <div id="IndexHomeDIV" class="home">
    <PageHead :activeIndex="1"></PageHead>
    <!-- 轮播图内容展示区域 -->
    <div class="page-main-swiper-layout">
       <div class="wrapper">
          <swiper ref="mySwiper" :options="swiperOption">
              <swiper-slide v-for="item of swiperList" :key="item.id">
                <div class="swiper-content-detail">
                  <img src="@/assets/bannerFlurBg.jpg" alt="img" class="banner-img-cls">

                  <!-- 内容文字描述区域 -->
                  <div class="banner-content-text-space">
                    <p class="banner-top-title">{{ item.bannerTitle }}</p>
                    <p class="banner-top-content">{{ item.bannerContent }}</p>

                    <div class="banner-operation">
                      <span class="banner-operation-btn">Get stated now</span>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
      </div>
    </div>

    <!-- 轮播下方内容展示 -->
    <div class="page-main-content-space">
      <div class="page-main-center">
        <div class="page-content-detail">
          <div class="page-left-content">

            <span class="line-span"></span>
            <div class="question-des">Why choose us?</div>

            <!-- 增加分页按钮 -->
            <div class="page-size-number">
              <span class="icon-number-img" :class="{
                active: clickIndex === 0
              }" @click="handleSelectIndex(0)"></span>
              <span class="icon-number-img" :class="{
                active: clickIndex === 1
              }" @click="handleSelectIndex(1)"></span>
              <span class="icon-number-img" :class="{
                active: clickIndex === 2
              }" @click="handleSelectIndex(2)"></span>
            </div>

            <!-- <swiper ref="mySwiper" :options="swiperOption">
              <swiper-slide v-for="item of swiperQuestList" :key="item.id">
                <div class="swiper-content-detail">
                  <span class="line-span"></span>
                  <div class="question-des">Why choose us?</div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
          </swiper> -->

          </div>
          <div class="page-right-content">
            <div class="content-desc-item" :class="{
                active: clickIndex === 0
              }" @click="handleSelectIndex(0)">
              <img src="@/assets/pContent.png" alt="icon" class="content-img">
              <p class="item-title-desc">Accessibility</p>
              <p class="item-content-desc">TextTextTextTextTextT
                extTextTextTextTextTextTextTextTextTextTextTextTextTextTe
                xtTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTex
                tTextTexTextTextTextTextTextTextTextTextTexTex
                tTextTextTextTextTextTextTextTexTextTextTextTextTextTextTextTex</p>
            </div>
            <div class="content-desc-item" :class="{
                active: clickIndex === 1
              }" @click="handleSelectIndex(1)">
              <img src="@/assets/pContent.png" alt="icon" class="content-img">
              <p class="item-title-desc">Accessibility</p>
              <p class="item-content-desc">extTextTextTextTextTextTextTextTextTextTextTextTextTextTe
                xtTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTex
                tTextTexTextTextTextTextTextTextTextTextTexTex</p>
            </div>
            <div class="content-desc-item" :class="{
                active: clickIndex === 2
              }" @click="handleSelectIndex(2)">
              <img src="@/assets/pContent.png" alt="icon" class="content-img">
              <p class="item-title-desc">Accessibility</p>
              <p class="item-content-desc">extTextTextTextTextTextTextTextTextTextTextTextTextTextTe
                xtTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTex
                tTextTexTextTextTextTextTextTextTextTextTexTex</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- 数据图表内容展示区域 -->
    <div class="page-data-chart-space">
      <div class="page-main-center">
        <div class="data-chart-top">
          <img src="@/assets/dataChartImg.png" alt="icon" class="part-img-icon">
          <div class="inline-block data-chart-switch">
            <span class="mid-part-title">Eth</span>
            <span class="mid-part-arrow"></span>

            <div class="data-chart-switch-drop">
              <p class="dc-content">Eth</p>
              <p class="dc-content">ZHN</p>
            </div>
          </div>
        </div>

        <!-- 内容 content 部分 -->
        <div class="data-line-menu">
          <div class="data-line-menu-item">
            <div class="menu-img-space">
              <div class="img-space-content">
                <img src="@/assets/menu01center.png" alt="img" class="menu-item-center-img">
              </div>
            </div>
            <div class="menu-title">Daily Reverue</div>
            <div class="menu-content-value">0.2993/M</div>
          </div>
          <div class="data-line-menu-item">
            <div class="menu-img-space">
              <div class="img-space-content img-space02-content">
                <img src="@/assets/menu02center.png" alt="img" class="menu-item-center-img">
              </div>
            </div>
            <div class="menu-title">Daily Reverue</div>
            <div class="menu-content-value">0.2993/M</div>
          </div>
          <div class="data-line-menu-item">
            <div class="menu-img-space">
              <div class="img-space-content img-space03-content">
                <img src="@/assets/menu03center.png" alt="img" class="menu-item-center-img">
              </div>
            </div>
            <div class="menu-title">Daily Reverue</div>
            <div class="menu-content-value">0.2993/M</div>
          </div>
          <div class="data-line-menu-item">
            <div class="menu-img-space">
              <div class="img-space-content img-space04-content">
                <img src="@/assets/menu04center.png" alt="img" class="menu-item-center-img">
              </div>
            </div>
            <div class="menu-title">Daily Reverue</div>
            <div class="menu-content-value">0.2993/M</div>
          </div>
        </div>

        <!-- 内容描述部分 -->
        <div class="part-mid-data-space">
          <div class="common-part-mid-cls part-mid-data-left">
            <div class="mid-data-left-top">
              <div class="mid-data-left-top-left">
                <span class="mid-data-left-title">每日收益</span>
                <span class="left-title-desc">PPS+</span>
              </div>
              <div class="mid-data-left-top-right">
                <span class="right-desc-span">费率</span>
                <el-input v-model="rateVal" oninput="value=value.replace(/[^\d]/g,'')" class="data-input-cls"></el-input>
                <span class="right-desc-span right-desc-unit">%</span>
              </div>
            </div>
            <div class="mid-data-left-edit-line">
              <el-input v-model="mhVal" oninput="value=value.replace(/[^\d]/g,'')" placeholder="" class="data-edit-input"></el-input>
              <span class="left-edit-line-unit">MH/s</span>
              <img src="@/assets/transformImg.png" alt="icon" class="transform-img">
              <el-input v-model="ethVal" oninput="value=value.replace(/[^\d]/g,'')" placeholder="" class="data-edit-input"></el-input>
              <span class="left-edit-line-unit">ETH（¥0.27）</span>
            </div>
            <div class="mid-data-search-line">
              <el-input v-model="ethSearchText" placeholder="输入匿名挖矿ETH	钱包地址" class="data-search-input"></el-input>
              <span class="search-btn-text">查看</span>
            </div>
          </div>
          <div class="common-part-mid-cls part-mid-data-right">
            <div class="right-line">
              <div class="mid-data-right-item">
                <p class="data-right-item-title">当前全网难度</p>
                <p class="data-right-item-value">
                  <span>12.97 P</span>
                </p>
              </div>
              <div class="mid-data-right-item">
                <p class="data-right-item-title">出块时间</p>
                <p class="data-right-item-value">
                  <span>0.25</span>
                  <span class="data-right-item-unit">min</span>
                </p>
              </div>
              <div class="mid-data-right-item">
                <p class="data-right-item-title">区块奖励</p>
                <p class="data-right-item-value">
                  <span>3.15</span>
                  <span class="data-right-item-unit">ETH</span>
                </p>
              </div>
            </div>
            <div class="right-line sec-line-margin">
              <div class="mid-data-right-item">
                <p class="data-right-item-title">费率</p>
                <p class="data-right-item-value">
                  <span>1%</span>
                  <span class="data-right-item-unit">PPS+</span>
                </p>
              </div>
              <div class="mid-data-right-item">
                <p class="data-right-item-title">付款时间</p>
                <p class="data-right-item-value">
                  <span>10:00-16:00</span>
                </p>
              </div>
              <div class="mid-data-right-item">
                <p class="data-right-item-title">起付额</p>
                <p class="data-right-item-value">
                  <span>0.2</span>
                  <span class="data-right-item-unit">ETH</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 趋势图内容图表展示部分 -->
        <div class="trend-echarts-space">
          <div class="trend-top-line">
            <span class="trend-title-span">趋势图</span>

            <div class="echart-operation">
              <span class="switch-btn-span switch-left-btn" @click="switchChartData(30)" :class="[echartsVal == 30 ? 'active' : '']">30天</span>
              <span class="switch-btn-span switch-right-btn" @click="switchChartData(180)" :class="[echartsVal == 180 ? 'active' : '']">180天</span>
            </div>
          </div>

          <!-- echarts 部分 -->
          <div class="echart-trend-space" id="trendEchartDIV"></div>

          <!-- 底部 echart 指示器显示区域 -->
          <div class="echart-option-line">
            <div class="yval01-part">
              <div class="echart-show-span-icon">
                <span class="span-icon-line"></span>
                <span class="span-circle-icon"></span>
              </div>
              <span class="echart-span-icon-title">全网算力</span>
            </div>
            <div class="yval01-part margint-left-echart-icon">
              <div class="echart-show-span-icon">
                <span class="span-icon-line icon-line02"></span>
                <span class="span-circle-icon circle-icon02"></span>
              </div>
              <span class="echart-span-icon-title">价格走势</span>
            </div>
          </div>
        </div>


        <!-- 界面底部内容描述 -->
        <div class="page-bottom-content">
          <div class="page-bottom-content-main">
            <p class="bottom-content-title">Quick and easy account creation</p>

            <p class="bottom-content-desc">Anytime, anywhere. Trade crypto on your terms.</p>

            <div class="down-operation-space">
              <div class="down-type-img">
                <img src="@/assets/apple-fill.png" alt="icon" class="download-icon-img">
              </div>
              <div class="down-type-content">
                <p class="down-span">Download</p>
                <p class="download-type-name">Apple</p>
              </div>
            </div>

            <div class="page-bottom-split-line"></div>

            <div class="down-operation-space">
              <div class="down-type-img">
                <img src="@/assets/apple-fill.png" alt="icon" class="download-icon-img">
              </div>
              <div class="down-type-content">
                <p class="down-span">Download</p>
                <p class="download-type-name">Android</p>
              </div>
            </div>

            <!-- 界面底部文字内容部分 -->
            <!-- <img src="@/assets/bottomTextImg.png" alt="textIcon" class="bottom-text-img"> -->
            <p class="bottom-main-span-text">Jasmine</p>

            <!-- 界面右侧图片内容 -->
            <img src="@/assets/iphoneImg.jpeg" class="bottom-right-img-space" />
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

  import IndexHome from './js/IndexHome';
  export default {
    name: 'IndexHome',
    components: {
      PageHead,
      PageBottom
    },
    mixins: [IndexHome]
  }

</script>
<style lang="scss" scope>
@import "./css/IndexHome.scss"
</style>
