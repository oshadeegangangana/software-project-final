import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                Brain Master
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}
                />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>

                <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                        About Us <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>

                 

                 <li className='nav-item'>
                    <Link to='/chatbox' className='nav-links' onClick={closeMobileMenu}>
                        ChatBox
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/registration' className='nav-links' onClick={closeMobileMenu}>
                        Registration
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Login
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                        Profile
                    </Link>
                </li>
            </ul>
            <Button />
        </nav>
    </>
    );
};

export default Navbar;