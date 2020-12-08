/*
 * @Author: Sizhao Li
 * @Date: 2020-12-07 19:58:49
 * @LastEditors: Sizhao Li
 * @LastEditTime: 2020-12-08 15:01:49
 * @Description: file content
 */
export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state){
    return !!state.token;
  },
  didAutoLogout(state) {
      return state.didAutoLogout;
  }
};
