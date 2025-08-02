import React, { useState, useEffect } from 'react';
import './App.css';

const API_KEY = 'c764742307ef4f6174daa905608a0129'; // Replace with your OpenWeatherMap API key

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch weather data
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=en`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError('City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      alert('Please enter a city name');
      return;
    }
    fetchWeather(city);
  };

  // Load default city on mount
  useEffect(() => {
    fetchWeather('Delhi');
  }, []);

  return (
    <div className="main">
      <h1>Weather App</h1>

      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>

      <div className="content">
        {loading ? (
          <>
            <div className="weather-info">
              <h2>Loading...</h2>
              <p>Fetching weather data</p>
            </div>
          </>
        ) : error ? (
          <div className="weather-info">
            <h2>Error</h2>
            <p>{error}</p>
          </div>
        ) : (
          <>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather icon"
              id="icon"
            />
            <div className="weather-info">
              <h2 id="city">
                {weather.name}, {weather.sys.country}
              </h2>
              <p id="temp">{weather.main.temp.toFixed(1)}°C</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
