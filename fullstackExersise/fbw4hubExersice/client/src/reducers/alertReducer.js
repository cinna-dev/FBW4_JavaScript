import {
    SET_ALERT
} from '../actions/types'


const initialState = {
    alertObj: {
        alert: false,
        msg: '',
        type: ''
    }

}
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ALERT:
            return {
                ...state,
                alertObj: action.payload
            };

        default:
            return state;
    }
}