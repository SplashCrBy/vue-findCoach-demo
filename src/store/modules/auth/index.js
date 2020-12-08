/*
 * @Author: Sizhao Li
 * @Date: 2020-12-07 19:58:37
 * @LastEditors: Sizhao Li
 * @LastEditTime: 2020-12-08 14:58:44
 * @Description: file content
 */

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
      didAutoLogout: false
    };
  },
  mutations,
  actions,
  getters
};
