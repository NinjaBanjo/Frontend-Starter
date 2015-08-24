import Promise from 'bluebird';
import Backbone from 'backbone';

class RouteFactory {
  constructor() {
    this.routers = {};
  }

  registerRouter(basePath, routerPromise) {
    if (typeof basePath !== 'string') throw new Error('basePath must be a string');
    if (typeof routerPromise !== 'function') throw new Error('routerPromise must be a function');
    this.routers[basePath] = {loaded: false, routerPromise: routerPromise};
  }

  getRouter(url) {
    var routerObject = this.matchRouter(url);
    if (routerObject) {
      if (routerObject.loaded === false) {
        return this.loadRouter(routerObject);
      } else {
        return Promise.resolve(routerObject.router);
      }
    }
    return Promise.reject('');
  }

  loadRouter(routerObject) {
    return new Promise((resolve, reject) => {
      routerObject.routerPromise()
        .then(router => {
          var newRouter = routerObject.router = new router();
          routerObject.loaded = true;
          resolve(newRouter);
        })
        .catch(reject);
    });
  }

  matchRouter(url) {
    const matchedRouters = Object.keys(this.routers)
      // Make sure our keys are ordered longest first
      .sort((a, b) => {
        return b.length - a.length;
      })
      .filter(e => {
        return (url.indexOf(e) === 0);
      });

    if (matchedRouters.length > 0) {
      // If we found only 1 matched router, return the routerObject
      return this.routers[matchedRouters[0]];
    } else {
      throw new Error('No matched routers');
    }
  }

  navigate(url) {
    this.getRouter(url)
      .then(router => {
        Backbone.history.stop();
        Backbone.history.start();
        router.navigate(url, {trigger: true});
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export default RouteFactory;