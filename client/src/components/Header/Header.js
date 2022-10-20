import React from "react";
import './Header.scss';

const Header = ({ title }) => {

    return <header>
                <h1>{title}</h1>
                <a href="/">Weather</a>
                <a href="/about">About</a>
                <a href="/help">Help</a>
            </header>
};

export default Header;