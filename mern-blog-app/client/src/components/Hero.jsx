/**
 * Hero Component
 * Landing page hero section with call-to-action
 */

import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

/**
 * Hero Section Component
 * @param {Object} props - Component props
 * @param {Object} props.user - Current user object
 * @param {boolean} props.isAuthenticated - Authentication status
 */
const Hero = ({ user, isAuthenticated }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Hero Content */}
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Welcome to{' '}
              <span className={styles.titleHighlight}>MERN Blog</span>
            </h1>
            <p className={styles.heroSubtitle}>
              A modern, full-stack blogging platform built with MongoDB, Express.js, 
              React, and Node.js. Share your thoughts, connect with readers, and 
              build your online presence.
            </p>
            
            {/* Feature highlights */}
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🚀</span>
                <span>Fast & Modern</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🔒</span>
                <span>Secure Authentication</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>📱</span>
                <span>Responsive Design</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className={styles.heroActions}>
              {isAuthenticated ? (
                <div className={styles.authenticatedActions}>
                  <h3 className={styles.welcomeMessage}>
                    Welcome back, {user?.name}! 👋
                  </h3>
                  <div className={styles.actionButtons}>
                    <Link to="/dashboard" className={styles.primaryBtn}>
                      Go to Dashboard
                    </Link>
                    <Link to="/profile" className={styles.secondaryBtn}>
                      View Profile
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={styles.guestActions}>
                  <Link to="/signup" className={styles.primaryBtn}>
                    Get Started Free
                  </Link>
                  <Link to="/login" className={styles.secondaryBtn}>
                    Sign In
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Hero Visual */}
          <div className={styles.heroVisual}>
            <div className={styles.visualContainer}>
              {/* Animated blog cards */}
              <div className={styles.blogCard} style={{ '--delay': '0s' }}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardAvatar}></div>
                  <div className={styles.cardMeta}>
                    <div className={styles.cardAuthor}></div>
                    <div className={styles.cardDate}></div>
                  </div>
                </div>
                <div className={styles.cardTitle}></div>
                <div className={styles.cardContent}>
                  <div className={styles.cardLine}></div>
                  <div className={styles.cardLine}></div>
                  <div className={styles.cardLine} style={{ width: '70%' }}></div>
                </div>
              </div>

              <div className={styles.blogCard} style={{ '--delay': '0.2s' }}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardAvatar}></div>
                  <div className={styles.cardMeta}>
                    <div className={styles.cardAuthor}></div>
                    <div className={styles.cardDate}></div>
                  </div>
                </div>
                <div className={styles.cardTitle}></div>
                <div className={styles.cardContent}>
                  <div className={styles.cardLine}></div>
                  <div className={styles.cardLine}></div>
                  <div className={styles.cardLine} style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className={styles.blogCard} style={{ '--delay': '0.4s' }}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardAvatar}></div>
                  <div className={styles.cardMeta}>
                    <div className={styles.cardAuthor}></div>
                    <div className={styles.cardDate}></div>
                  </div>
                </div>
                <div className={styles.cardTitle}></div>
                <div className={styles.cardContent}>
                  <div className={styles.cardLine}></div>
                  <div className={styles.cardLine}></div>
                  <div className={styles.cardLine} style={{ width: '60%' }}></div>
                </div>
              </div>

              {/* Floating elements */}
              <div className={styles.floatingElement} style={{ '--delay': '1s', '--duration': '3s' }}>
                💡
              </div>
              <div className={styles.floatingElement} style={{ '--delay': '2s', '--duration': '4s' }}>
                ✨
              </div>
              <div className={styles.floatingElement} style={{ '--delay': '0.5s', '--duration': '3.5s' }}>
                🎯
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>1000+</div>
            <div className={styles.statLabel}>Blog Posts</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Active Users</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Categories</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>99.9%</div>
            <div className={styles.statLabel}>Uptime</div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className={styles.heroBackground}>
        <div className={styles.backgroundShape} style={{ '--delay': '0s' }}></div>
        <div className={styles.backgroundShape} style={{ '--delay': '2s' }}></div>
        <div className={styles.backgroundShape} style={{ '--delay': '4s' }}></div>
      </div>
    </section>
  );
};

export default Hero;

