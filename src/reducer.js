import { combineReducers } from 'redux';
import { LOGIN, SEND_MESSAGE, RECEIVED_MESSAGE } from './actions';

let initialState = {
    user: "admin",
    message: "hello"
};

const reducer = (state=initialState, action) => {
    switch (action) {
      case LOGIN: {
          return;
      }
      case SEND_MESSAGE: {
          return;
      }
      case RECEIVED_MESSAGE: {
          return;
      }
      default:
        return state;
    }
};

export const chatReducer = combineReducers({
    reducer
});
