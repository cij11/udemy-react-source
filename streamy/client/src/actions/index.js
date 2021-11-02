import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM,
} from './types'
import streams from '../apis/streams'
import history from '../history'

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

export const createStream = (formValues) => async (dispatch, getState) => {
    // asynchronous action creators return arrow functions,
    // that take dispatch as the first argument.

    // That way, when we dispatch an action, the middleware can call the function with dispatch, and we can
    // use that dispatch when whatever asynchronous process has returned.

    const { userId } = getState().auth
    const response = await streams.post('/streams', { ...formValues, userId })

    dispatch({
        type: CREATE_STREAM,
        payload: response.data,
    })

    history.push('/')
}

export const fetchStreams = () => async (dispatch) => {
    const response = await streams.get('/streams')

    dispatch({ type: FETCH_STREAMS, payload: response.data })
}

export const fetchStream = (id) => async (dispatch) => {
    console.log('Fetch stream called with id ' + id)
    const response = await streams.get(`streams/${id}`)

    dispatch({ type: FETCH_STREAM, payload: response.data })
}

export const editStream = (id, formValues) => async (dispatch) => {
    const response = await streams.patch(`streams/${id}`, formValues)

    dispatch({ type: EDIT_STREAM, payload: response.data })

    history.push('/')
}

export const deleteStream = (id) => async (dispatch) => {
    await streams.delete(`streams/${id}`)
    dispatch({ type: DELETE_STREAM, payload: id })

    history.push('/')
}
