# mlementUI

> 模仿elementUI搭建的个人UI库

## 项目结构

```
 ├── examples                                 # 样例（标准vue项目结构）
 └── src
       ├── components
       │    ├── alertSetting                   # alertSetting模块
       │    │    ├── src
       │    │    │   └── alertSetting.vue      # alertSetting组件
       │    │    └── alertSetting.js           # 注册alertSetting组件
       │    └── ...
       ├── theme
       │    ├── styles                         # 各组件样式（scss文件）
       │    │    └── ...
       │    ├── theme.config.scss              # 主题配置文件
       │    └── mElementUI.scss                # 组装样式，对外引用
       └── mElementUI.js                       # 全局注册所有组件
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
