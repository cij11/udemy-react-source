import { SIGN_IN, SIGN_OUT } from './types'
import streams from '../apis/streams'

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId,
    }
}

export const signOut = (userId) => {
    return {
        type: SIGN_OUT,
        payload: userId,
    }
}

export const createStream = (formValues) => {
    // asynchronous action creators return arrow functions,
    // that take dispatch as the first argument.

    // That way, when we dispatch an action, the middleware can call the function with dispatch, and we can
    // use that dispatch when whatever asynchronous process has returned.
    return async (dispatch) => {
        streams.post('/streams', formValues)
    }
}
