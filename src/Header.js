import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from './images/logo.png';

function Header() {
    return (
        <header className="brand-color text-white py-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    {/* 이미지를 a 태그로 감싸서 링크를 추가합니다 */}
                    <a href="https://master.d24ekw5jhar2ge.amplifyapp.com/" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                        <img src={logoImage} alt="Artuase Logo" width="200" height="100" />
                    </a>
                </div>
                <div className="menu-items">
                    <Link to="/blog" className="text-white px-2">Blog</Link>
                    <a href="https://www.instagram.com/artause_official/" className="text-white px-2">Instagram</a>
                    <Link to="/aboutus" className="text-white px-2">About Us</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
