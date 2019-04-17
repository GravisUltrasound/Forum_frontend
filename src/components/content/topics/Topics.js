import React from 'react';
import s from './Topics.module.css';
import Topic from "./Topic";
import {BrowserRouter, Route} from "react-router-dom";

const Topics = () => {
    return (
        <BrowserRouter>
            <div className={s.topics}>
                <h1>Topics</h1>
                <div>Add message:</div>
                <div>
                    <textarea>Topic name...</textarea>
                </div>
                <div>
                    <textarea>First message...</textarea>
                </div>
                <div>
                    <button>ADD</button>
                </div>
                <Topic topicId="1" title="Title 1" firstMessage="First message text"/>
                <Topic topicId="2" title="Title 2" firstMessage="Second message text"/>
            </div>
        </BrowserRouter>
    );
}

export default Topics;