import React from 'react';
import s from './Topic.module.css';

const Topic = (props) => {
    return(
        <div className={s.topic}>
            <h3>
                {props.title}
            </h3>
            <div className={s.message}>
                {props.firstMessage}
            </div>
        </div>
    );
}

export default Topic;
