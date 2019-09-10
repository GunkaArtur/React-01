import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="http://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png" alt="logo" width="50px" height="50px"/>
        </header>
    )
}

export default Header;