# MERN Blog Application

A modern, full-stack blogging platform built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, responsive design, and a clean, intuitive interface.

## 🚀 Features

### Backend Features
- **User Authentication**: Secure JWT-based authentication with password hashing
- **User Management**: Registration, login, profile management, and password changes
- **Security**: Rate limiting, input validation, CORS protection, and secure headers
- **Database**: MongoDB with Mongoose ODM for flexible data modeling
- **API Design**: RESTful API following MVC architecture pattern
- **Error Handling**: Comprehensive error handling with meaningful error messages
- **Middleware**: Custom authentication and validation middleware

### Frontend Features
- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Authentication Flow**: Complete login/signup forms with validation
- **Protected Routes**: Route protection based on authentication status
- **Responsive Design**: Mobile-first approach with cross-device compatibility
- **Component Architecture**: Reusable React components with CSS modules
- **State Management**: React hooks for efficient state management
- **Form Validation**: Client-side validation with real-time feedback

### Technical Features
- **Fast Development**: Vite for lightning-fast development and builds
- **Code Quality**: ESLint configuration for consistent code style
- **Environment Configuration**: Separate development and production configs
- **CORS Support**: Cross-origin resource sharing for frontend-backend communication
- **Hot Reload**: Development server with hot module replacement

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn**
- **MongoDB** (v4.4.0 or higher) - Local installation or MongoDB Atlas
- **Git** for version control

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-blog-app.git
cd mern-blog-app
```

### 2. Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the server directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/mern-blog-db

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d

# CORS Configuration
CLIENT_URL=http://localhost:5173
```

**Important**: Replace `your-super-secret-jwt-key-change-this-in-production` with a strong, unique secret key.

### 3. Frontend Setup

Navigate to the client directory and install dependencies:

```bash
cd ../client
npm install
```

Create a `.env` file in the client directory (optional):

```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally following the [official installation guide](https://docs.mongodb.com/manual/installation/)
2. Start MongoDB service:
   ```bash
   # On macOS with Homebrew
   brew services start mongodb/brew/mongodb-community
   
   # On Ubuntu/Debian
   sudo systemctl start mongod
   
   # On Windows
   net start MongoDB
   ```

#### Option B: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string and replace `MONGODB_URI` in your `.env` file
4. Example: `MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mern-blog-db`

## 🚀 Running the Application

### Development Mode

You'll need to run both the backend and frontend servers simultaneously.

#### Terminal 1 - Backend Server
```bash
cd server
npm run dev
```
The backend server will start on `http://localhost:5000`

#### Terminal 2 - Frontend Server
```bash
cd client
npm run dev
```
The frontend development server will start on `http://localhost:5173`

### Production Mode

#### Build the Frontend
```bash
cd client
npm run build
```

#### Start the Backend Server
```bash
cd server
npm start
```

## 📁 Project Structure

```
mern-blog-app/
├── server/                     # Backend application
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── models/
│   │   └── User.js            # User model schema
│   ├── controllers/
│   │   └── auth.controller.js # Authentication controllers
│   ├── routes/
│   │   └── auth.routes.js     # Authentication routes
│   ├── middleware/
│   │   └── auth.middleware.js # Authentication middleware
│   ├── .env                   # Environment variables
│   ├── package.json           # Backend dependencies
│   └── server.js              # Server entry point
└── client/                    # Frontend application
    ├── public/
    │   └── vite.svg           # Vite logo
    ├── src/
    │   ├── assets/
    │   │   └── react.svg      # React logo
    │   ├── components/        # Reusable components
    │   │   ├── BlogCard.jsx
    │   │   ├── BlogCard.module.css
    │   │   ├── Hero.jsx
    │   │   ├── Hero.module.css
    │   │   ├── Navbar.jsx
    │   │   └── Navbar.module.css
    │   ├── pages/             # Page components
    │   │   ├── Home.jsx
    │   │   ├── About.jsx
    │   │   ├── Contact.jsx
    │   │   ├── Login.jsx
    │   │   └── Signup.jsx
    │   ├── services/
    │   │   └── api.service.js # API service layer
    │   ├── utils/
    │   │   └── ProtectedRoute.jsx # Route protection
    │   ├── App.jsx            # Main app component
    │   ├── App.css            # App styles
    │   ├── index.css          # Global styles
    │   └── main.jsx           # React entry point
    ├── .eslintrc.js           # ESLint configuration
    ├── .gitignore             # Git ignore rules
    ├── index.html             # HTML template
    ├── package.json           # Frontend dependencies
    ├── vite.config.js         # Vite configuration
    └── README.md              # Project documentation
```

## 🔧 Configuration

### Backend Configuration

The backend server can be configured through environment variables in the `.env` file:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment mode | development |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/mern-blog-db |
| `JWT_SECRET` | JWT signing secret | (required) |
| `JWT_EXPIRE` | JWT expiration time | 7d |
| `CLIENT_URL` | Frontend URL for CORS | http://localhost:5173 |

### Frontend Configuration

The frontend can be configured through environment variables in the `.env` file:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | http://localhost:5000/api |

## 📚 API Documentation

### Authentication Endpoints

#### Register User
- **POST** `/api/auth/register`
- **Body**: `{ name, email, password }`
- **Response**: `{ success, message, data: { user, token } }`

#### Login User
- **POST** `/api/auth/login`
- **Body**: `{ email, password }`
- **Response**: `{ success, message, data: { user, token } }`

#### Get User Profile
- **GET** `/api/auth/profile`
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ success, message, data: { user } }`

#### Update User Profile
- **PUT** `/api/auth/profile`
- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ name, bio, avatar }`
- **Response**: `{ success, message, data: { user } }`

#### Change Password
- **PUT** `/api/auth/change-password`
- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ currentPassword, newPassword, confirmPassword }`
- **Response**: `{ success, message }`

#### Logout User
- **POST** `/api/auth/logout`
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ success, message }`

#### Verify Token
- **GET** `/api/auth/verify`
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ success, message, data: { user } }`

### Health Check
- **GET** `/api/health`
- **Response**: `{ success, message, timestamp, environment }`

## 🎨 Styling & Theming

The application uses CSS custom properties (CSS variables) for consistent theming:

### Color Palette
- **Primary**: `#2563eb` (Blue)
- **Secondary**: `#64748b` (Slate)
- **Accent**: `#f59e0b` (Amber)
- **Success**: `#10b981` (Emerald)
- **Error**: `#ef4444` (Red)
- **Warning**: `#f59e0b` (Amber)

### Typography
- **Font Family**: Inter, system fonts
- **Font Sizes**: Responsive scale from 0.75rem to 2.25rem
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Spacing
- **Scale**: 0.25rem to 3rem using CSS custom properties
- **Responsive**: Adjusts based on screen size

## 🧪 Testing

### Running Tests

```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test
```

### Test Coverage

```bash
# Backend coverage
cd server
npm run test:coverage

# Frontend coverage
cd client
npm run test:coverage
```

## 🚀 Deployment

### Backend Deployment

1. **Environment Setup**: Set production environment variables
2. **Database**: Ensure MongoDB is accessible from production server
3. **Build**: No build step required for Node.js backend
4. **Start**: Use `npm start` or process manager like PM2

### Frontend Deployment

1. **Build**: `npm run build` creates optimized production build
2. **Static Hosting**: Deploy `dist` folder to static hosting service
3. **Environment**: Set production API URL in environment variables

### Deployment Platforms

#### Recommended Platforms:
- **Backend**: Heroku, Railway, DigitalOcean, AWS EC2
- **Frontend**: Vercel, Netlify, GitHub Pages
- **Database**: MongoDB Atlas, AWS DocumentDB

#### Example Heroku Deployment:

```bash
# Backend deployment
cd server
heroku create your-app-name-api
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set JWT_SECRET=your-jwt-secret
git push heroku main

# Frontend deployment (using Vercel)
cd client
npm run build
vercel --prod
```

## 🔒 Security Considerations

### Backend Security
- **Password Hashing**: bcryptjs with salt rounds
- **JWT Security**: Secure token generation and validation
- **Rate Limiting**: Prevents brute force attacks
- **Input Validation**: Server-side validation using express-validator
- **CORS Configuration**: Restricted to allowed origins
- **Environment Variables**: Sensitive data stored in environment variables

### Frontend Security
- **Token Storage**: JWT tokens stored in localStorage (consider httpOnly cookies for production)
- **Input Sanitization**: Client-side validation and sanitization
- **HTTPS**: Always use HTTPS in production
- **Content Security Policy**: Implement CSP headers

## 🐛 Troubleshooting

### Common Issues

#### MongoDB Connection Issues
```bash
# Check if MongoDB is running
# macOS
brew services list | grep mongodb

# Ubuntu/Debian
sudo systemctl status mongod

# Windows
sc query MongoDB
```

#### Port Already in Use
```bash
# Find process using port 5000
lsof -i :5000

# Kill process
kill -9 <PID>
```

#### CORS Issues
- Ensure `CLIENT_URL` in backend `.env` matches frontend URL
- Check that CORS middleware is properly configured

#### JWT Token Issues
- Verify `JWT_SECRET` is set in backend `.env`
- Check token expiration time
- Ensure token is properly formatted in Authorization header

### Debug Mode

Enable debug logging:

```bash
# Backend
DEBUG=* npm run dev

# Frontend
npm run dev -- --debug
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend library
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Vite](https://vitejs.dev/) - Build tool
- [JWT](https://jwt.io/) - Authentication tokens

## 📞 Support

If you have any questions or need help with setup, please:

1. Check the [Issues](https://github.com/your-username/mern-blog-app/issues) page
2. Create a new issue with detailed description
3. Contact the maintainers

---

**Built with ❤️ using the MERN Stack**

