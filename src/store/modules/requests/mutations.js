/*
 * @Author: Sizhao Li
 * @Date: 2020-12-07 10:40:50
 * @LastEditors: Sizhao Li
 * @LastEditTime: 2020-12-07 17:18:56
 * @Description: file content
 */
export default {
  addRequest(state, payload) {
    state.requests.push(payload);
  },
  setRequests(state, payload){
    state.requests = payload;
  }
};
