import * as types from './mutation-types'
import * as api from '../components/chat/api'

/**
 * counter
 * @param  {[type]} options.dispatch [description]
 * @return {[type]}                  [description]
 */
export const increment = ({
    dispatch
}) => dispatch(types.INCREMENT)

export const decrement = ({
    dispatch
}) => dispatch(types.DECREMENT)

export const incrementIfOdd = ({
    dispatch,
    state
}) => {
    if ((state.count + 1) % 2 === 0) {
        dispatch(types.INCREMENT)
    }
}

export const incrementAsync = ({
    dispatch
}) => {
    setTimeout(() => {
        dispatch(types.INCREMENT)
    }, 1000)
}


/**
 * char
 */
export const getAllMessages = ({ dispatch }) => {
    api.getAllMessages(data => {
        dispatch(types.RECEIVE_ALL, data)
    })
}


export const switchThread = ({ dispatch }, id) => {
    dispatch(types.SWITCH_THREAD, id)
}
