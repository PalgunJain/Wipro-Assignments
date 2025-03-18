import React, { createContext, useState } from 'react';

// ✅ Named export
export const ThemeContext = createContext(); 

// ✅ Default export
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;  // ✅ Default export
