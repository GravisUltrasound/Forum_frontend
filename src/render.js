import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ForumApp from './ForumApp';
import {addTopic} from "./redux/state";
import {updateFirstMessageText} from "./redux/state";
import {updateTopicTitle} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <ForumApp state={state}
                      addTopic={addTopic}
                      updateFirstMessageText={updateFirstMessageText}
                      updateTopicTitle={updateTopicTitle}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
// export default renderEntireTree;


