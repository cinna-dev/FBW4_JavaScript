import {
    combineReducers
} from 'redux'
import createProfileReducer from './createProfileReducer'
import alertReducer from './alertReducer'

export default combineReducers({
    profile: createProfileReducer,
    alert: alertReducer
})