# 使用koa+react+webpack实现同构的例子

## 安装 
  使用yarn 或 npm 安装
  ```sh
   npm install 或 yarn install
  ```

## 使用

  ```sh
  npm start 开启webpack-dev-server服务器
  npm run server 开启同构服务器
  npm run dist:client 构建客户端代码
  npm run dist:server 构建服务端代码
  ```

## 说明
  node 环境基于v8.10.1, koa@2.5.1 , webpack基于v4.8.1
  本实例通过使用koa+react的组合实现服务端和客户端代码的同构
  在基于接口开发的前后端分离过程中，同构可以有效的解决SEO的问题，以及优化首屏渲染的速度。

## 小结
  1. es7语法需要转换成es2015的语法才能用于客户端和服务端，webpack对待客户端和服务端的打包方式有所区别，特别是服务端的转换，需要注意mode的配置
  2. 在开发环境中，webpack打包后的js在加了hash之后，如何同步插入到views中的模版文件中，这是一个难点。
  3. webpack@4之后，部分配置有所变动，某些插件需要更换才能适应，比如css的提取插件。因此过一段时间以后，直接npm install 可能并不能成功的安装和运行，采用node.js的技术方案，需要时刻保持对相关技术的跟进。
  4. 增加Immutable.js之后，view层的数据以及发往服务器的数据都需要遵照Immmutable的语法，这个地方有些不便，可能用immer.js会更方便一些。
  5. 增加redux-thunk 实现异步redux
  6. 增加checkbox组件演示react组件的创建和使用
