import Vuex from 'vuex'
import Vue from 'vue'
import counter  from './modules/counter'
import chat  from './modules/chat'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        counter,
        chat
    }
})
