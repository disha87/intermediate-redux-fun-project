import SendBird from 'sendbird';
import { login, hear, join, say } from './chat';

export const LOGIN = 'LOGIN';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const USER_NAME_CHANGED = 'USER_NAME_CHANGED';
export const MESSAGE_CHANGED = 'MESSAGE_CHANGED';
export const RECEIVED_MESSAGE = 'RECEIVED_MESSAGE';
let _channel;

export const userLogin = (name, status, channel) => {
    return {
        type: LOGIN,
        name,
        status,
        channel
    }
};

export const loginFailed = (name, status) => {
    return {
      type: LOGIN_FAILED
    }
};

export const sendMsg = (name, message) => {
    return {
        type: SEND_MESSAGE,
        name,
        message
    }
};

export const userNameChanged = (name) => {
    return {
        type: USER_NAME_CHANGED,
        name
    }
};

export const messageChanged = (message) => {
    return {
        type: MESSAGE_CHANGED,
        message
    }
};

export const receivedMsg = (name, message) => {
    return {
        type: RECEIVED_MESSAGE,
        name,
        message
    }
};

export const doLogin = (name, status) => { 
  return dispatch => {
    login(name, name)
      .then(({ connection, user }) => {
        join(connection)
          .then(channel =>
            {   
              _channel = channel;
              dispatch(userLogin(name, status, channel));
            }
          )
        hear(connection, (channel, message) => {
          console.log(message, channel)
        })
      })
  }
};

export const doSend = (message) => {
  if (!_channel) {
      console.error("login to send message");
  }
  return dispatch => {
      say(_channel, message);
  }
}
