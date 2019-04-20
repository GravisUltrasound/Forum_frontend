import React from 'react';
import * as ReactDOM from "react-dom";
import ForumApp from "./ForumApp";
import {addTopic, subscribe, updateFirstMessageText, updateTopicTitle} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import state from './redux/state';
import './index.css';

let renderEntireTree = (state) => {
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

renderEntireTree(state);
subscribe(renderEntireTree);