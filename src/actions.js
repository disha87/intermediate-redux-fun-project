export const LOGIN = 'LOGIN';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVED_MESSAGE = 'RECEIVED_MESSAGE';

export const userLogin = (name, status) => {
    return {
        type: LOGIN,
        name,
        status
    }
};

export const sendMsg = (name, message) => {
    return {
        type: SEND_MESSAGE,
        name,
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