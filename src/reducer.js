import { combineReducers } from 'redux';
import { LOGIN, LOGIN_FAILED, USER_NAME_CHANGED, MESSAGE_CHANGED, SEND_MESSAGE, RECEIVED_MESSAGE } from './actions';

let initialState = {
    status: "LOGGED_OUT",
    name: "admin",
    message: "hello",
    messages:[]
};

const chatReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
               ...state, status: "LOGGED_IN", name: action.name
            };
        }
        case USER_NAME_CHANGED: {
            return {
               ...state, name: action.name
            };
        }
        case MESSAGE_CHANGED: {
            return {
               ...state, message: action.message
            };
        }
        case LOGIN_FAILED: {
            return {
               ...state, status: "LOGIN_FAILED", name: action.name
            };
        }
        case SEND_MESSAGE: {
            const msgs =  [...state.messages];
            msgs.push({
                "sender": action.name,
                "message": action.message,
                "timestamp": "7364"
            });

            return {
               ...state, name: action.name, message: action.message, messages: msgs
            };
        }
        case RECEIVED_MESSAGE: {
            return {
               ...state, name: action.name, message: action.message
            };
        }
        default:
          return state;
      }
};

export default chatReducer;
