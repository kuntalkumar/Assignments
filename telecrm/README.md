# To-Do App

## Overview

This To-Do App is a full-stack application designed to help users manage their tasks efficiently. It provides a complete end-to-end solution for task management with a frontend built in React and Bootstrap, and a backend utilizing Node.js, Express, and MongoDB.

## Features

- **Add and Delete Tasks**: Users can create, update, and remove tasks.
- **Task Status**: Mark tasks as completed or pending.
- **Responsive Design**: Fully responsive design using Bootstrap.
- **Real-time Updates**: Real-time changes reflected with backend integration.

## Technologies Used

- **Frontend**:
  - React.js
  - Bootstrap
  - Axios (for HTTP requests)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB

## Deployment Links

- **Frontend Before Adding Backend**: [Frontend Deployment Link](https://66e12f7a478f389024c187d9--splendorous-dusk-5199b1.netlify.app/)
- **Frontend After Adding Backend**: [Frontend Deployment Link](https://66e147091b3facaec1b9214a--fascinating-granita-58abbd.netlify.app/)
- **Backend**: [Backend Deployment Link](https://telecrmbe.onrender.com/task)

## API Endpoints

- **POST /addtask**: Create a new task.
  - **Request body**: `{ "task": "string", "status": "string" }`
  - **Response**: `{ "message": "Task created successfully", "newTask": { "task": "string", "status": "string", "_id": "string" } }`

- **PUT /edit/:id**: Update an existing task by ID.
  - **Request body**: `{ "task": "string", "status": "string" }`
  - **Response**: `{ "message": "Task updated successfully", "updatedTask": { "task": "string", "status": "string", "_id": "string" } }`

- **GET /task**: Retrieve all tasks.
  - **Response**: `[ { "task": "string", "status": "string", "_id": "string" }, ... ]`

- **DELETE /delete/:id**: Delete a task by ID.
  - **Response**: `{ "message": "Task deleted successfully", "deletedTask": { "task": "string", "status": "string", "_id": "string" } }`

## Screenshots

### Create To-Do

![Create To-Do](/telecrm/fe/src/components/assets/Screenshot%202024-09-11%20124823.png)
*Description of the create to-do screen.*

### To-Do List

![To-Do List](/telecrm/fe/src/components/assets/Screenshot%202024-09-11%20124816.png)
*Description of the to-do list screen.*

## Contributing

Feel free to submit issues, fork the repository, and create pull requests. For significant changes, please open an issue first to discuss what you would like to change.

## Acknowledgments

- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A framework for developing responsive and mobile-first websites.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for modern applications.
