import {
    FETCH_USERS,
    SET_LOADING,
    SET_ALERT,
    SET_ALERTBOOL,
    SET_TEXT
} from '../actions/types'


const initialState = {
    text: '',
    users: [],
    loading: false,
    alert: null,
    alertBool: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            };

        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };

        case SET_ALERT:
            return {
                ...state,
                alert: action.payload
            };

        case SET_ALERTBOOL:
            return {
                ...state,
                alertBool: action.payload
            };

        case SET_TEXT:
            return {
                ...state,
                text: action.payload
            };

        default:
            return state;
    }
}