import {set } from 'vue'

import * as types from '../mutation-types'


const state = {
    currentThreadID: null,
    threads: {
        /*
        id: {
          id,
          name,
          messages: [...ids],
          lastMessage
        }
        */
    },
    messages: {
        /*
        id: {
          id,
          threadId,
          threadName,
          authorName,
          text,
          timestamp,
          isRead
        }
        */
    }
}


function createThread(state, id, name) {
    set(state.threads, id, {
        id,
        name,
        messages: [],
        lastMessage: null
    })
}

const mutations = {
    [types.RECEIVE_ALL](state, data) {
        let latestMessage
        data.forEach(message => {
            if (!state.threads[message.threadID]) {
                createThread(state, message.threadID, message.threadName)
            }
            
        })

        // console.log(state.threads)
    }
}


export default {
    state,
    mutations
}
