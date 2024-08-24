# MERN Stack Full Stack Hands-on Test

## Project Overview

This project is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). The application includes a user registration and login system with support for profile pictures, stored in MongoDB as a URL. It is styled using Chakra UI with both light and dark mode options.

### Deployment Links

- **Frontend**: [endearing-donut-f2abcb.netlify.app](https://endearing-donut-f2abcb.netlify.app)
- **Backend**: [equip9-be.onrender.com](https://equip9-be.onrender.com)

### Features

- **User Registration**: Users can register with the following fields:
  - First Name
  - Last Name
  - Mobile Number (10 digits)
  - Password
  - Profile Picture (stored as a URL in MongoDB)

- **User Login**: 
  - Users can log in using their mobile number and password.
  - On successful login, users are redirected to a personalized landing page with a greeting message based on the time of day.
  - The landing page displays the user's image, name, and mobile number.

- **Responsive Design**: The application is fully responsive, ensuring a seamless experience across different devices.

- **Dark Mode and Light Mode**: The application supports both dark and light modes, enhancing the user experience.

### REST API Endpoints

The backend API supports the following operations:

1. **Create (POST)**: Creates a new user record in the database.
2. **Retrieve (GET)**: Fetches a user record from the database.
3. **Update (PUT)**: Updates an existing user record in the database.
4. **Delete (DELETE)**: Deletes a user record from the database.

### Tech Stack

- **Frontend**: React.js with Chakra UI for styling
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Netlify (Frontend), Render (Backend)
