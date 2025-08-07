/**
 * Contact Page Component
 * Contact form and information page
 */

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
  };

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, this would be an API call
      // const response = await apiService.submitContactForm(formData);
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Hero Section */}
        <section className="contact-hero">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you!
          </p>
        </section>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h2 className="form-title">Send us a Message</h2>
              <p className="form-description">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="form-textarea"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {submitStatus && (
                <div className={`alert alert-${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">📧</span>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <h2 className="info-title">Other Ways to Reach Us</h2>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-content">
                  <h3 className="method-title">Email</h3>
                  <p className="method-description">
                    For general inquiries and support
                  </p>
                  <a href="mailto:hello@mernblog.com" className="method-link">
                    hello@mernblog.com
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">💬</div>
                <div className="method-content">
                  <h3 className="method-title">Community</h3>
                  <p className="method-description">
                    Join our community discussions
                  </p>
                  <a href="#" className="method-link">
                    Discord Server
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">🐙</div>
                <div className="method-content">
                  <h3 className="method-title">GitHub</h3>
                  <p className="method-description">
                    Report bugs or contribute to the project
                  </p>
                  <a 
                    href="https://github.com/your-username/mern-blog" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="method-link"
                  >
                    View Repository
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-content">
                  <h3 className="method-title">Social Media</h3>
                  <p className="method-description">
                    Follow us for updates and news
                  </p>
                  <div className="social-links">
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
              <h3 className="faq-title">Frequently Asked Questions</h3>
              <div className="faq-list">
                <div className="faq-item">
                  <h4 className="faq-question">How do I create an account?</h4>
                  <p className="faq-answer">
                    Click on the "Sign Up" button in the navigation bar and fill out the registration form. 
                    You'll receive a confirmation email to verify your account.
                  </p>
                </div>

                <div className="faq-item">
                  <h4 className="faq-question">Can I edit my posts after publishing?</h4>
                  <p className="faq-answer">
                    Yes! You can edit your posts at any time from your dashboard. 
                    Edited posts will show an "Updated" indicator with the modification date.
                  </p>
                </div>

                <div className="faq-item">
                  <h4 className="faq-question">Is MERN Blog open source?</h4>
                  <p className="faq-answer">
                    Yes, MERN Blog is completely open source. You can view the source code, 
                    contribute to the project, or use it as a foundation for your own blog platform.
                  </p>
                </div>

                <div className="faq-item">
                  <h4 className="faq-question">How do I report a bug or request a feature?</h4>
                  <p className="faq-answer">
                    You can report bugs or request features by creating an issue on our GitHub repository 
                    or by contacting us through this form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          padding: var(--spacing-2xl) 0;
        }

        .contact-hero {
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

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-2xl);
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-form-section,
        .contact-info-section {
          background-color: var(--bg-primary);
          padding: var(--spacing-2xl);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-color);
        }

        .form-header {
          margin-bottom: var(--spacing-xl);
        }

        .form-title,
        .info-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
        }

        .form-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
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

        .form-input,
        .form-textarea {
          padding: var(--spacing-md);
          border: 2px solid var(--border-color);
          border-radius: var(--radius-md);
          font-size: var(--font-size-base);
          transition: all var(--transition-fast);
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
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
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-btn.loading {
          pointer-events: none;
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

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
        }

        .contact-method {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          background-color: var(--bg-secondary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          transition: all var(--transition-normal);
        }

        .contact-method:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .method-icon {
          font-size: var(--font-size-2xl);
          flex-shrink: 0;
        }

        .method-content {
          flex: 1;
        }

        .method-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }

        .method-description {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .method-link {
          color: var(--primary-color);
          font-weight: 500;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .method-link:hover {
          color: var(--primary-hover);
          text-decoration: underline;
        }

        .social-links {
          display: flex;
          gap: var(--spacing-md);
        }

        .social-link {
          color: var(--primary-color);
          font-weight: 500;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .social-link:hover {
          color: var(--primary-hover);
          text-decoration: underline;
        }

        .faq-section {
          border-top: 1px solid var(--border-color);
          padding-top: var(--spacing-xl);
        }

        .faq-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-lg);
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .faq-item {
          padding: var(--spacing-lg);
          background-color: var(--bg-secondary);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--primary-color);
        }

        .faq-question {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
        }

        .faq-answer {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }

          .contact-form-section,
          .contact-info-section {
            padding: var(--spacing-lg);
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .page-title {
            font-size: var(--font-size-3xl);
          }
        }

        @media (max-width: 480px) {
          .contact-page {
            padding: var(--spacing-lg) 0;
          }

          .contact-hero {
            padding: var(--spacing-lg) 0;
          }

          .page-title {
            font-size: var(--font-size-2xl);
          }

          .contact-form-section,
          .contact-info-section {
            padding: var(--spacing-md);
          }

          .contact-method {
            flex-direction: column;
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;

