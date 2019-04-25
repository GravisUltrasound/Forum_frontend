import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <img className={s.img} width='100%' height='100%' src='/avatar.png'/>
            <div className={s.text}>
                {props.text}
            </div>
        </div>
    );
}

export default Message;