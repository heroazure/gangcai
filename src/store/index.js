/**
 * Created by xuwei on 2017/5/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    categoryId:0
  },
  mutations: {
    changeCategory (state,id) {
      state.categoryId=id
    }
  }
})
export default store
