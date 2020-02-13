# uni-router-mini
> A simple [Vue-router](https://router.vuejs.org/zh/)，tailored for [uni-app](https://uniapp.dcloud.io/)

## introduce

uni-router-mini is mainly designed for uni app without route interception function, conform to [Vue-router](https://router.vuejs.org/zh/) usage habits。

## use
___router.js needs to be consistent with pages.json___
* router/routes.js 

    ```
     const routes = [
        {
          path: '/pages/index/index',  // Must fill   
          name: 'index',
          meta: {
            title: 'index',
          }
        }
     ]
      
      export default routes  
    ```
* main.js 
    ```
      import _routes from './router/routes'
      import Router from 'uni-router-mini'
      
      // registration routing
      const router = new Router({
        routes: _routes
      })
      
      // Front navigation
      router.beforeEach((to, next) => {
        next()
      })
      
      Vue.prototype.$router = router
    ```    
   
* pages use

   ```
      this.$router.push({ path : '', query: { a:1 } }) Amount to uni.navigateTo()
      
      this.$router.redirectTo({ path : '', query: { a:1 } }) Amount to uni.redirectTo()
      
      this.$router.switchTab({ path : '', query: { a:1 } }) Amount to uni.switchTab()
      
      this.$router.reLaunch({ path : '', query: { a:1 } }) Amount to uni.reLaunch()
      
      this.$router.back({ path : '', query: { a:1 } }) Amount to uni.navigateBack()
    ```
    
                                                                                   

