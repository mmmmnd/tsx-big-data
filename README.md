## 一、这是个什么的项目？

基于 Vue3 开发一套可视化数据大屏。

## 二、项目包含什么功能？

### 2.1.技术栈

* 使用 Vue 、TypeScript 、 Tsx 、Echarts 、Swiper 、Data-view 、Eslint 、Sass

### 2.4.优势

* 常量采用Ts独有的枚举
* 全采用组件式开发 组件前缀 v -> 当前 g -> 全局
* 项目按照 1920*1080 比例设计，支持任何尺寸的同比例缩放

## 三、如何学习？

### 3.1.克隆项目

首先使克隆项目，然后进入项目根目录使用命令安装包，最后命令启动项目。

```
# 克隆项目代码
$ git clone https://github.com/mmmmnd/tsx-big-data.git
```

### 3.2.运行项目

```
# 加载依赖
$ yarn install OR cnpm install OR npm install;
```

```
# 运行项目
$ yarn serve OR cnpm run serve OR npm run serve;
```
### 3.2.依赖报错
如果 加载完依赖运行项目 <font color='red'> 报错 </font>

```
# @jiaminghi
$ <template v-for> key should be placed on the <template> tag
```

把项目根目录下`other_modules/@jiaminghi.rar` 解压并替换 node_modules 同名文件即可

## License

喜欢或对你有帮助的话，请你点一个星星 **star** 鼓励我，或者您有更好的建议和意见，请提出来告知我，可以留言 [Issues](https://github.com/mmmmnd/tsx-big-data/issues/new)。希望能够帮助到你学习！Thanks！共勉！

[MIT](https://github.com/mmmmnd/tsx-big-data/blob/master/LICENSE), by mmmmnd
