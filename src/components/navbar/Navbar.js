import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.appNavbar}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' activeClassName={s.active}>
                    Profile
                </NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/topics' activeClassName={s.active}>
                    Topics
                </NavLink>
            </div>
            New topics
            <ul>
                <li>topic 1</li>
                <li>topic 2</li>
                <li>topic 3</li>
            </ul>
        </nav>
    );
}

export default Navbar;