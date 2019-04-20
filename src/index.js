import React from 'react';
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import './index.css';

import store from './redux/state'
import ForumApp from "./ForumApp";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <ForumApp
                state={store.getState()}
                addTopic={store.addTopic.bind(store)}
                updateTopicTitle={store.updateTopicTitle.bind(store)}
                updateFirstMessageText={store.updateFirstMessageText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);