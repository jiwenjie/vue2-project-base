/*
 * @Author: your name
 * @Date: 2022-04-23 12:54:16
 * @LastEditTime: 2022-04-23 21:00:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/views/home/js/IndexHome.js
 */
export default {
  name: 'IndexHome',
  data() {
    return {
      mainSwiper: null, // 轮播图对象
      rateVal: 0, //费率

      mhVal: 1, // MH 值
      ethVal: 0.000001389,
      ethSearchText: "",

      echartsVal: 180,

      trendEchartObj: {
        instance: null,
        option: {
          title: {
            // text: 'Stacked Line'
          },
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: [{
            name: "全网算力 TH/s",
            axisLine: {
              show: false
            },
            type: 'value',
          }, {
            name: "USD",
            axisLine: {
              show: false
            },
            type: 'value'
          }],
          series: [{
              name: '全网算力',
              type: 'line',
              stack: 'Total',
              itemStyle: {
                normal: {
                  color: "#16C3E2",
                  lineStyle: {
                    color: "#16C3E2"
                  }
                }
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '价格走势',
              type: 'line',
              stack: 'Total',
              itemStyle: {
                normal: {
                  color: "#00B496",
                  lineStyle: {
                    color: "#00B496"
                  }
                }
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },
          ]
        }
      },

      swiperOption: {
        slidesPerView: 1,
        // 设置分页器
        pagination: {
          el: '.swiper-pagination',
          // 设置点击可切换
          clickable: true
        },
        // // // 设置自动轮播
        // autoplay: {
        //   delay: 2000 // 5秒切换一次
        // },
        // // 设置轮播可循环
        // loop: true
      },
      swiperList: [{
          id: "001",
          bannerContent: "Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.",
          bannerTitle: "Welcome to Ethereum"
        },
        {
          id: "002",
          bannerContent: "Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.",
          bannerTitle: "Welcome to Ethereum"
        },
        {
          id: "003",
          bannerContent: "Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.",
          bannerTitle: "Welcome to Ethereum"
        },
      ],

      swiperQuestList: [{
          id: "001",
          bannerContent: "Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.",
          bannerTitle: "Welcome to Ethereum"
        },
        {
          id: "002",
          bannerContent: "Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.",
          bannerTitle: "Welcome to Ethereum"
        },
        {
          id: "003",
          bannerContent: "Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.",
          bannerTitle: "Welcome to Ethereum"
        },
      ],

      clickIndex: 0, // 中间文章内容点击了哪一个
    }
  },
  mounted() {
    console.log('local', localStorage.getItem("userName"))

    if (!localStorage.getItem("userName")) {
      localStorage.setItem("userName", "admin")
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      });
    } else {
      localStorage.setItem("userName", "")
    }

    this.initPageView();
    this.initPageData();

    window.addEventListener('resize', this.echartSize);
  },

  methods: {
    // 初始化部分内容
    initPageView() {

    },

    // 设置 resize 事件
    echartSize() {
      this.trendEchartObj.instance && this.trendEchartObj.instance.resize();
    },

    initPageData() {
      // 基于准备好的dom，初始化echarts实例
      this.trendEchartObj.instance = this.$echarts.init(document.getElementById('trendEchartDIV'));
      this.trendEchartObj.instance.setOption(this.trendEchartObj.option);
    },

    // 点击切换 echarts 查看数据内容
    switchChartData(val) {
      this.echartsVal = val;
    },

    // 点击了具体某个按钮
    handleSelectIndex(val) {
      this.clickIndex = val;
    }
  },
}
