# uni-router-mini
> 简易版 [Vue-router](https://router.vuejs.org/zh/) 专门为 [uni-app](https://uniapp.dcloud.io/) 服务

## 介绍

uni-router-mini 专为 uni-app 设计,  主要解决 uni-app 没有路由拦截问题。

## 安装
```shell
npm install uni-router-mini
```

## 使用
___routes.js需要与pages.json配置的路径一致___
* router/routes.js 

    ```
     /**
       * @description param intro
       * @param path       必须填充需要与pages.json的路径一致.
       * @param name       不必填，这取决于您的需求.
       * @param meta       可以放入您需要的参数，如“requireAuth”，用作是否拦截的条件
       */
       
     const routes = [
        {
          path: '/pages/index/index',  // 必填   
          name: 'index',
          meta: {
            title: 'index',
            requireAuth: false
          }
        }
     ]
      
      export default routes  
    ```
* main.js 
    ```
      /**
      * @description router
      * beforeEach 
      *      to: 目标路有对象
      *      next: 是否执行下一步的调用函数，类似vue-router
      */
      
      import _routes from './router/routes'
      import Router from 'uni-router-mini'
      
      // registration routing
      const router = new Router({
        routes: _routes
      })
      
      // Front navigation
      router.beforeEach((to, next) => {
        if (to.meta.requireAuth == undefined || to.meta.requireAuth) {
            next()
        } else {
            next()
        }
      })
      
      Vue.prototype.$router = router
    ```    
   
* 页面使用

   ```
      this.$router.push({ path : '', query: { a:1 } }) 等价于 uni.navigateTo()
      
      this.$router.redirectTo({ path : '', query: { a:1 } }) 等价于 uni.redirectTo()
      
      this.$router.switchTab({ path : '', query: { a:1 } }) 等价于 uni.switchTab()
      
      this.$router.reLaunch({ path : '', query: { a:1 } }) 等价于 uni.reLaunch()
      
      this.$router.back({ path : '', query: { a:1 } }) 等价于 uni.navigateBack()
      
    ```
 * 接收参数

  ```
    onLoad(options) {
        const query = options.query
        const a = query.a         
    }
     
  ```
         
    
                                                                                   

