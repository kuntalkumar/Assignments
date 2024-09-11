## Overview
This project is a Task Management System that allows users to register, log in, and manage tasks. It provides an interface for displaying all users in the system and handles user authentication via JWT. The project includes features such as user authentication, error handling, and responsive design.

- **Frontend**: [Frontend Deployed Link](https://66e1f65cf2f0c9704636f9e2--dazzling-starburst-c97a27.netlify.app/)
- **Backend**: [Backend Deployed Link](https://clippet-be.onrender.com/)

## Screenshots

### Login Page
![Login Page](./asset/Screenshot%202024-09-12%20013052.png)

### Register Page
![Register Page](./asset/Screenshot%202024-09-12%20013103.png)

### Users Page
![Users Page](./asset/Screenshot%202024-09-12%20013138.png)

## Tech Stack

### Backend: Node.js, Express.js
- API: RESTful services
- Database: MongoDB
- Authentication: JWT for protected routes
- Bcrypt for password hashing
- CORS for cross-origin resource sharing
- Mongoose for Object Data Modeling (ODM)

### Frontend: React.js
- State management: useState, useEffect
- Routing: React Router DOM
- UI Components: React Bootstrap
- Axios for HTTP requests
- JWT token storage in localStorage

## Features

### 1. User Authentication
- **Registration**: New users can register by providing their name, email, password, phone number, and profession.
    - Passwords are hashed using bcryptjs before being stored in the database.
    - Phone numbers are validated for a length of 10 digits.
- **Login**: Registered users can log in using their email and password.
    - A JSON Web Token (JWT) is issued upon successful login and is stored in `localStorage`.
    - This token is used for accessing protected routes.

### 2. User Management
- Authenticated users can view a list of all registered users.
- User data displayed includes name, email, phone, and profession.
- Users can be updated and deleted by administrators or the user themselves.

## Error Handling

### Frontend
- Login and registration forms display validation errors (e.g., incorrect credentials, missing fields).
- Alerts are shown for error messages on failed API requests.

### Backend
- Proper status codes are returned based on the success or failure of operations (e.g., 401 Unauthorized, 500 Internal Server Error).
- Descriptive error messages are passed to the frontend for user display.
- MongoDB errors (e.g., duplicate email) are handled.

## API Endpoints

### User Routes
- **POST** `/api/users/register`: Register a new user
  - Request: `{ name, email, password, phone, profession }`
  - Response: `{ msg: "User registered successfully" }`

- **POST** `/api/users/login`: Log in a user
  - Request: `{ email, password }`
  - Response: `{ token }`

- **GET** `/api/users`: Get a list of all users (protected)
  - Request: Requires `x-auth-token` header
  - Response: List of users, excluding their passwords

- **PUT** `/api/users/:id`: Update user information (protected)
  - Request: `{ name, phone }`
  - Response: Updated user data

- **DELETE** `/api/users/:id`: Delete a user (protected)
  - Request: Requires `x-auth-token` header
  - Response: `{ msg: "User deleted" }`
