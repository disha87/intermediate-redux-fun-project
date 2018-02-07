export const LOGIN = 'LOGIN';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVED_MESSAGE = 'RECEIVED_MESSAGE';

export const userLogin = (nickname, status) => {
    return {
        type: LOGIN,
        status,
        nickname
    }
};

export const sendMsg = (nickname, message) => {
    return {
        type: SEND_MESSAGE,
        nickname,
        message
    }
};

export const receivedMsg = (nickname, message) => {
    return {
        type: RECEIVED_MESSAGE,
        nickname,
        message
    }
};