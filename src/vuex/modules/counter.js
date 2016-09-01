
import {
  INCREMENT,
  DECREMENT
} from '../mutation-types'

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

export default {
    state,
    mutations
}
