import { objParseUrlAndParam } from './Validate'
import routerLink from '../components/router-link'

class Router {
  constructor({
      routes
  }) {
    Router.$root = this;
    this.routes = routes
    this.callBack = () => {};
  }

  beforeEach(callBack) {
    if (callBack instanceof Function) this.callBack = callBack;
  }

  push(to) {
    this._jump(to, "navigateTo")
  }

  redirectTo(to) {
    this._jump(to, "redirectTo")
  }

  reLaunch(to) {
    this._jump(to, "reLaunch")
  }

  switchTab(to) {
    this._jump(to, "switchTab")
  }

  back(delta) {
    uni.navigateBack({
      delta
    })
  }

  _filter(to) {
    const array = this.routes.filter(i => {
      return i.path == to.path
    })
    if (array.length !== 1) {
      console.error("Wrong routing information:" + JSON.stringify(to))
      return
    }
    return array[0]
  }

  _jump(to, navType) {
    if (to.path == undefined || !to.path) {
      console.error("Wrong routing information:" + JSON.stringify(to))
      return
    }
    this.callBack(this._filter(to), () => {
      return uni[navType]({
        url: objParseUrlAndParam(to.path, to.query)
      })
    });
  }
}

Router.install = function (Vue) {

  Vue.component('RouterLink', routerLink)

  Object.defineProperty(Vue.prototype, "$router", {
    get: function () {
      return Router.$root;
    }
  });

}

export default Router;
