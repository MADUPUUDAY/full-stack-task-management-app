 # TaskManager Backend
 The TaskManager Backend is built using Node.js, Express.js, and MongoDB. It provides APIs for user authentication, task management, and payment processing. It also integrates Google OAuth for secure login and the Cashfree payment gateway for handling subscription plans.
 ## Features
 - User Authentication: Google OAuth 2.0 integration for secure sign-in.
- Task Management: CRUD operations for managing tasks.
- Error Handling: Robust error handling for smooth operations.
# Technologies Used
 - Framework: Node.js with Express.js
- Database: MongoDB (Atlas or Local)
 -Authentication: Google OAuth API
- Environment Management: dotenv
- Other Libraries: Mongoose, Body-parser, CORS
# Installation and Setup
- ### Prerequisites
- Node.js (>=16.0.0)
- MongoDB Atlas account or a locally running MongoDB instance
- Google Cloud Platform project with OAuth credentials
### Clone the repository:
   - git clone https://github.com/your-username/TaskManager-Backend.git
   - cd TaskManager-Backend
 ### Install dependencies:
- ##### npm install
### Configure environment variables:
- Create a .env file in the root directory and add the following variables
## Start the development server:
- #### npm run dev
## API Endpoints
- ### Authentication
  ### POST /auth/google
-  Handles Google OAuth login.
### POST /auth/logout
- Logs out the current user.
- Task Management
### GET /tasks
Fetches all tasks for the authenticated user.
### POST /tasks
Creates a new task.
### PUT /tasks/:id
Updates an existing task by ID.
### DELETE /tasks/:id
Deletes a task by ID.
# Conclusion
- #### The TaskManager Backend is a robust and scalable backend solution, designed to support a full-fledged task management system. With its integration of modern tools like Google OAuth and Cashfree, it ensures secure authentication and efficient payment handling. The backend is fully production-ready and serves as a solid foundation for further enhancements.

