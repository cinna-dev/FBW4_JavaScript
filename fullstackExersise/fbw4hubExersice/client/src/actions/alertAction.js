import {
    SET_ALERT
} from './types'

export const initiateAlert = (alert, msg, type) => dispatch => {

    const alertObj = {
        alert,
        msg,
        type
    }
    dispatch({
        type: SET_ALERT,
        payload: alertObj
    })
    /*   dispatch({
          type: SHOW_ALERT,
          payload: alert
      })
      dispatch({
          type: SET_ALERT_MSG,
          payload: msg
      })
      dispatch({
          type: SET_ALERT_TYPE,
          payload: typ
      }) */
}