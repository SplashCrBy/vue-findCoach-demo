/*
 * @Author: Sizhao Li
 * @Date: 2020-12-04 10:07:38
 * @LastEditors: Sizhao Li
 * @LastEditTime: 2020-12-07 20:01:43
 * @Description: file content
 */
import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';
const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule
  },
});
export default store;
