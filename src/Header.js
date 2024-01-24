import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css';

function Header() {
    return (
        <header className="brand-color text-white py-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <a className="font-weight-bold h2 mb-0" href="https://www.artause.co.kr/">Artause</a>
                </div>
                <div className="menu-items">
                    <Link to="/blog" className="text-white px-2">Blog</Link> {/* Use Link */}
                    <a href="https://www.instagram.com/artause_official/" className="text-white px-2">Instagram</a>
                    <Link to="/aboutus" className="text-white px-2">About Us</Link> {/* Use Link */}
                </div>
            </div>
        </header>
    );
}

export default Header;
