# TaskManager

TaskManager is a MERN stack project designed to help users manage tasks effectively. It features user authentication using Google OAuth, a responsive design, and includes integration with the Cashfree payment gateway.

---

## Features
- User Authentication (Google OAuth)
- Mobile-friendly responsive design
- Dynamic task management
- Pricing and subscription plans with Cashfree integration
- Smooth navigation with React Router
- Deployment-ready for platforms like Railway or Render

---

## Technologies Used
- **Frontend:** React, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB 
- **OAuth:** Google OAuth API
- **Deployment Platforms:** Vercel/Railway / Render

---

## Getting Started

### Prerequisites
- Node.js (>=16.0.0)
- npm (Node Package Manager)
- MongoDB Atlas account
- Cashfree account for payment integration
- Railway/Render account for deployment

---
## Start the Backend Server
## Install dependencies
-   **npm install 
## Start the server
-  **npm start//node.server.js
## The backend server will start at http://localhost:5000



## Start the Front-End 
## Install dependencies
-   **npm install 
## Start the server
-  **npm start
## The frontend will open automatically in your default browser at http://localhost:3000

## Access the Application

-  **The frontend will communicate with the backend to fetch or post data.
-  **Ensure the backend is running before using features that rely on server-side functionality.

## Challenges Faced
- ### Google OAuth Integration:
- ### Implementing secure and reliable Google OAuth authentication was challenging, especially handling token validation and user session management. Debugging callback errors took considerable time.

- ## Responsive Design:
- ### Ensuring the application is fully responsive across various screen sizes required multiple iterations of CSS tweaks and media queries.

- ## Deployment Issues:
- ### Configuring the backend and database to work seamlessly on platforms like Railway or Render required overcoming issues with environment variables, CORS policies, and server crashes during deployment.

- ## Database Connection:
Handling MongoDB connections, especially managing timeouts and retries for better reliability, posed initial challenges during production setup.

- ## State Management:
Managing complex application states for user sessions, task updates, and error handling required careful planning to avoid race conditions and ensure smooth UI updates.

- ## Error Handling:
 Implementing robust error handling for both frontend and backend systems was essential but complex, particularly for network and API call failures.
- ## Performance Optimization:
Ensuring the application loads quickly with minimal API response times while managing multiple components and dynamic data was a significant challenge.

- # Final Conclusion
- The TaskManager project was a rewarding experience that brought together various technologies in the MERN stack to deliver a functional and user-friendly task management system. Despite the challenges faced during development, such as Google OAuth integration, payment gateway setup, and deployment issues, these hurdles provided valuable learning opportunities and enhanced the overall quality of the application.

- By leveraging modern frameworks like React, Express.js, and MongoDB, along with third-party integrations like Google OAuth , this project showcases the power of combining multiple technologies to build scalable and responsive applications.
