import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../ucsc_logo.png';

function NavigationBar() {
    return (
    <header className="top-bar">
        <Link to="/" className="logo-link">
            <img src={logo} className="Logo" alt="UCSC Logo" />
        </Link>
        <Link to="/" className="title-link">
            <h1 className="homepage-title">UC Santa Cruz Grade Distribution</h1>
        </Link>
        <Link to="/about" className="about-link">
            <h3 className="about-button">About</h3>
        </Link>
    </header>
    )
}

export default NavigationBar;