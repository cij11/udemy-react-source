import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import streams from './streams'

export default combineReducers({
    auth,
    form: formReducer,
    streams,
})
