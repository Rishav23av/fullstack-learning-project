/**
 * Main App Component
 * Handles routing and overall application structure
 */

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './utils/ProtectedRoute';
import { apiService } from './services/api.service';
import './App.css';

/**
 * Main Application Component
 */
function App() {
  // Global state for user authentication
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Check if user is authenticated on app load
   */
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // Verify token with backend
          const response = await apiService.verifyToken();
          if (response.success) {
            setUser(response.data.user);
            setIsAuthenticated(true);
          } else {
            // Token is invalid, remove it
            localStorage.removeItem('token');
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  /**
   * Login function to be passed to Login component
   */
  const handleLogin = (userData, token) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
  };

  /**
   * Logout function to be passed to components
   */
  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Navigation bar - always visible */}
      <Navbar 
        user={user} 
        isAuthenticated={isAuthenticated} 
        onLogout={handleLogout} 
      />

      {/* Main content area */}
      <main className="main-content">
        <Routes>
          {/* Public routes */}
          <Route 
            path="/" 
            element={<Home user={user} isAuthenticated={isAuthenticated} />} 
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Authentication routes - only accessible when not logged in */}
          <Route 
            path="/login" 
            element={
              isAuthenticated ? (
                <Home user={user} isAuthenticated={isAuthenticated} />
              ) : (
                <Login onLogin={handleLogin} />
              )
            } 
          />
          <Route 
            path="/signup" 
            element={
              isAuthenticated ? (
                <Home user={user} isAuthenticated={isAuthenticated} />
              ) : (
                <Signup onLogin={handleLogin} />
              )
            } 
          />

          {/* Protected routes - only accessible when logged in */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <div className="profile-page">
                  <h1>User Profile</h1>
                  <div className="profile-info">
                    <h2>Welcome, {user?.name}!</h2>
                    <p><strong>Email:</strong> {user?.email}</p>
                    <p><strong>Bio:</strong> {user?.bio || 'No bio provided'}</p>
                    <p><strong>Member since:</strong> {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}</p>
                  </div>
                </div>
              </ProtectedRoute>
            } 
          />

          {/* Dashboard route - protected */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <div className="dashboard-page">
                  <h1>Dashboard</h1>
                  <p>Welcome to your dashboard, {user?.name}!</p>
                  <div className="dashboard-stats">
                    <div className="stat-card">
                      <h3>Your Posts</h3>
                      <p>0</p>
                    </div>
                    <div className="stat-card">
                      <h3>Comments</h3>
                      <p>0</p>
                    </div>
                    <div className="stat-card">
                      <h3>Views</h3>
                      <p>0</p>
                    </div>
                  </div>
                </div>
              </ProtectedRoute>
            } 
          />

          {/* 404 route */}
          <Route 
            path="*" 
            element={
              <div className="not-found">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
              </div>
            } 
          />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; 2024 MERN Blog App. All rights reserved.</p>
          <p>Built with React, Node.js, Express, and MongoDB</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

