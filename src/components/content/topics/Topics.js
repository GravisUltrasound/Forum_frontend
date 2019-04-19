import React from 'react';
import s from './Topics.module.css';
import Topic from "./Topic";
import {BrowserRouter, Route} from "react-router-dom";

const Topics = (props) => {

    let topicsElements = props.state.map(t => <Topic topicId={t.topicId} title={t.title} firstMessage={t.firstMessage} messages={t.messages}/>);

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
                {topicsElements}
            </div>
        </BrowserRouter>
    );
}

export default Topics;