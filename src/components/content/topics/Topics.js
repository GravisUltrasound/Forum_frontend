import React from 'react';
import s from './Topics.module.css';
import Topic from "./Topic";
import {BrowserRouter} from "react-router-dom";
import {
    addNewTopicActionCreator,
    updateFirstMessageTextActionCreator,
    updateTopicTitleActionCreator
} from "../../../redux/state";

const Topics = (props) => {

    let newTopic = React.createRef();
    let newMessage = React.createRef();

    let topicsElements = props.state.topics.map(t => <Topic topicId={t.topicId}
                                                            title={t.title}
                                                            messages={t.messages}
                                                            subscribe={props.state.subscribe}/>);


    let onTopicChange = () => {
        let title = newTopic.current.value;
        props.dispatch(updateTopicTitleActionCreator(title));
    }
    let onFirstMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch(updateFirstMessageTextActionCreator(text));
    }
    let addNewTopic = () => {
        props.dispatch(addNewTopicActionCreator());
        newMessage.current.value = "";
        newTopic.current.value = "";
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
                    <textarea ref={newMessage} onChange={onFirstMessageChange} value={props.newFirstMessage}/>
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