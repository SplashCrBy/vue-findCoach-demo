/*
 * @Author: Sizhao Li
 * @Date: 2020-12-07 10:40:38
 * @LastEditors: Sizhao Li
 * @LastEditTime: 2020-12-07 14:29:54
 * @Description: file content
 */
export default {
    requests(state, _, _2, rootGetters){
        const coachId = rootGetters.userId;
        return state.requests.filter(req => req.coachId === coachId);
    },
    hasRequests(_, getters){
        return getters.requests && getters.requests.length > 0;
    }
}
