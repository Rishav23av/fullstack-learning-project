import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check user preference on load
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  // Update when darkMode changes
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <header className="header">
        <h1>Light & Dark Mode</h1>
        <button className="toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <main className="main">
        <p>This is a simple React app that supports both <strong>light</strong> and <strong>dark</strong> modes.</p>
        <p>Click the button above to switch themes. Your preference will be saved!</p>

        <div className="card">
          <h3>Themed Card</h3>
          <p>This card changes appearance based on the selected theme. Try toggling!</p>
        </div>
      </main>

      <footer className="footer">
        <p>Made with ❤️ | React Light & Dark Mode Example</p>
      </footer>
    </div>
  );
}

export default App;