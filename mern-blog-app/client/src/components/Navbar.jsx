/**
 * Navbar Component
 * Navigation bar with authentication state and responsive design
 */

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';

/**
 * Navigation Bar Component
 * @param {Object} props - Component props
 * @param {Object} props.user - Current user object
 * @param {boolean} props.isAuthenticated - Authentication status
 * @param {Function} props.onLogout - Logout handler function
 */
const Navbar = ({ user, isAuthenticated, onLogout }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Check if current route is active
   * @param {string} path - Route path to check
   * @returns {boolean} - True if route is active
   */
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  /**
   * Handle logout click
   */
  const handleLogout = () => {
    onLogout();
    setIsMobileMenuOpen(false);
  };

  /**
   * Toggle mobile menu
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Close mobile menu when link is clicked
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo/Brand */}
        <Link to="/" className={styles.navBrand} onClick={closeMobileMenu}>
          <span className={styles.brandIcon}>📝</span>
          <span className={styles.brandText}>MERN Blog</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className={styles.navLinks}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${isActiveRoute('/') ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`${styles.navLink} ${isActiveRoute('/about') ? styles.active : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`${styles.navLink} ${isActiveRoute('/contact') ? styles.active : ''}`}
          >
            Contact
          </Link>
        </div>

        {/* Authentication Section */}
        <div className={styles.navAuth}>
          {isAuthenticated ? (
            <div className={styles.userMenu}>
              <div className={styles.userInfo}>
                <span className={styles.userAvatar}>
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.name} />
                  ) : (
                    <span className={styles.avatarPlaceholder}>
                      {user?.name?.charAt(0).toUpperCase() || 'U'}
                    </span>
                  )}
                </span>
                <span className={styles.userName}>
                  Welcome, {user?.name || 'User'}
                </span>
              </div>
              <div className={styles.userActions}>
                <Link 
                  to="/profile" 
                  className={`${styles.navLink} ${isActiveRoute('/profile') ? styles.active : ''}`}
                >
                  Profile
                </Link>
                <Link 
                  to="/dashboard" 
                  className={`${styles.navLink} ${isActiveRoute('/dashboard') ? styles.active : ''}`}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className={styles.logoutBtn}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.authLinks}>
              <Link 
                to="/login" 
                className={`${styles.navLink} ${isActiveRoute('/login') ? styles.active : ''}`}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className={`${styles.signupBtn} ${isActiveRoute('/signup') ? styles.active : ''}`}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuContent}>
          {/* Mobile Navigation Links */}
          <div className={styles.mobileNavLinks}>
            <Link 
              to="/" 
              className={`${styles.mobileNavLink} ${isActiveRoute('/') ? styles.active : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`${styles.mobileNavLink} ${isActiveRoute('/about') ? styles.active : ''}`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`${styles.mobileNavLink} ${isActiveRoute('/contact') ? styles.active : ''}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Authentication Section */}
          <div className={styles.mobileAuth}>
            {isAuthenticated ? (
              <div className={styles.mobileUserMenu}>
                <div className={styles.mobileUserInfo}>
                  <span className={styles.userAvatar}>
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.name} />
                    ) : (
                      <span className={styles.avatarPlaceholder}>
                        {user?.name?.charAt(0).toUpperCase() || 'U'}
                      </span>
                    )}
                  </span>
                  <span className={styles.userName}>
                    {user?.name || 'User'}
                  </span>
                </div>
                <Link 
                  to="/profile" 
                  className={`${styles.mobileNavLink} ${isActiveRoute('/profile') ? styles.active : ''}`}
                  onClick={closeMobileMenu}
                >
                  Profile
                </Link>
                <Link 
                  to="/dashboard" 
                  className={`${styles.mobileNavLink} ${isActiveRoute('/dashboard') ? styles.active : ''}`}
                  onClick={closeMobileMenu}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className={styles.mobileLogoutBtn}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className={styles.mobileAuthLinks}>
                <Link 
                  to="/login" 
                  className={`${styles.mobileNavLink} ${isActiveRoute('/login') ? styles.active : ''}`}
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className={`${styles.mobileSignupBtn} ${isActiveRoute('/signup') ? styles.active : ''}`}
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={styles.mobileMenuOverlay}
          onClick={closeMobileMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;

