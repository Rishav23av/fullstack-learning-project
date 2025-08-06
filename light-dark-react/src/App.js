import React, { useState, useEffect } from 'react';
import './App.css';

const API_KEY = 'c764742307ef4f6174daa905608a0129'; // Replace with your OpenWeatherMap API key

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const searchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error('City not found');
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError('City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchWeather();
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <header className="header">
        <h1>🌤️ Weather App</h1>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            className={`search-input ${darkMode ? 'dark' : 'light'}`}
          />
          <button onClick={searchWeather} disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        {weather ? (
          <div className="weather-card">
            <h2 className="city">
              {weather.name}, {weather.sys.country}
            </h2>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="weather-icon"
            />
            <p className="temp">{weather.main.temp.toFixed(1)}°C</p>
            <p className="description">{weather.weather[0].description}</p>
          </div>
        ) : (
          !error &&
          !loading && (
            <div className="placeholder">
              <p>🌤️ Enter a city to see the weather</p>
            </div>
          )
        )}
      </main>

      <footer className="footer">
        <p>Data from OpenWeatherMap.org | Theme toggle included</p>
      </footer>
    </div>
  );
}

export default App;
