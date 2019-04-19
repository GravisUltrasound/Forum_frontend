import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <p><img src="\src\images\avatar.png" alt="авка"/></p>
            <div className={s.text}>
                {props.text}
            </div>
        </div>
    );
}

export default Message;