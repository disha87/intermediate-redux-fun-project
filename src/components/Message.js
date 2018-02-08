import React from 'react';

const Message = ({sender, message, timestamp}) => {
    return (
      <div className="msgContainer">
        <div className="sender">{sender}</div>
        <div className="msgItems"><span className="msg">{message}</span><span className="timestamp">{new String(new Date(timestamp))}</span></div>
      </div>
    );
}

export default Message;