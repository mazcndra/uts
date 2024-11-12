// src/components/Header.js
import React from 'react';
import logowrgImage from './logowrg.png';

function Header() {
    return (
        <header className="header">
            <img src={logowrgImage} alt="Warung Pojok Logo" className="logo" />
        </header>
    );
}

export default Header;
