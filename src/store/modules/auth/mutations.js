/*
 * @Author: Sizhao Li
 * @Date: 2020-12-07 19:58:55
 * @LastEditors: Sizhao Li
 * @LastEditTime: 2020-12-08 15:04:50
 * @Description: file content
 */
export default {
    setUser(state, payload){
        state.token = payload.token;
        state.userId = payload.userId;
        state.didAutoLogout = false
    },
    setAutoLogout(state){
        state.didAutoLogout = true
    }
}