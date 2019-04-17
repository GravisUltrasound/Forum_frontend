import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <img
                src='https://image.flaticon.com/icons/png/512/64/64572.png'/>
            <div className={s.text}>
                {props.text}
            </div>
        </div>
    );
}

export default Message;