# Quick Setup Guide

This guide will help you get the MERN Blog application running in just a few minutes.

## Prerequisites

- Node.js (v16+)
- npm (v7+)
- MongoDB (local or Atlas)

## Quick Start

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd mern-blog-app
   npm run install:all
   ```

2. **Configure Environment**
   
   Create `server/.env`:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/mern-blog-db
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRE=7d
   CLIENT_URL=http://localhost:5173
   ```

3. **Start Development Servers**
   ```bash
   npm run dev
   ```

   This starts both backend (port 5000) and frontend (port 5173) servers.

4. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## Default Features Available

- ✅ User registration and login
- ✅ Protected routes and authentication
- ✅ Responsive design
- ✅ Modern UI with animations
- ✅ Form validation
- ✅ Error handling
- ✅ JWT-based authentication
- ✅ Password hashing and security

## Test User Flow

1. Visit http://localhost:5173
2. Click "Sign Up" to create an account
3. Fill out the registration form
4. After registration, you'll be automatically logged in
5. Explore the dashboard and profile pages
6. Test logout and login functionality

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally
- Or use MongoDB Atlas cloud database
- Check the MONGODB_URI in your .env file

### Port Already in Use
```bash
# Kill process on port 5000
lsof -i :5000
kill -9 <PID>
```

### Dependencies Issues
```bash
# Clean install
npm run clean
npm run install:all
```

## Next Steps

- Add blog post creation functionality
- Implement comment system
- Add image upload capabilities
- Deploy to production

For detailed documentation, see [README.md](README.md).

