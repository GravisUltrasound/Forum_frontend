import React from 'react';
import s from './Topic.module.css';
import Message from "../messages/Message";
import {NavLink} from "react-router-dom";


const Topic = (props) => {
    return(
        <div className={s.topic}>
            <NavLink to={"/topics/" + props.topicId}>
                <h3>{props.title}</h3>
            </NavLink>
            <div className={s.message}>
                {props.firstMessage}
            </div>
        </div>
    );
}

export default Topic;
