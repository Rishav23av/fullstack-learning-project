/**
 * BlogCard Component
 * Displays blog post information in a card format
 */

import { Link } from 'react-router-dom';
import styles from './BlogCard.module.css';

/**
 * Blog Card Component
 * @param {Object} props - Component props
 * @param {Object} props.post - Blog post data
 * @param {string} props.post.id - Post ID
 * @param {string} props.post.title - Post title
 * @param {string} props.post.excerpt - Post excerpt/summary
 * @param {string} props.post.content - Full post content
 * @param {Object} props.post.author - Post author information
 * @param {string} props.post.author.name - Author name
 * @param {string} props.post.author.avatar - Author avatar URL
 * @param {string} props.post.createdAt - Post creation date
 * @param {string} props.post.updatedAt - Post update date
 * @param {Array} props.post.tags - Post tags
 * @param {string} props.post.category - Post category
 * @param {number} props.post.readTime - Estimated read time in minutes
 * @param {string} props.post.image - Post featured image URL
 * @param {boolean} props.showActions - Whether to show action buttons
 * @param {Function} props.onEdit - Edit handler function
 * @param {Function} props.onDelete - Delete handler function
 */
const BlogCard = ({ 
  post, 
  showActions = false, 
  onEdit, 
  onDelete 
}) => {
  /**
   * Format date to readable string
   * @param {string} dateString - ISO date string
   * @returns {string} - Formatted date
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  /**
   * Truncate text to specified length
   * @param {string} text - Text to truncate
   * @param {number} maxLength - Maximum length
   * @returns {string} - Truncated text
   */
  const truncateText = (text, maxLength = 150) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  /**
   * Get author initials for avatar placeholder
   * @param {string} name - Author name
   * @returns {string} - Author initials
   */
  const getAuthorInitials = (name) => {
    if (!name) return 'A';
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <article className={styles.blogCard}>
      {/* Featured Image */}
      {post.image && (
        <div className={styles.cardImage}>
          <img 
            src={post.image} 
            alt={post.title}
            loading="lazy"
          />
          <div className={styles.imageOverlay}>
            <Link 
              to={`/blog/${post.id}`} 
              className={styles.readMoreBtn}
              aria-label={`Read more about ${post.title}`}
            >
              Read More
            </Link>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className={styles.cardContent}>
        {/* Category and Read Time */}
        <div className={styles.cardMeta}>
          {post.category && (
            <span className={styles.category}>
              {post.category}
            </span>
          )}
          {post.readTime && (
            <span className={styles.readTime}>
              {post.readTime} min read
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={styles.cardTitle}>
          <Link to={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className={styles.cardExcerpt}>
          {truncateText(post.excerpt || post.content)}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className={styles.cardTags}>
            {post.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className={styles.tag}>
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className={styles.tagMore}>
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Author and Date */}
        <div className={styles.cardFooter}>
          <div className={styles.authorInfo}>
            <div className={styles.authorAvatar}>
              {post.author?.avatar ? (
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                />
              ) : (
                <span className={styles.avatarPlaceholder}>
                  {getAuthorInitials(post.author?.name)}
                </span>
              )}
            </div>
            <div className={styles.authorDetails}>
              <span className={styles.authorName}>
                {post.author?.name || 'Anonymous'}
              </span>
              <span className={styles.postDate}>
                {formatDate(post.createdAt)}
                {post.updatedAt !== post.createdAt && (
                  <span className={styles.updatedIndicator}>
                    (Updated)
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          {showActions && (
            <div className={styles.cardActions}>
              <button 
                onClick={() => onEdit && onEdit(post)}
                className={styles.editBtn}
                aria-label={`Edit ${post.title}`}
              >
                <span className={styles.actionIcon}>✏️</span>
                Edit
              </button>
              <button 
                onClick={() => onDelete && onDelete(post)}
                className={styles.deleteBtn}
                aria-label={`Delete ${post.title}`}
              >
                <span className={styles.actionIcon}>🗑️</span>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Card Hover Effect */}
      <div className={styles.cardHoverEffect}></div>
    </article>
  );
};

export default BlogCard;

