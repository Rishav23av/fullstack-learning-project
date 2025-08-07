/**
 * Login Page Component
 * User authentication login form
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { apiService } from '../services/api.service';

/**
 * Login Page Component
 * @param {Object} props - Component props
 * @param {Function} props.onLogin - Login success callback
 */
const Login = ({ onLogin }) => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Get return URL from location state
  const returnUrl = location.state?.from || '/';

  /**
   * Handle form input changes
   * @param {Event} e - Input change event
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  /**
   * Validate form data
   * @returns {boolean} - True if form is valid
   */
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await apiService.auth.login({
        email: formData.email.trim().toLowerCase(),
        password: formData.password
      });

      if (response.success) {
        // Call the onLogin callback with user data and token
        onLogin(response.data.user, response.data.token);
        
        // Redirect will be handled by the parent component
      } else {
        setErrors({ general: response.message || 'Login failed' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ 
        general: error.message || 'Login failed. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Toggle password visibility
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-container">
          {/* Login Form */}
          <div className="login-form-section">
            <div className="form-header">
              <h1 className="form-title">Welcome Back</h1>
              <p className="form-subtitle">
                Sign in to your account to continue
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {/* General Error Message */}
              {errors.general && (
                <div className="alert alert-error">
                  {errors.general}
                </div>
              )}

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="Enter your email"
                    autoComplete="email"
                    disabled={isSubmitting}
                  />
                  <span className="input-icon">📧</span>
                </div>
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    disabled={isSubmitting}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkbox-text">Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Signing In...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">🚀</span>
                    Sign In
                  </>
                )}
              </button>

              {/* Sign Up Link */}
              <div className="form-footer">
                <p className="signup-prompt">
                  Don't have an account?{' '}
                  <Link to="/signup" className="signup-link">
                    Sign up here
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* Welcome Section */}
          <div className="welcome-section">
            <div className="welcome-content">
              <h2 className="welcome-title">Join Our Community</h2>
              <p className="welcome-description">
                Connect with fellow writers, share your thoughts, and discover 
                amazing content from our vibrant blogging community.
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-icon">✍️</span>
                  <span className="feature-text">Write and publish your stories</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">👥</span>
                  <span className="feature-text">Connect with other writers</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📈</span>
                  <span className="feature-text">Track your post performance</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <span className="feature-text">Reach your target audience</span>
                </div>
              </div>

              <div className="stats">
                <div className="stat">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Active Writers</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5000+</div>
                  <div className="stat-label">Published Posts</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Monthly Readers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          padding: var(--spacing-xl) 0;
        }

        .login-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1200px;
          margin: 0 auto;
          background-color: var(--bg-primary);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }

        .login-form-section {
          padding: var(--spacing-2xl);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
        }

        .form-title {
          font-size: var(--font-size-3xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .form-subtitle {
          color: var(--text-secondary);
          font-size: var(--font-size-lg);
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .form-label {
          font-weight: 600;
          color: var(--text-primary);
          font-size: var(--font-size-sm);
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .form-input {
          width: 100%;
          padding: var(--spacing-md) var(--spacing-lg);
          padding-right: 3rem;
          border: 2px solid var(--border-color);
          border-radius: var(--radius-lg);
          font-size: var(--font-size-base);
          transition: all var(--transition-fast);
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-input.error {
          border-color: var(--error-color);
        }

        .form-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .input-icon {
          position: absolute;
          right: var(--spacing-md);
          font-size: var(--font-size-lg);
          color: var(--text-muted);
          pointer-events: none;
        }

        .password-toggle {
          position: absolute;
          right: var(--spacing-md);
          background: none;
          border: none;
          font-size: var(--font-size-lg);
          cursor: pointer;
          padding: var(--spacing-xs);
          border-radius: var(--radius-sm);
          transition: background-color var(--transition-fast);
        }

        .password-toggle:hover {
          background-color: var(--bg-secondary);
        }

        .error-message {
          color: var(--error-color);
          font-size: var(--font-size-sm);
          font-weight: 500;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          cursor: pointer;
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
        }

        .checkbox {
          width: 16px;
          height: 16px;
          accent-color: var(--primary-color);
        }

        .forgot-link {
          color: var(--primary-color);
          font-size: var(--font-size-sm);
          font-weight: 500;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .forgot-link:hover {
          color: var(--primary-hover);
          text-decoration: underline;
        }

        .submit-btn {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
          color: var(--text-light);
          border: none;
          padding: var(--spacing-md) var(--spacing-xl);
          border-radius: var(--radius-lg);
          font-size: var(--font-size-base);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-normal);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
          margin-top: var(--spacing-md);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid var(--text-light);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .btn-icon {
          font-size: var(--font-size-lg);
        }

        .form-footer {
          text-align: center;
          margin-top: var(--spacing-lg);
        }

        .signup-prompt {
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
        }

        .signup-link {
          color: var(--primary-color);
          font-weight: 600;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .signup-link:hover {
          color: var(--primary-hover);
          text-decoration: underline;
        }

        .welcome-section {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
          color: var(--text-light);
          padding: var(--spacing-2xl);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .welcome-content {
          text-align: center;
          max-width: 400px;
        }

        .welcome-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          margin-bottom: var(--spacing-lg);
          color: var(--text-light);
        }

        .welcome-description {
          font-size: var(--font-size-base);
          line-height: 1.6;
          margin-bottom: var(--spacing-xl);
          opacity: 0.9;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xl);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          text-align: left;
        }

        .feature-icon {
          font-size: var(--font-size-xl);
          flex-shrink: 0;
        }

        .feature-text {
          font-size: var(--font-size-sm);
          opacity: 0.9;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: var(--font-size-xl);
          font-weight: 700;
          margin-bottom: var(--spacing-xs);
        }

        .stat-label {
          font-size: var(--font-size-xs);
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .login-container {
            grid-template-columns: 1fr;
            margin: var(--spacing-lg);
          }

          .welcome-section {
            order: -1;
            padding: var(--spacing-xl);
          }

          .login-form-section {
            padding: var(--spacing-xl);
          }

          .form-title {
            font-size: var(--font-size-2xl);
          }

          .stats {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .form-options {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .login-page {
            padding: var(--spacing-md) 0;
          }

          .login-container {
            margin: var(--spacing-md);
          }

          .login-form-section,
          .welcome-section {
            padding: var(--spacing-lg);
          }

          .form-title {
            font-size: var(--font-size-xl);
          }

          .welcome-title {
            font-size: var(--font-size-xl);
          }
        }
      `}</style>
    </div>
  );
};

export default Login;

