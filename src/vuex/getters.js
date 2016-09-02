/**
 * counter
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
export function recentHistory(state) {
    const end = state.counter.history.length
    const begin = end - 5 < 0 ? 0 : end - 5
    return state.counter.history
        .slice(begin, end)
        .toString()
        .replace(/,/g, ', ')
}


/**
 * chat
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
export function currentThread(state) {
    return state.currentThreadID ? state.threads[state.currentThreadID] : {}
}

export function currentMessages(state) {
    const thread = currentThread(state)
    return thread.messages ? thread.messages.map(id => state.messages[id]) : []
}
