import React from 'react';
import s from './Topics.module.css';
import Topic from "./Topic";
import {BrowserRouter} from "react-router-dom";

const Topics = (props) => {

    let addNewTopic = () => {
        let firstMessageTopic = {
            title: newTopic.current.value,
            firstMessage: newMessage.current.value
        }
        props.addTopic(firstMessageTopic);
        newMessage.current.value = "";
        newTopic.current.value = "";
    }

    let newTopic = React.createRef();
    let newMessage = React.createRef();

    let topicsElements = props.state.topics.map(t => <Topic topicId={t.topicId}
                                                            title={t.title}
                                                            firstMessage={t.firstMessage}
                                                            messages={t.messages}/>);

    let onTopicChange = () => {
        let title = newTopic.current.value;
        props.updateTopicTitle(title);
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
                    <div>New topic:</div>
                    <textarea ref={newTopic} onChange={onTopicChange} value={props.newTopicTitle}/>
                </div>
                <div>
                    <div>First message:</div>
                    <textarea ref={newMessage} onChange={onMessageChange} value={props.newFirstMessage}/>
                </div>
                <div>
                    <button onClick={addNewTopic}>Add</button>
                </div>
                {topicsElements}
            </div>
        </BrowserRouter>
    );
}

export default Topics;