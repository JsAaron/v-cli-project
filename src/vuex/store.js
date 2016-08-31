import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


const state = {
  count: 0
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

export default new Vuex.Store({
  state,
  mutations
})
