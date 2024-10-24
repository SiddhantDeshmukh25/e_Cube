// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header__logo" onClick={() => navigate('/')}>
                MovieApp
            </div>
            <nav className="header__nav">
                <span onClick={() => navigate('/home')}>Home</span>
                <span onClick={() => navigate('/movies')}>Movies</span>
                <span onClick={() => navigate('/my-bookings')}>My Bookings</span>
                <span onClick={() => navigate('/profile')}>Profile</span>
            </nav>
            <div className="header__search">
                <input type="text" placeholder="Search..." />
            </div>
        </header>
    );
};

export default Header; // Ensure this is a default export
