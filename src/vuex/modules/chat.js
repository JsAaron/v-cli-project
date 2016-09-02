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

/**
 * A basic container for state.threads Object
 * @param  {[type]} state [description]
 * @param  {[type]} id    [description]
 * @param  {[type]} name  [description]
 * @return {[type]}       [description]
 */
function createThread(state, id, name) {
    set(state.threads, id, {
        id,
        name,
        messages: [],
        lastMessage: null
    })
}

function addMessage(state, data) {
    //add it to the thread it belongs to
    const thread = state.threads[data.threadID]

    if (!thread.messages.some(id => id === data.id)) {
        thread.messages.push(data.id)
        thread.lastMessage = data
    }

    set(state.messages, data.id, data)
}

const mutations = {
    [types.RECEIVE_ALL](state, message) {
        let latestMessage
        message.forEach(data => {
            //must be there are threadID
            if (!state.threads[data.threadID]) {
                //create a basic container
                createThread(state, data.threadID, data.threadName)
            }
            addMessage(state, data)
        })
    }
}


export default {
    state,
    mutations
}
