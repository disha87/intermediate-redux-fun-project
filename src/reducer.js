import { combineReducers } from 'redux';
import { LOGIN, SEND_MESSAGE, RECEIVED_MESSAGE } from './actions';

let initialState = {
    status: "LOGGED_OUT"
    nickname: "admin",
    message: "hello"
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
      case LOGIN: {
          return {
             ...state, status: "LOGGED_IN", nickname: action.nickname
          };
      }
      case SEND_MESSAGE: {
          return {
             ...state, nickname: action.nickname, message: action.message
          };
      }
      case RECEIVED_MESSAGE: {
          return {
             ...state, nickname: action.nickname, message: action.message
          };
      }
      default:
        return state;
    }
};

export const chatReducer = combineReducers({
    reducer
});
