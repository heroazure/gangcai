/**
 * Created by xuwei on 2017/5/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    categoryId:1,
    material:''
  },
  mutations: {
    changeCategory (state,id) {
      state.categoryId=id
    },
    changeMaterial (state,id) {
      state.material=id
    }
  }
})
export default store
