/**
 * About Page Component
 * Information about the MERN Blog application
 */

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="page-title">About MERN Blog</h1>
          <p className="page-subtitle">
            A modern, full-stack blogging platform built with cutting-edge technologies
          </p>
        </section>

        {/* Main Content */}
        <div className="about-content">
          {/* Mission Section */}
          <section className="content-section">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              MERN Blog is designed to provide a seamless and intuitive platform for writers, 
              developers, and content creators to share their knowledge, experiences, and insights 
              with a global audience. We believe in the power of community-driven content and 
              the importance of accessible, high-quality information sharing.
            </p>
          </section>

          {/* Technology Stack */}
          <section className="content-section">
            <h2 className="section-title">Technology Stack</h2>
            <p className="section-text">
              Built with the MERN stack, our platform leverages modern web technologies 
              to deliver a fast, secure, and scalable blogging experience.
            </p>
            
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-icon">🍃</div>
                <h3 className="tech-name">MongoDB</h3>
                <p className="tech-description">
                  NoSQL database for flexible and scalable data storage, 
                  perfect for handling blog posts, user data, and comments.
                </p>
              </div>
              
              <div className="tech-card">
                <div className="tech-icon">🚀</div>
                <h3 className="tech-name">Express.js</h3>
                <p className="tech-description">
                  Fast and minimalist web framework for Node.js, providing 
                  robust API endpoints and middleware support.
                </p>
              </div>
              
              <div className="tech-card">
                <div className="tech-icon">⚛️</div>
                <h3 className="tech-name">React</h3>
                <p className="tech-description">
                  Modern JavaScript library for building interactive user 
                  interfaces with component-based architecture.
                </p>
              </div>
              
              <div className="tech-card">
                <div className="tech-icon">💚</div>
                <h3 className="tech-name">Node.js</h3>
                <p className="tech-description">
                  JavaScript runtime environment that enables server-side 
                  development with high performance and scalability.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="content-section">
            <h2 className="section-title">Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🔐</div>
                <h3 className="feature-title">Secure Authentication</h3>
                <p className="feature-description">
                  JWT-based authentication system with password hashing and 
                  secure session management.
                </p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <h3 className="feature-title">Responsive Design</h3>
                <p className="feature-description">
                  Mobile-first design approach ensuring optimal experience 
                  across all devices and screen sizes.
                </p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h3 className="feature-title">Fast Performance</h3>
                <p className="feature-description">
                  Optimized for speed with efficient data loading, caching, 
                  and modern build tools.
                </p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <h3 className="feature-title">Modern UI/UX</h3>
                <p className="feature-description">
                  Clean, intuitive interface with smooth animations and 
                  accessibility-focused design.
                </p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🔍</div>
                <h3 className="feature-title">Search & Filter</h3>
                <p className="feature-description">
                  Advanced search functionality with category filtering 
                  and tag-based organization.
                </p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <h3 className="feature-title">User Profiles</h3>
                <p className="feature-description">
                  Comprehensive user profiles with customizable avatars, 
                  bios, and activity tracking.
                </p>
              </div>
            </div>
          </section>

          {/* Development Principles */}
          <section className="content-section">
            <h2 className="section-title">Development Principles</h2>
            <div className="principles-list">
              <div className="principle-item">
                <h3 className="principle-title">🏗️ Clean Architecture</h3>
                <p className="principle-description">
                  Following MVC pattern and separation of concerns for maintainable 
                  and scalable codebase.
                </p>
              </div>
              
              <div className="principle-item">
                <h3 className="principle-title">🛡️ Security First</h3>
                <p className="principle-description">
                  Implementing best security practices including input validation, 
                  CORS protection, and secure authentication.
                </p>
              </div>
              
              <div className="principle-item">
                <h3 className="principle-title">♿ Accessibility</h3>
                <p className="principle-description">
                  Ensuring the platform is accessible to all users with proper 
                  ARIA labels, keyboard navigation, and screen reader support.
                </p>
              </div>
              
              <div className="principle-item">
                <h3 className="principle-title">🧪 Testing</h3>
                <p className="principle-description">
                  Comprehensive testing strategy including unit tests, integration 
                  tests, and end-to-end testing.
                </p>
              </div>
            </div>
          </section>

          {/* Open Source */}
          <section className="content-section">
            <h2 className="section-title">Open Source</h2>
            <p className="section-text">
              MERN Blog is built as an open-source project to help developers learn 
              and understand full-stack development with the MERN stack. The codebase 
              serves as a comprehensive example of modern web development practices, 
              including authentication, database design, API development, and responsive 
              frontend implementation.
            </p>
            <p className="section-text">
              Whether you're a beginner looking to understand how full-stack applications 
              work or an experienced developer seeking a solid foundation for your next 
              project, MERN Blog provides a well-documented and thoroughly tested starting point.
            </p>
          </section>

          {/* Contact CTA */}
          <section className="cta-section">
            <div className="cta-content">
              <h2 className="cta-title">Get In Touch</h2>
              <p className="cta-description">
                Have questions, suggestions, or want to contribute? We'd love to hear from you!
              </p>
              <div className="cta-actions">
                <a href="/contact" className="btn-primary">
                  Contact Us
                </a>
                <a 
                  href="https://github.com/your-username/mern-blog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .about-page {
          min-height: 100vh;
          padding: var(--spacing-2xl) 0;
        }

        .about-hero {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
          padding: var(--spacing-2xl) 0;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
        }

        .page-title {
          font-size: var(--font-size-4xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--spacing-lg);
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .page-subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .about-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .content-section {
          margin-bottom: var(--spacing-2xl);
          padding: var(--spacing-xl);
          background-color: var(--bg-primary);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-color);
        }

        .section-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-lg);
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          border-radius: 2px;
        }

        .section-text {
          font-size: var(--font-size-base);
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
        }

        .section-text:last-child {
          margin-bottom: 0;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .tech-card {
          background-color: var(--bg-secondary);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          text-align: center;
          border: 1px solid var(--border-color);
          transition: all var(--transition-normal);
        }

        .tech-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-color);
        }

        .tech-icon {
          font-size: 3rem;
          margin-bottom: var(--spacing-md);
        }

        .tech-name {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
        }

        .tech-description {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          background-color: var(--bg-secondary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          transition: all var(--transition-normal);
        }

        .feature-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .feature-icon {
          font-size: var(--font-size-2xl);
          flex-shrink: 0;
          margin-top: var(--spacing-xs);
        }

        .feature-content {
          flex: 1;
        }

        .feature-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
        }

        .feature-description {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .principles-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .principle-item {
          padding: var(--spacing-lg);
          background-color: var(--bg-secondary);
          border-radius: var(--radius-lg);
          border-left: 4px solid var(--primary-color);
        }

        .principle-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
        }

        .principle-description {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .cta-section {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
          color: var(--text-light);
          padding: var(--spacing-2xl);
          border-radius: var(--radius-xl);
          text-align: center;
          margin-top: var(--spacing-2xl);
        }

        .cta-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          margin-bottom: var(--spacing-md);
          color: var(--text-light);
        }

        .cta-description {
          font-size: var(--font-size-lg);
          margin-bottom: var(--spacing-xl);
          opacity: 0.9;
        }

        .cta-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-actions .btn-secondary {
          background-color: transparent;
          color: var(--text-light);
          border-color: var(--text-light);
        }

        .cta-actions .btn-secondary:hover {
          background-color: var(--text-light);
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .about-page {
            padding: var(--spacing-lg) 0;
          }

          .page-title {
            font-size: var(--font-size-3xl);
          }

          .content-section {
            padding: var(--spacing-lg);
          }

          .tech-grid,
          .features-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .feature-item {
            flex-direction: column;
            text-align: center;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-actions a {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .about-hero {
            padding: var(--spacing-lg) 0;
          }

          .page-title {
            font-size: var(--font-size-2xl);
          }

          .content-section {
            padding: var(--spacing-md);
          }

          .tech-card,
          .feature-item,
          .principle-item {
            padding: var(--spacing-md);
          }
        }
      `}</style>
    </div>
  );
};

export default About;

