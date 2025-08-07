/**
 * ProtectedRoute Component
 * Wrapper component that protects routes requiring authentication
 */

import { Navigate, useLocation } from 'react-router-dom';

/**
 * Protected Route Component
 * Redirects to login page if user is not authenticated
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render if authenticated
 * @param {boolean} props.isAuthenticated - Authentication status
 * @param {string} props.redirectTo - Path to redirect to if not authenticated (default: '/login')
 * @param {boolean} props.requireAuth - Whether authentication is required (default: true)
 */
const ProtectedRoute = ({ 
  children, 
  isAuthenticated, 
  redirectTo = '/login',
  requireAuth = true 
}) => {
  const location = useLocation();

  // If authentication is required but user is not authenticated
  if (requireAuth && !isAuthenticated) {
    // Redirect to login page with return URL
    return (
      <Navigate 
        to={redirectTo} 
        state={{ from: location.pathname }} 
        replace 
      />
    );
  }

  // If authentication is not required or user is authenticated, render children
  return children;
};

/**
 * Reverse Protected Route Component
 * Redirects authenticated users away from auth pages (login, signup)
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render if not authenticated
 * @param {boolean} props.isAuthenticated - Authentication status
 * @param {string} props.redirectTo - Path to redirect to if authenticated (default: '/')
 */
export const ReverseProtectedRoute = ({ 
  children, 
  isAuthenticated, 
  redirectTo = '/' 
}) => {
  const location = useLocation();

  // If user is authenticated, redirect them away from auth pages
  if (isAuthenticated) {
    // Check if there's a return URL from the location state
    const returnUrl = location.state?.from || redirectTo;
    return <Navigate to={returnUrl} replace />;
  }

  // If user is not authenticated, render children (auth forms)
  return children;
};

/**
 * Role-based Protected Route Component
 * Protects routes based on user roles
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render if authorized
 * @param {boolean} props.isAuthenticated - Authentication status
 * @param {Object} props.user - Current user object
 * @param {Array<string>} props.allowedRoles - Array of allowed roles
 * @param {string} props.redirectTo - Path to redirect to if not authorized (default: '/')
 */
export const RoleProtectedRoute = ({ 
  children, 
  isAuthenticated, 
  user, 
  allowedRoles = [], 
  redirectTo = '/' 
}) => {
  // First check if user is authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check if user has required role
  const userRole = user?.role || 'user';
  const hasRequiredRole = allowedRoles.length === 0 || allowedRoles.includes(userRole);

  if (!hasRequiredRole) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

/**
 * Loading Protected Route Component
 * Shows loading state while checking authentication
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render when loaded
 * @param {boolean} props.isLoading - Loading status
 * @param {boolean} props.isAuthenticated - Authentication status
 * @param {React.ReactNode} props.loadingComponent - Custom loading component
 */
export const LoadingProtectedRoute = ({ 
  children, 
  isLoading, 
  isAuthenticated, 
  loadingComponent 
}) => {
  // Show loading state while checking authentication
  if (isLoading) {
    return loadingComponent || (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Checking authentication...</p>
      </div>
    );
  }

  // Use regular protected route logic once loading is complete
  return (
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      {children}
    </ProtectedRoute>
  );
};

/**
 * Conditional Protected Route Component
 * Protects routes based on custom condition function
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render if condition is met
 * @param {Function} props.condition - Function that returns boolean for access
 * @param {string} props.redirectTo - Path to redirect to if condition fails
 * @param {React.ReactNode} props.fallback - Component to render if condition fails
 */
export const ConditionalProtectedRoute = ({ 
  children, 
  condition, 
  redirectTo, 
  fallback 
}) => {
  const hasAccess = typeof condition === 'function' ? condition() : condition;

  if (!hasAccess) {
    if (fallback) {
      return fallback;
    }
    if (redirectTo) {
      return <Navigate to={redirectTo} replace />;
    }
    return <Navigate to="/" replace />;
  }

  return children;
};

/**
 * Higher-Order Component for route protection
 * 
 * @param {React.Component} Component - Component to protect
 * @param {Object} options - Protection options
 * @param {boolean} options.requireAuth - Whether authentication is required
 * @param {Array<string>} options.allowedRoles - Array of allowed roles
 * @param {string} options.redirectTo - Redirect path if not authorized
 */
export const withProtection = (Component, options = {}) => {
  const {
    requireAuth = true,
    allowedRoles = [],
    redirectTo = '/login'
  } = options;

  return function ProtectedComponent(props) {
    const { isAuthenticated, user, ...otherProps } = props;

    // Check authentication
    if (requireAuth && !isAuthenticated) {
      return <Navigate to={redirectTo} replace />;
    }

    // Check roles if specified
    if (allowedRoles.length > 0 && isAuthenticated) {
      const userRole = user?.role || 'user';
      if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/" replace />;
      }
    }

    return <Component {...otherProps} />;
  };
};

/**
 * Hook for programmatic navigation with authentication check
 */
export const useAuthenticatedNavigation = () => {
  const location = useLocation();

  return {
    /**
     * Navigate to protected route
     * @param {string} path - Path to navigate to
     * @param {boolean} isAuthenticated - Authentication status
     * @param {string} loginPath - Login page path
     */
    navigateToProtected: (path, isAuthenticated, loginPath = '/login') => {
      if (!isAuthenticated) {
        return `${loginPath}?returnUrl=${encodeURIComponent(path)}`;
      }
      return path;
    },

    /**
     * Get return URL from query params or state
     */
    getReturnUrl: () => {
      const urlParams = new URLSearchParams(location.search);
      const returnUrl = urlParams.get('returnUrl') || location.state?.from;
      return returnUrl || '/';
    }
  };
};

export default ProtectedRoute;

