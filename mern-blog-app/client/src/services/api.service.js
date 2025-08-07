/**
 * API Service
 * Handles all HTTP requests to the backend API
 */

import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * Request interceptor to add auth token to requests
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor to handle common errors
 */
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle common HTTP errors
    if (error.response) {
      const { status, data } = error.response;
      
      // Handle authentication errors
      if (status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
        return Promise.reject(new Error('Authentication required'));
      }
      
      // Handle validation errors
      if (status === 400 && data.errors) {
        const errorMessage = data.errors.map(err => err.msg).join(', ');
        return Promise.reject(new Error(errorMessage));
      }
      
      // Handle other API errors
      const errorMessage = data.message || `HTTP ${status} Error`;
      return Promise.reject(new Error(errorMessage));
    }
    
    // Handle network errors
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('Request timeout. Please try again.'));
    }
    
    if (!error.response) {
      return Promise.reject(new Error('Network error. Please check your connection.'));
    }
    
    return Promise.reject(error);
  }
);

/**
 * API Service Object
 */
export const apiService = {
  // Authentication endpoints
  auth: {
    /**
     * Register a new user
     * @param {Object} userData - User registration data
     * @param {string} userData.name - User's full name
     * @param {string} userData.email - User's email address
     * @param {string} userData.password - User's password
     * @returns {Promise<Object>} Registration response
     */
    register: async (userData) => {
      try {
        const response = await api.post('/auth/register', userData);
        return response;
      } catch (error) {
        throw error;
      }
    },

    /**
     * Login user
     * @param {Object} credentials - User login credentials
     * @param {string} credentials.email - User's email address
     * @param {string} credentials.password - User's password
     * @returns {Promise<Object>} Login response with user data and token
     */
    login: async (credentials) => {
      try {
        const response = await api.post('/auth/login', credentials);
        return response;
      } catch (error) {
        throw error;
      }
    },

    /**
     * Logout user
     * @returns {Promise<Object>} Logout response
     */
    logout: async () => {
      try {
        const response = await api.post('/auth/logout');
        localStorage.removeItem('token');
        return response;
      } catch (error) {
        localStorage.removeItem('token');
        throw error;
      }
    },

    /**
     * Get current user profile
     * @returns {Promise<Object>} User profile data
     */
    getProfile: async () => {
      try {
        const response = await api.get('/auth/profile');
        return response;
      } catch (error) {
        throw error;
      }
    },

    /**
     * Update user profile
     * @param {Object} profileData - Updated profile data
     * @param {string} profileData.name - User's name
     * @param {string} profileData.bio - User's bio
     * @param {string} profileData.avatar - User's avatar URL
     * @returns {Promise<Object>} Updated profile response
     */
    updateProfile: async (profileData) => {
      try {
        const response = await api.put('/auth/profile', profileData);
        return response;
      } catch (error) {
        throw error;
      }
    },

    /**
     * Change user password
     * @param {Object} passwordData - Password change data
     * @param {string} passwordData.currentPassword - Current password
     * @param {string} passwordData.newPassword - New password
     * @param {string} passwordData.confirmPassword - Password confirmation
     * @returns {Promise<Object>} Password change response
     */
    changePassword: async (passwordData) => {
      try {
        const response = await api.put('/auth/change-password', passwordData);
        return response;
      } catch (error) {
        throw error;
      }
    },

    /**
     * Verify token validity
     * @returns {Promise<Object>} Token verification response
     */
    verifyToken: async () => {
      try {
        const response = await api.get('/auth/verify');
        return response;
      } catch (error) {
        throw error;
      }
    }
  },

  // Blog post endpoints (for future implementation)
  posts: {
    /**
     * Get all blog posts
     * @param {Object} params - Query parameters
     * @param {number} params.page - Page number
     * @param {number} params.limit - Posts per page
     * @param {string} params.category - Filter by category
     * @param {string} params.search - Search query
     * @returns {Promise<Object>} Posts response
     */
    getAll: async (params = {}) => {
      try {
        const response = await api.get('/posts', { params });
        return response;
      } catch (error) {
        throw error;
      }
    },

    /**
     * Get featured blog posts
     * @param {number} limit - Number of posts to fetch
     * @returns {Promise<Object>} Featured posts response
     */
    getFeatured: async (limit = 6) => {
      try {
        const response = await api.get(`/posts/featured?limit=${limit}`);
        return response;
      } catch (error) {
        throw error;
      }
    },

    /**
     * Get single blog post by ID
     * @param {string} postId - Post ID
     * @returns {Promise<Object>} Post response
     */
    getById: async (postId) => {
      try {
        const response = await api.get(`/posts/${postId}`);
        return response;
      } catch (error) {
        throw error;
      }
    },

    /**
     * Create new blog post
     * @param {Object} postData - Post data
     * @param {string} postData.title - Post title
     * @param {string} postData.content - Post content
     * @param {string} postData.excerpt - Post excerpt
     * @param {Array} postData.tags - Post tags
     * @param {string} postData.category - Post category
     * @param {string} postData.image - Featured image URL
     * @returns {Promise<Object>} Created post response
     */
    create: async (postData) => {
      try {
        const response = await api.post('/posts', postData);
        return response;
      } catch (error) {
        throw error;
      }
    },

    /**
     * Update blog post
     * @param {string} postId - Post ID
     * @param {Object} postData - Updated post data
     * @returns {Promise<Object>} Updated post response
     */
    update: async (postId, postData) => {
      try {
        const response = await api.put(`/posts/${postId}`, postData);
        return response;
      } catch (error) {
        throw error;
      }
    },

    /**
     * Delete blog post
     * @param {string} postId - Post ID
     * @returns {Promise<Object>} Delete response
     */
    delete: async (postId) => {
      try {
        const response = await api.delete(`/posts/${postId}`);
        return response;
      } catch (error) {
        throw error;
      }
    },

    /**
     * Get user's own posts
     * @param {Object} params - Query parameters
     * @returns {Promise<Object>} User posts response
     */
    getUserPosts: async (params = {}) => {
      try {
        const response = await api.get('/posts/my-posts', { params });
        return response;
      } catch (error) {
        throw error;
      }
    }
  },

  // Contact form endpoint
  contact: {
    /**
     * Submit contact form
     * @param {Object} formData - Contact form data
     * @param {string} formData.name - Sender's name
     * @param {string} formData.email - Sender's email
     * @param {string} formData.subject - Message subject
     * @param {string} formData.message - Message content
     * @returns {Promise<Object>} Contact form response
     */
    submit: async (formData) => {
      try {
        const response = await api.post('/contact', formData);
        return response;
      } catch (error) {
        throw error;
      }
    }
  },

  // Utility methods
  utils: {
    /**
     * Check API health
     * @returns {Promise<Object>} Health check response
     */
    healthCheck: async () => {
      try {
        const response = await api.get('/health');
        return response;
      } catch (error) {
        throw error;
      }
    },

    /**
     * Upload file
     * @param {File} file - File to upload
     * @param {string} type - Upload type (avatar, post-image, etc.)
     * @returns {Promise<Object>} Upload response
     */
    uploadFile: async (file, type = 'general') => {
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);

        const response = await api.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        return response;
      } catch (error) {
        throw error;
      }
    }
  }
};

// Convenience methods for backward compatibility
export const register = apiService.auth.register;
export const login = apiService.auth.login;
export const logout = apiService.auth.logout;
export const getProfile = apiService.auth.getProfile;
export const updateProfile = apiService.auth.updateProfile;
export const changePassword = apiService.auth.changePassword;
export const verifyToken = apiService.auth.verifyToken;

// Default export
export default apiService;

