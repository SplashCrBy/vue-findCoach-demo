/*
 * @Author: Sizhao Li
 * @Date: 2020-12-03 19:41:41
 * @LastEditors: Sizhao Li
 * @LastEditTime: 2020-12-08 11:26:04
 * @Description: file content
 */
import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachList.vue';
import CoachRegistration from './pages/coaches/CoachRegister.vue';
import contactCoach from './pages/requests/contactCoach.vue';
import requestReceived from './pages/requests/requestRecieved.vue';
import notFound from './pages/notFound.vue';
import UserAuth from './pages/auth/userAuth.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      props: true,
      component: CoachDetail,
      children: [{ path: 'contact', component: contactCoach }]
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true }
    },
    {
      path: '/requests',
      component: requestReceived,
      meta: { requiresAuth: true }
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: notFound }
  ]
});

router.beforeEach(function(to, _, next) {
  console.log(store.getters.isAuthenticated)
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
