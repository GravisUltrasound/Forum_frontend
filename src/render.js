import React from 'react';
import * as ReactDOM from "react-dom";
import ForumApp from "./ForumApp";
import {addTopic, updateFirstMessageText, updateTopicTitle} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <ForumApp
                state={state}
                addTopic={addTopic}
                updateTopicTitle={updateTopicTitle}
                updateFirstMessageText={updateFirstMessageText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}
