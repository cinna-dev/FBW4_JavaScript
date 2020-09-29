import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initailState = [];

export default function (state = initailState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return stete.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
