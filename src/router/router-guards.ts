// import * as NProgress from 'nprogress'; // progress bar
// import 'nprogress/nprogress.css'; // progress bar style
import { Router } from 'vue-router';
// import { getToken } from '@/utils/cookies';

// NProgress.configure({ showSpinner: false }); // NProgress Configuration

export function createRouterGuards (router: Router): void {
  router.beforeEach(async (to, from, next) => {
    // start progress bar
    // NProgress.start();
    return next()
  });

  router.afterEach(() => {
    // finish progress bar
    // NProgress.done();
  });
  router.onError((error) => {
    console.log(error, '路由错误')
  })
}
