# ToDo App Documentation

## Overview
I created a ToDo App with a responsive and visually appealing UI. The app uses modern technologies for both the client and server sides, ensuring seamless CRUD operations.

### Features
- Add, edit, and delete tasks.
- Persistent data storage using MongoDB.
- Responsive design using Bootstrap.
- Interactive UI with real-time updates.
- API integration using Axios.

---

## Technologies Used

### Frontend (Client Side)
- **React**: For building the user interface.
- **Bootstrap**: For responsive and modern design.
- **Axios**: For making HTTP requests to the server.

### Backend (Server Side)
- **Node.js**: For server-side JavaScript runtime.
- **Express.js**: For creating RESTful APIs.

### Database
- **MongoDB**: For storing tasks and managing data.

---

## Folder Structure

```
project-folder/
|-- client/
|   |-- public/
|   |-- src/
|       |-- components/
|       |   |-- ToDoHome.js
|       |-- App.js
|       |-- index.js
|-- server/
|   |-- models/
|   |   |-- todo.js
|   |-- routes/
|   |   |-- todoRoutes.js
|   |-- server.js
|-- README.md
```

---

## Features Implementation

### Frontend
- **UI Components**:
  - A task list showing title and description.
  - Input fields for adding and editing tasks.
  - Buttons for edit, delete, and confirm actions.
- **CRUD Operations**:
  - `POST` request to add a task.
  - `GET` request to fetch tasks.
  - `PUT` request to update a task.
  - `DELETE` request to remove a task.

### Backend
- **API Endpoints**:
  - `POST /todo/post`: Add a task.
  - `GET /todo/get`: Fetch tasks.
  - `PUT /todo/update/:id`: Update a task.
  - `DELETE /todo/delete/:id`: Delete a task.
- **MongoDB Integration**:
  - Schema for tasks with fields: `title`, `description`, and `_id`.

---

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB
- npm/yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the server folder and install dependencies:
   ```bash
   cd server
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
4. Navigate to the client folder and install dependencies:
   ```bash
   cd client
   npm install
   ```
5. Start the React application:
   ```bash
   npm start
   ```

---

## Screenshots
- **Task List**: Displays all tasks with options to edit or delete.
- **Responsive Design**: Adapts seamlessly to different screen sizes.

---

## Future Enhancements
- Add authentication for user accounts.
- Implement search and filter functionality.
- Enhance UI with animations and transitions.

---

## Contact
Feel free to connect with me for questions or feedback:

- **Name**: R. Jeeva
- **Email**: jeevaja0912@gmail.com
- **LinkedIn**: [jeevar151118](https://linkedin.com/in/jeevar151118)
- **GitHub**: [jeeva1511](https://github.com/jeeva1511)
