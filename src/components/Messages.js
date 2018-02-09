import React from 'react';
import Message from './Message';

const Messages = ({messages}) => {
    const msgList = messages.map((msgObj, index)=>{
        return (<Message key={index} sender={msgObj.sender} message={msgObj.message} timestamp={msgObj.timestamp} />)
    });
    return (
        <div className="msgList">{msgList}</div>
    );
}

export default Messages;