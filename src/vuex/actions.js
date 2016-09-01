
import * as types from './mutation-types'

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