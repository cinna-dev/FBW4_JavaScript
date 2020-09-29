import {
    CREATE_PROFILE,
} from './types'
import apis from '../api';

export const createProfile = (profile) => dispatch => {
    apis.newProfile(profile)
    console.log(profile);
    dispatch({
        type: CREATE_PROFILE,
        payload: profile
    })
}