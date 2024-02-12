import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from './images/logo.png';

function Header() {
    return (
        <header className="brand-color text-white py-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <a className="font-weight-bold h2 mb-0" href="https://www.artause.co.kr/">Artause</a>
                    <a href="https://www.artause.co.kr/" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                        <img src={logoImage} alt="Artuase Logo" width="180" height="100" />
                    </a>
                </div>
                <div className="menu-items">
                    <a href="https://blog.naver.com/artause" className="text-white px-2">Blog</a>
                    <a href="https://www.instagram.com/artause_official/" className="text-white px-2">Instagram</a>
                    <Link to="/aboutus" className="text-white px-2">About Us</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
