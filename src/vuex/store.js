import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'


const state = {
    count: 0,
    history: []
}

const mutations = {
    [INCREMENT](state) {
        state.count++;
        state.history.push('increment')
    },
    [DECREMENT](state) {
        state.count--;
        state.history.push('decrement')
    }
}

export default new Vuex.Store({
    state,
    mutations
})
