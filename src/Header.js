import React from 'react';

import './Header.css';

function Header() {
    return (
        <header className="brand-color text-white py-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <a className="font-weight-bold h2 mb-0" href="https://artause.com">Artause</a>
                </div>
                <div className="menu-items">
                    <a href="/blog" className="text-white px-2">Blog</a>
                    <a href="https://www.instagram.com/yourusername" className="text-white px-2">Instagram</a>
                    <a href="/aboutus" className="text-white px-2">About Us</a>
                </div>
            </div>
        </header>

    );
}

export default Header;
