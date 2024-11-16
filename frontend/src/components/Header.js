// Header.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate from React Router
import './Header.css'; // Import styles

const Header = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate(); // Hook to navigate to different routes

    const handleSearch = (e) => {
        e.preventDefault();
        if (query) {
            onSearch(query); // You might want to handle filtering here
            navigate(`/search-results?query=${query}`); // Navigate to the results page
        }
    };

    return (
        <>
            <div className="global-buttons">
                <button className="settings-button">Settings</button>
                <button className="login-button">Login</button>
            </div>

            <div className="header-container">
                <div className="logo-container">
                    <img src="/images/my_logo.jpg" alt="My Logo" className="logo" />
                </div>
                <form className="search-bar-container" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </form>
            </div>
        </>
    );
};

export default Header;
