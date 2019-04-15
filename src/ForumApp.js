import React from 'react';
import './ForumApp.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';

const ForumApp = () => {
    return (
        <div className='appMain'>
            <div className='appHeader'>
                <Header/>
            </div>
            <div className='appNavbar'>
                <Navbar/>
            </div>
            <div className='appContent'>
                <Content/>
            </div>
        </div>
    );
}


export default ForumApp;
