import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className='navbar'>
            <div>
                Profile
            </div>
            <div>
                Topics
            </div>
            <div>
                Favourite topics
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