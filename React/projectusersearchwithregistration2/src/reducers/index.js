import {
    combineReducers
} from 'redux'
import userSearchReducer from './userSearchReducer'
import registerReducer from './registerReducer'

export default combineReducers({
    users: userSearchReducer,
    register: registerReducer
})