import React from 'react';
import s from './ForumApp.module.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Topics from './components/content/topics/Topics';
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import state from "./redux/state.js";
import Topic from "./components/content/topics/Topic";
import {addTopic, updateFirstMessageText, updateTopicTitle} from "./redux/state";

const ForumApp = (props) => {
    return (
        <BrowserRouter>
            <div className={s.appMain}>
                <Header/>
                <Navbar/>
                <div className={s.appContent}>
                    <Route path='/profile'
                           render={() => <Profile state={state.users}/>}/>
                    <Route path='/topics'
                           render={() => <Topics state={state}
                                                 addTopic={addTopic}
                                                 updateFirstMessageText={updateFirstMessageText}
                                                 updateTopicTitle={updateTopicTitle}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default ForumApp;
