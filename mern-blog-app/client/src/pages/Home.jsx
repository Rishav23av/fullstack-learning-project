/**
 * Home Page Component
 * Landing page with hero section and featured blog posts
 */

import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';

/**
 * Home Page Component
 * @param {Object} props - Component props
 * @param {Object} props.user - Current user object
 * @param {boolean} props.isAuthenticated - Authentication status
 */
const Home = ({ user, isAuthenticated }) => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock blog posts data for demonstration
  const mockPosts = [
    {
      id: '1',
      title: 'Getting Started with MERN Stack Development',
      excerpt: 'Learn how to build full-stack applications using MongoDB, Express.js, React, and Node.js. This comprehensive guide covers everything from setup to deployment.',
      content: 'The MERN stack has become one of the most popular choices for full-stack web development...',
      author: {
        name: 'John Doe',
        avatar: null
      },
      createdAt: '2024-01-15T10:30:00Z',
      updatedAt: '2024-01-15T10:30:00Z',
      tags: ['MERN', 'React', 'Node.js', 'MongoDB'],
      category: 'Web Development',
      readTime: 8,
      image: null
    },
    {
      id: '2',
      title: 'Modern React Patterns and Best Practices',
      excerpt: 'Explore advanced React patterns, hooks, and best practices for building scalable and maintainable applications in 2024.',
      content: 'React has evolved significantly over the years, and with it, the patterns and practices...',
      author: {
        name: 'Jane Smith',
        avatar: null
      },
      createdAt: '2024-01-14T14:20:00Z',
      updatedAt: '2024-01-14T16:45:00Z',
      tags: ['React', 'JavaScript', 'Frontend', 'Best Practices'],
      category: 'Frontend',
      readTime: 12,
      image: null
    },
    {
      id: '3',
      title: 'Building Secure APIs with Express.js and JWT',
      excerpt: 'Learn how to implement robust authentication and authorization in your Express.js applications using JSON Web Tokens.',
      content: 'Security is paramount when building web applications, especially when dealing with user data...',
      author: {
        name: 'Mike Johnson',
        avatar: null
      },
      createdAt: '2024-01-13T09:15:00Z',
      updatedAt: '2024-01-13T09:15:00Z',
      tags: ['Express.js', 'JWT', 'Security', 'Backend'],
      category: 'Backend',
      readTime: 10,
      image: null
    },
    {
      id: '4',
      title: 'MongoDB Schema Design and Optimization',
      excerpt: 'Master MongoDB schema design patterns and optimization techniques for better performance and scalability.',
      content: 'Designing efficient MongoDB schemas is crucial for application performance...',
      author: {
        name: 'Sarah Wilson',
        avatar: null
      },
      createdAt: '2024-01-12T16:00:00Z',
      updatedAt: '2024-01-12T16:00:00Z',
      tags: ['MongoDB', 'Database', 'Schema Design', 'Performance'],
      category: 'Database',
      readTime: 15,
      image: null
    },
    {
      id: '5',
      title: 'Deploying MERN Applications to Production',
      excerpt: 'A complete guide to deploying your MERN stack applications to various cloud platforms with CI/CD pipelines.',
      content: 'Deploying a MERN application to production involves several considerations...',
      author: {
        name: 'David Brown',
        avatar: null
      },
      createdAt: '2024-01-11T11:30:00Z',
      updatedAt: '2024-01-11T11:30:00Z',
      tags: ['Deployment', 'DevOps', 'Cloud', 'CI/CD'],
      category: 'DevOps',
      readTime: 18,
      image: null
    },
    {
      id: '6',
      title: 'State Management in React: Redux vs Context API',
      excerpt: 'Compare different state management solutions in React and learn when to use each approach for optimal results.',
      content: 'State management is one of the most important aspects of React development...',
      author: {
        name: 'Emily Davis',
        avatar: null
      },
      createdAt: '2024-01-10T13:45:00Z',
      updatedAt: '2024-01-10T13:45:00Z',
      tags: ['React', 'Redux', 'Context API', 'State Management'],
      category: 'Frontend',
      readTime: 14,
      image: null
    }
  ];

  /**
   * Load featured posts on component mount
   */
  useEffect(() => {
    const loadFeaturedPosts = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In a real application, this would be an API call
        // const response = await apiService.getFeaturedPosts();
        // setFeaturedPosts(response.data.posts);
        
        setFeaturedPosts(mockPosts);
      } catch (error) {
        console.error('Failed to load featured posts:', error);
        setFeaturedPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedPosts();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero user={user} isAuthenticated={isAuthenticated} />

      {/* Featured Posts Section */}
      <section className="featured-posts-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Posts</h2>
            <p className="section-subtitle">
              Discover the latest insights and tutorials from our community
            </p>
          </div>

          {loading ? (
            <div className="loading-grid">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="loading-card">
                  <div className="loading-skeleton loading-image"></div>
                  <div className="loading-content">
                    <div className="loading-skeleton loading-title"></div>
                    <div className="loading-skeleton loading-text"></div>
                    <div className="loading-skeleton loading-text"></div>
                    <div className="loading-skeleton loading-meta"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : featuredPosts.length > 0 ? (
            <div className="posts-grid">
              {featuredPosts.map(post => (
                <BlogCard 
                  key={post.id} 
                  post={post}
                  showActions={false}
                />
              ))}
            </div>
          ) : (
            <div className="no-posts">
              <div className="no-posts-icon">📝</div>
              <h3>No Posts Yet</h3>
              <p>Be the first to share your thoughts and create a blog post!</p>
              {isAuthenticated && (
                <button className="btn-primary">
                  Create Your First Post
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      {!isAuthenticated && (
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Start Blogging?</h2>
              <p className="cta-subtitle">
                Join our community of writers and share your knowledge with the world.
              </p>
              <div className="cta-actions">
                <a href="/signup" className="btn-primary">
                  Sign Up Free
                </a>
                <a href="/about" className="btn-secondary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        .home-page {
          min-height: 100vh;
        }

        .featured-posts-section {
          padding: var(--spacing-2xl) 0;
          background-color: var(--bg-secondary);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
        }

        .section-title {
          font-size: var(--font-size-3xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
        }

        .section-subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-xl);
          margin-top: var(--spacing-xl);
        }

        .loading-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-xl);
          margin-top: var(--spacing-xl);
        }

        .loading-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .loading-skeleton {
          background: linear-gradient(90deg, var(--bg-secondary) 25%, var(--bg-tertiary) 50%, var(--bg-secondary) 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }

        .loading-image {
          height: 200px;
          width: 100%;
        }

        .loading-content {
          padding: var(--spacing-lg);
        }

        .loading-title {
          height: 24px;
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-md);
        }

        .loading-text {
          height: 16px;
          border-radius: var(--radius-sm);
          margin-bottom: var(--spacing-sm);
        }

        .loading-text:last-of-type {
          width: 70%;
        }

        .loading-meta {
          height: 20px;
          border-radius: var(--radius-sm);
          width: 50%;
          margin-top: var(--spacing-lg);
        }

        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .no-posts {
          text-align: center;
          padding: var(--spacing-2xl);
          background-color: var(--bg-primary);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
        }

        .no-posts-icon {
          font-size: 4rem;
          margin-bottom: var(--spacing-lg);
        }

        .no-posts h3 {
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
        }

        .no-posts p {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
        }

        .cta-section {
          padding: var(--spacing-2xl) 0;
          background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
          color: var(--text-light);
        }

        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: var(--font-size-3xl);
          font-weight: 800;
          margin-bottom: var(--spacing-lg);
          color: var(--text-light);
        }

        .cta-subtitle {
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
          .posts-grid,
          .loading-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .section-title {
            font-size: var(--font-size-2xl);
          }

          .cta-title {
            font-size: var(--font-size-2xl);
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
      `}</style>
    </div>
  );
};

export default Home;

