import React from 'react';
import s from './ForumApp.module.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Topics from './components/content/topics/Topics';
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import store from "./redux/state.js";
import Login from "./components/content/login/Login.js";
import Topic from "./components/content/topics/Topic";

const ForumApp = (props) => {
    return (
        <BrowserRouter>
            <div className={s.appMain}>
                <Header/>
                <Navbar/>
                <div className={s.appContent}>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/profile'
                           render={() => <Profile state={store.getState().users}/>}/>
                    <Route path='/topics'
                           render={() => <Topics state={store.getState()}
                                                 dispatch={props.dispatch}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default ForumApp;
