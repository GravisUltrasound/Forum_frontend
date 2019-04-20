import React from 'react';
import s from './Topics.module.css';
import Topic from "./Topic";
import {BrowserRouter, Route} from "react-router-dom";


const Topics = (props) => {
    debugger;

    let topicsElements = props.state.topics.map(t => <Topic topicId={t.topicId} title={t.title} firstMessage={t.firstMessage} messages={t.messages}/>);
    let addTopic = () => {
        let firstMessageTopic = {
            title: newTopic.current.value,
            firstMessage: newMessage.current.value
        };
        props.addTopic(firstMessageTopic);
        newMessage.current.value = '';
        newTopic.current.value = '';

    }
    let newTopic = React.createRef();
    let newMessage = React.createRef();

    let onTopicChange = () => {
        let text = newTopic.current.value;
        props.updateTopicTitle(text);
    }
    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateFirstMessageText(text);
    }

    return (
        <BrowserRouter>
            <div className={s.topics}>
                <h1>Topics</h1>
                <div>
                    <div>New Topic</div>
                    <textarea onChange={onTopicChange} ref={newTopic} value={props.newTopicTitle}/>
                </div>
                <div>
                    <div>Message of topic</div>
                    <textarea onChange={onMessageChange} ref={newMessage} value={props.newFirstMessageText}/>
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