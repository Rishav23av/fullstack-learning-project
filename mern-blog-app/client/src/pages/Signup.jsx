/**
 * Signup Page Component
 * User registration form
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { apiService } from '../services/api.service';

/**
 * Signup Page Component
 * @param {Object} props - Component props
 * @param {Function} props.onLogin - Login success callback after registration
 */
const Signup = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

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

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'Name cannot exceed 50 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name can only contain letters and spaces';
    }

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
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one lowercase letter, one uppercase letter, and one number';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms acceptance validation
    if (!acceptTerms) {
      newErrors.terms = 'You must accept the terms and conditions';
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
      const response = await apiService.auth.register({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password
      });

      if (response.success) {
        // Call the onLogin callback with user data and token
        onLogin(response.data.user, response.data.token);
        
        // Redirect will be handled by the parent component
      } else {
        setErrors({ general: response.message || 'Registration failed' });
      }
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ 
        general: error.message || 'Registration failed. Please try again.' 
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

  /**
   * Toggle confirm password visibility
   */
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  /**
   * Get password strength indicator
   * @param {string} password - Password to check
   * @returns {Object} - Strength info
   */
  const getPasswordStrength = (password) => {
    let strength = 0;
    const checks = {
      length: password.length >= 6,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    strength = Object.values(checks).filter(Boolean).length;

    const levels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const colors = ['#ef4444', '#f59e0b', '#eab308', '#22c55e', '#16a34a'];

    return {
      score: strength,
      level: levels[Math.min(strength - 1, 4)] || 'Very Weak',
      color: colors[Math.min(strength - 1, 4)] || '#ef4444',
      checks
    };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="signup-page">
      <div className="container">
        <div className="signup-container">
          {/* Welcome Section */}
          <div className="welcome-section">
            <div className="welcome-content">
              <h2 className="welcome-title">Start Your Journey</h2>
              <p className="welcome-description">
                Join thousands of writers and readers in our vibrant community. 
                Share your stories, discover new perspectives, and connect with 
                like-minded individuals.
              </p>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="benefit-icon">🚀</span>
                  <div className="benefit-content">
                    <h3 className="benefit-title">Easy Publishing</h3>
                    <p className="benefit-description">
                      Write and publish your posts with our intuitive editor
                    </p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <span className="benefit-icon">🌟</span>
                  <div className="benefit-content">
                    <h3 className="benefit-title">Build Your Audience</h3>
                    <p className="benefit-description">
                      Grow your readership and engage with your community
                    </p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <span className="benefit-icon">📊</span>
                  <div className="benefit-content">
                    <h3 className="benefit-title">Track Performance</h3>
                    <p className="benefit-description">
                      Monitor your post views, engagement, and growth
                    </p>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <p className="testimonial-text">
                  "MERN Blog has transformed how I share my ideas. The platform 
                  is intuitive, and the community is incredibly supportive!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">JS</div>
                  <div className="author-info">
                    <div className="author-name">Jane Smith</div>
                    <div className="author-title">Tech Writer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Signup Form */}
          <div className="signup-form-section">
            <div className="form-header">
              <h1 className="form-title">Create Account</h1>
              <p className="form-subtitle">
                Join our community and start sharing your stories
              </p>
            </div>

            <form onSubmit={handleSubmit} className="signup-form">
              {/* General Error Message */}
              {errors.general && (
                <div className="alert alert-error">
                  {errors.general}
                </div>
              )}

              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    disabled={isSubmitting}
                  />
                  <span className="input-icon">👤</span>
                </div>
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

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
                    placeholder="Create a strong password"
                    autoComplete="new-password"
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
                
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="password-strength">
                    <div className="strength-bar">
                      <div 
                        className="strength-fill"
                        style={{ 
                          width: `${(passwordStrength.score / 5) * 100}%`,
                          backgroundColor: passwordStrength.color
                        }}
                      ></div>
                    </div>
                    <span 
                      className="strength-text"
                      style={{ color: passwordStrength.color }}
                    >
                      {passwordStrength.level}
                    </span>
                  </div>
                )}
                
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div className="input-wrapper">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    disabled={isSubmitting}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={toggleConfirmPasswordVisibility}
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  >
                    {showConfirmPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className="error-message">{errors.confirmPassword}</span>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="form-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    className="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    disabled={isSubmitting}
                  />
                  <span className="checkbox-text">
                    I agree to the{' '}
                    <Link to="/terms" className="terms-link">
                      Terms of Service
                    </Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="terms-link">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.terms && (
                  <span className="error-message">{errors.terms}</span>
                )}
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
                    Creating Account...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">🎉</span>
                    Create Account
                  </>
                )}
              </button>

              {/* Login Link */}
              <div className="form-footer">
                <p className="login-prompt">
                  Already have an account?{' '}
                  <Link to="/login" className="login-link">
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .signup-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          padding: var(--spacing-xl) 0;
        }

        .signup-container {
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

        .welcome-section {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
          color: var(--text-light);
          padding: var(--spacing-2xl);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .welcome-content {
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

        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
        }

        .benefit-icon {
          font-size: var(--font-size-xl);
          flex-shrink: 0;
          margin-top: var(--spacing-xs);
        }

        .benefit-content {
          flex: 1;
        }

        .benefit-title {
          font-size: var(--font-size-base);
          font-weight: 600;
          margin-bottom: var(--spacing-xs);
          color: var(--text-light);
        }

        .benefit-description {
          font-size: var(--font-size-sm);
          opacity: 0.8;
          line-height: 1.5;
        }

        .testimonial {
          background-color: rgba(255, 255, 255, 0.1);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .testimonial-text {
          font-size: var(--font-size-sm);
          font-style: italic;
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
          opacity: 0.9;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: var(--font-size-sm);
        }

        .author-info {
          flex: 1;
        }

        .author-name {
          font-weight: 600;
          font-size: var(--font-size-sm);
        }

        .author-title {
          font-size: var(--font-size-xs);
          opacity: 0.8;
        }

        .signup-form-section {
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

        .signup-form {
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

        .password-strength {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-top: var(--spacing-xs);
        }

        .strength-bar {
          flex: 1;
          height: 4px;
          background-color: var(--bg-tertiary);
          border-radius: 2px;
          overflow: hidden;
        }

        .strength-fill {
          height: 100%;
          transition: all var(--transition-normal);
          border-radius: 2px;
        }

        .strength-text {
          font-size: var(--font-size-xs);
          font-weight: 500;
          min-width: 80px;
          text-align: right;
        }

        .error-message {
          color: var(--error-color);
          font-size: var(--font-size-sm);
          font-weight: 500;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-sm);
          cursor: pointer;
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .checkbox {
          width: 16px;
          height: 16px;
          accent-color: var(--primary-color);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .terms-link {
          color: var(--primary-color);
          font-weight: 500;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .terms-link:hover {
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

        .login-prompt {
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
        }

        .login-link {
          color: var(--primary-color);
          font-weight: 600;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .login-link:hover {
          color: var(--primary-hover);
          text-decoration: underline;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .signup-container {
            grid-template-columns: 1fr;
            margin: var(--spacing-lg);
          }

          .signup-form-section {
            padding: var(--spacing-xl);
          }

          .welcome-section {
            padding: var(--spacing-xl);
          }

          .form-title {
            font-size: var(--font-size-2xl);
          }

          .welcome-title {
            font-size: var(--font-size-xl);
          }

          .benefits-list {
            gap: var(--spacing-md);
          }
        }

        @media (max-width: 480px) {
          .signup-page {
            padding: var(--spacing-md) 0;
          }

          .signup-container {
            margin: var(--spacing-md);
          }

          .signup-form-section,
          .welcome-section {
            padding: var(--spacing-lg);
          }

          .form-title {
            font-size: var(--font-size-xl);
          }

          .welcome-title {
            font-size: var(--font-size-lg);
          }

          .benefit-item {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-sm);
          }

          .testimonial-author {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-sm);
          }
        }
      `}</style>
    </div>
  );
};

export default Signup;

