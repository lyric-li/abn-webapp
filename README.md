# abn-webapp

> All is to be nice.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:12138
npm run dev

# build for pre-production with minification
npm run build:pre

# build for production with minification
npm run build:prod

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 目录规范

### API

统一管理模块的 url 请求地址， 如：`src/api/xxx.js`

### 组件

- 通用组件

  提高代码复用，存放在 `src/components/common` 下

- 布局组件

  管理布局相关组件，便于维护，存放在 `src/components/layout` 下

### 图标

- 引入方式

  将 xxx.svg 图标放入 `src/icons/svg` 目录下

- 使用方式

  ```
  <abn-icon class="xxx"/>
  ```

### 状态管理

- 全局

  管理全局状态，存放在 `src/store` 下

- 模块

  管理模块状态，存放在 `src/store/modules` 下，其中 `index.js` 作为模块统一处理文件，请勿修改

其它

- 工具类

  存放在 `src/utils` 下

- 注册全局组件

  在 `src/utils/components.js` 文件中统一注册

- 注册全局过滤器

  在 `src/utils/filters.js` 文件中统一注册

- 注册全局混合

  在 `src/utils/mixins.js` 文件中统一注册
