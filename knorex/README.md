# User Management System

## Overview

The User Management System is a full-stack application that includes:

- **Backend API**: Built with Node.js and Express.
- **Frontend Application**: Developed with React.js,Chakra UI.
- **Database**: MongoDB for storing user data.

## Deployed Link
 - **FrontEnd** - [https://66d04487751318d89b6353c4--spectacular-alpaca-3af40c.netlify.app/]
 - **BackEnd**  - [https://knorex-be.onrender.com/]

## Project Structure

- **Backend**: Contains the Node.js server and Express routes for handling API requests.
- **Frontend**: Contains the React.js application that provides the user interface.
- **Database**: MongoDB is used to store and manage user data.

## API Endpoints

### **POST** `/`

- **Request Body**:
    ```json
    {
      "firstName": "String",
      "lastName": "String",
      "email": "String",
      "password": "String"
    }
    ```
- **Response**:
    ```json
    {
      "message": "User registered successfully",
      "user": {
        "_id": "String",
        "firstName": "String",
        "lastName": "String",
        "email": "String",
        "password": "String"
      }
    }
    ```

### **GET** `/alluser`

 Retrieve a list of all users.
- **Response**:
    ```json
    [
      {
        "_id": "String",
        "firstName": "String",
        "lastName": "String",
        "email": "String",
        "password": "String"
      }
    
    ]
    ```


### **DELETE** `/delete/:id`

- **Description**: Delete a user by ID.
- **Response**:
    ```json
    {
      "message": "User deleted successfully"
    }
    ```

## Database Schema

The MongoDB database schema for the `User` collection:

- **User**
  - `firstName`: `String`
  - `lastName`: `String`
  - `email`: `String` (unique)
  - `password`: `String`
### **PUT** `/edit/:id`  ( If Needed in future)

- **Description**: Update a user by ID.
- **Request Body**:
    ```json
    {
      "firstName": "String",
      "lastName": "String",
      "password": "String"
    }
    ```
- **Response**:
    ```json
    {
      "message": "User updated successfully",
      "user": {
        "_id": "String",
        "firstName": "String",
        "lastName": "String",
        "email": "String",
        "password": "String"
      }
    }
    ```
## Frontend Components

- **SignUpForm**: A form for user registration, including validation and error handling.
- **DeleteConfirmation**: A confirmation modal for deleting users.
- **User List Table**: Displays users in a table with options to select, delete, and export user data.


Feel free to contribute or provide feedback to enhance the functionality and usability of the User Management System.
  
