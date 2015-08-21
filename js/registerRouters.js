import App from './app';
/*
 Register Routers here.
 Make sure to register to longest routes with matching beginnings first
 or you will get the wrong router from the factory
 */
App.RouterFactory.registerRouter('/', () => {
  return new Promise(resolve => {
    require(['./routers/IndexRouter'], function(IndexRouter) {
      resolve(IndexRouter);
    });
  });
});