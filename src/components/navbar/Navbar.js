import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.appNavbar}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/login' activeClassName={s.active}>
                    Login
                </NavLink>
            </div>
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
        </nav>
    );
}

export default Navbar;