/*
 * @Author: Sizhao Li
 * @Date: 2020-12-07 10:40:28
 * @LastEditors: Sizhao Li
 * @LastEditTime: 2020-12-07 13:47:09
 * @Description: file content
 */
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
export default {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  mutations,
  actions,
  getters
};
