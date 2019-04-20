import React from 'react';
import s from './Topics.module.css';
import Topic from "./Topic";
import {BrowserRouter, Route} from "react-router-dom";


const Topics = (props) => {
    debugger;

    let topicsElements = props.state.map(t => <Topic topicId={t.topicId} title={t.title} firstMessage={t.firstMessage} messages={t.messages}/>);
    let addTopic = () => {
        let firstMessagetopic = {
            title: newTopic.current.value,
            firstMessage: newMessage.current.value
        };
        props.addTopic(firstMessagetopic);
        newMessage.current.value = '';
        newTopic.current.value = '';

    }
    let newTopic = React.createRef();
    let newMessage = React.createRef();

    return (
        <BrowserRouter>
            <div className={s.topics}>
                <h1>Topics</h1>
                <div>Add message:</div>
                <div>
                    <textarea ref={newTopic}>Topic name...</textarea>
                </div>
                <div>
                    <textarea ref={newMessage}>First message...</textarea>
                </div>
                <div>
                    <button onClick={addTopic}>ADD</button>
                </div>
                {topicsElements}
            </div>
        </BrowserRouter>
    );
}

export default Topics;