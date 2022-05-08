/*
 * @Author: your name
 * @Date: 2022-04-22 22:45:14
 * @LastEditTime: 2022-04-23 20:40:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/vue.config.js
 */
"use strict";
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = "网站内容"; // title 网站标题

// 默认端口
// mac 下非root用户是无法使用小于1024的常用端口 运行 npm run serve时 记得加 sudo
const port = process.env.VUE_APP_PORT || 80;

module.exports = {
  // 站点根目录路径
  publicPath: process.env.VUE_APP_CONTEXT,

  // 生产环境构建文件的目录
  outputDir: "dist",

  // 放置生成的静态资源的目录
  assetsDir: "static",

  lintOnSave: process.env.NODE_ENV === "development",

  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,

  css: {
    sourceMap: false,
    loaderOptions: {
      scss: {
        // 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀
        // 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
        // prependData: `
        // @import "@scss/variables.scss";
        // @import "@scss/mixins.scss";
        // @import "@scss/function.scss";
        // $src: "${process.env.VUE_APP_OSS_SRC}";
        // `
      }
    }
  },

  devServer: {
    port: port, // 端口
    open: true, // 运行完是否自动打开浏览器
    // 出现编译器错误或警告时，在浏览器中显示全屏覆盖。是否显示警告和错误：
    overlay: {
      warnings: false, // 警告
      errors: process.env.ENV !== "master" // 错误
    },
    proxy: {
      // 配置请求代理,可以配置多个
      "/testIp": {
        target: "http://197.0.0.1:8088",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          "^/testIp": "/"
        }
      }
    }
  },

  configureWebpack: {
    name: name, // 网站标题名
    resolve: {
      alias: {
        "@": resolve("src") // import '@' 相当于 import '/src'
      }
    },
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|.\css/, //匹配文件名
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: false // 不删除源文件
      })
    ],
    module: {
      noParse: /^(vu|vue-router|vuex|vuex-router-sync|lodash|echarts|axios|element-ui)$/
    }
  },

  // 配置进行更细粒度的修改
  chainWebpack(config) {
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");

    // 对图片进行压缩
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end();

    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();

    // set preserveWhitespace
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === "development", config =>
        config.devtool("cheap-source-map")
      );

    config.when(process.env.NODE_ENV !== "development", config => {
      config
        .plugin("ScriptExtHtmlWebpackPlugin")
        .after("html")
        .use("script-ext-html-webpack-plugin", [{
          // `runtime` must same as runtimeChunk name. default is `runtime`
          inline: /runtime\..*\.js$/
        }])
        .end();
      config.optimization.splitChunks({
        chunks: "all",
        maxInitialRequests: Infinity, // 按需加载时候最大的并行请求数，默认为5
        minSize: 30000, // 依赖包超过300000bit将被单独打包
        // 缓存组
        // priority: 缓存组打包的先后优先级
        // minChunks: 表示被引用次数，默认为1
        cacheGroups: {
          //公共模块
          commons: {
            name: 'chunk-commons',
            test: resolve('src'), // can customize your rules
            minSize: 100, //大小超过100个字节
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          },
          // 第三方库
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial', // only package third parties that are initially dependent
            reuseExistingChunk: true,
            enforce: true
          },
          echarts: {
            name: 'chunk-echarts',
            test: /[\\/]node_modules[\\/]echarts[\\/]/,
            chunks: 'all',
            priority: 12,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      });
      config.optimization.runtimeChunk("single");
    });
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
};
