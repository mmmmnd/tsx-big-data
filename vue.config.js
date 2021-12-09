/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-09 09:33:39
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-09 15:18:37
 */
const path = require('path')
const name = 'tsx-big-data';
const resolve = dir => path.join(__dirname, dir)

// vue.config.js配置官方文档 https://cli.vuejs.org/zh/config
// 为了配置更清晰，此处将所有配置都显式的声明了，包含默认配置
module.exports = {
  // 如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
  // 也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // build生成文件的目录（此目录每次build会被清理，构建时传入 --no-clean 可关闭该行为）
  outputDir: 'dist',
  // 指定生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'static',
  // 指定生成的index.html 的 (相对于 outputDir 的) 目录
  indexPath: 'index.html',
  // 是否在静态资源的文件名中包含 hash 以便更好的控制缓存
  filenameHashing: true,
  // pages 多页应用配置
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: name,
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },
  // 是否在在每次保存时 lint 代码，有效值：ture | false | 'warning' | 'default' | 'error'
  // 设置为default时，lint不通过，编译有警告，浏览器有报错
  // 生产环境为false禁用
  lintOnSave: process.env.NODE_ENV === 'production' ? false : 'default',
  // 是否启用运行时编译，启用会导致运行时性能降低
  runtimeCompiler: false,
  // 默认情况babel会忽略所有node_modules中的文件，如果需要babel转义某些模块，可以在此列出来
  transpileDependencies: [],
  // 是否开启source map（开启后便于调试，不开启可以加速构建）
  productionSourceMap: process.env.NODE_ENV !== 'production',
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
  // 该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响
  crossorigin: '',
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  // 如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性
  integrity: false,
  // 简单修改默认webpack配置
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
  // 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本
  // 文档 https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
  configureWebpack: {
    name,
    resolve: {
      // 依赖路径别名
      alias: {
        '@': resolve('src'),
        "@components": resolve('src/components')
      }
    }
  },
  // 细粒度修改webpack配置
  // 基于 webpack-chain 的 ChainableConfig 实例
  // 文档 https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7
  chainWebpack (config) {
    /* webpack插件 svg-sprite-loader配置 */
    // ./src/assets/svg 是存放svg文件的路径
    // 1. 将./src/assets/svg排除在默认的svg规则之外
    config.module.rule('svg')
      .exclude.add(resolve('src/assets/svg'))
      .end()
    // 2. 添加一条icons规则
    config.module.rule('svg-icon')
      .test(/\.svg$/) // 匹配svg后缀的文件
      .include.add(resolve('src/assets/svg')).end() // 添加规则生效的路径
      .use('svg-sprite-loader') // 使用svg-sprite-loader插件
      .loader('svg-sprite-loader') // 加载svg-sprite-loader插件
      .options({
        symbolId: 'icon-[name]'
      }) // name:文件名，此处的symbolId即svg的xlink:href属性，xlink:href="#icon-文件名"
      .end()
  },
  css: {
    // 设置为true：只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块
    // 设置为 false 后可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块
    requireModuleExtension: true,
    // true：将CSS提取至单独的文件
    // false：通过JavaScript将CSS动态注入为inline代码
    extract: process.env.NODE_ENV === 'production',
    // true：开启CSS source map，有助于调试
    // false：关闭CSS source map，有助于提高打包效率
    sourceMap: process.env.NODE_ENV !== 'production',
    // 向 CSS 相关的 loader 传递选项
    // 支持css-loader,postcss-loader,sass-loader,less-loader,stylus-loader
    // 也可以使用 scss 选项，针对 scss 语法进行单独配置（区别于 sass 语法）
    // 文档 https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      sass: {
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        // 注意：在 sass-loader v10 中，这个选项名是 "additionalData"
        // prependData: '@import "@/assets/styles/variables.scss";'
      }
    }
  },
  // 所有 webpack-dev-server 的选项都支持
  // webpack-dev-server 文档 https://webpack.js.org/configuration/dev-server/
  devServer: {
    host: 'localhost',
    port: 8080,
    disableHostCheck: true,
    // proxy: {
    //   // detail: https://cli.vuejs.org/config/#devserver-proxy
    //   [process.env.BASE_API]: {
    //     target: '',
    //     pathRewrite: { '^/api': '' },
    //     changeOrigin: true
    //     // 如果不想代理所有内容，可以基于bypass函数的返回值绕过代理
    //     // bypass: function(){}
    //   }
    // },
    // 为每个静态文件开启gzip
    compress: true,
    // 启动后打开浏览器
    open: true
  }
}