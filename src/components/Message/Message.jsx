import React from 'react';
import './Message.css';

const Message = ({text, status}) => {
    return (
        <p className={`Message ${status === 'error' ? 'Message_status_error' : 'Message_status_note'}`}>
            {text}
        </p>
    );
};

export default Message;