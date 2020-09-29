import {
    FETCH_USERS,
    SET_LOADING,
    SET_ALERT,
    SET_ALERTBOOL,
    SET_TEXT
} from './types'

import axios from 'axios';

export const searchUsers = (text) => async dispatch => {

    if (text === '') {

        dispatch({
            type: SET_ALERT,
            payload: {
                msg: 'Please enter something',
                type: 'warning'
            }
        })

        dispatch({
            type: SET_ALERTBOOL,
            payload: true
        })

    } else {
        dispatch({
            type: SET_LOADING,
            payload: true
        })
        const APIKey = process.env.REACT_APP_CLIENT_ID;
        const APISecret = process.env.REACT_APP_CLIENT_SECRET;

        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}&client_id=${APIKey}&client_secret=${APISecret}`
        );

        dispatch({
            type: FETCH_USERS,
            payload: res.data.items
        })
        dispatch({
            type: SET_LOADING,
            payload: false
        })
        dispatch({
            type: SET_TEXT,
            payload: ''
        })
    }
};


export const clearUsers = () => dispatch => {

    dispatch({
        type: FETCH_USERS,
        payload: []
    })
}

export const activateLoading = () => dispatch => {

    dispatch({
        type: SET_LOADING,
        payload: true
    })
}

export const deActivateLoading = () => dispatch => {

    dispatch({
        type: SET_LOADING,
        payload: false
    })
}


export const setAlert = (value, bool) => dispatch => {

    dispatch({
        type: SET_ALERT,
        payload: value
    })

    dispatch({
        type: SET_ALERTBOOL,
        payload: bool
    })
}



export const setText = (text) => dispatch => {

    dispatch({
        type: SET_TEXT,
        payload: text
    })
}