export const LOGIN = 'LOGIN';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVED_MESSAGE = 'RECEIVED_MESSAGE';

export const userLogin = (user) => {
    return {
        type: LOGIN,
        user
    }
};

export const sendMsg = (user, message) => {
    return {
        type: SEND_MESSAGE,
        user,
        message
    }
};

export const receivedMsg = (user, message) => {
    return {
        type: RECEIVED_MESSAGE,
        user,
        message
    }
};