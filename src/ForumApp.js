import React from 'react';
import s from './ForumApp.module.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Topics from './components/content/topics/Topics';
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import Topic from "./components/content/topics/Topic";

const ForumApp = () => {
    return (
        <BrowserRouter>
            <div className={s.appMain}>
                <Header/>
                <Navbar/>
                <div className={s.appContent}>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/topics' component={Topics}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default ForumApp;
