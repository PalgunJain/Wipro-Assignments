import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // ✅ Named Import

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'}`}>
            Toggle Theme
        </button>
    );
};

export default ThemeToggle;

