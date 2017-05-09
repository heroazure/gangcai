/**
 * Created by xuwei on 2017/5/7.
 */
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default store
