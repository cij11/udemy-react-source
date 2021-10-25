import {
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM,
} from '../actions/types'

import { omit, mapKeys } from 'lodash'

const INITIAL_STATE = {}

const streams = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload } // Square bracket notation is 'key interpolation'. Don't know what key we're going to assign to at build time

        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }

        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload }

        case FETCH_STREAMS:
            return { ...state, ...mapKeys(action.payload, 'id') }

        case DELETE_STREAM:
            return omit(state, action.payload) // nb. The payload for DELETE_STREAM IS an id. So don't need action.payload.id

        default:
            return state
    }
}

export default streams
