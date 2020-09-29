import {
    INCREMENT,
    DECREMENT,
    RESET_STEPS,
    SET_FIRSTNAME,
    SET_LASTNAME,
    SET_EMAIL,
    SET_OCCUPATION,
    SET_CITY,
    SET_BIO
} from '../actions/types'


const initialState = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
}
export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                step: state.step + 1
            };

        case DECREMENT:
            return {
                ...state,
                step: state.step - 1
            };

        case RESET_STEPS:
            return {
                ...state,
                step: 1
            };

        case SET_FIRSTNAME:
            return {
                ...state,
                firstName: action.payload
            };
        case SET_LASTNAME:
            return {
                ...state,
                lastName: action.payload
            };
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case SET_OCCUPATION:
            return {
                ...state,
                occupation: action.payload
            };
        case SET_CITY:
            return {
                ...state,
                city: action.payload
            };
        case SET_BIO:
            return {
                ...state,
                bio: action.payload
            };
        default:
            return state;
    }
}