# Tasket-Links

Tasket-Links powers the **Saved by Tasket** feature — a simple way to bookmark and organize links across your daily life. Seamlessly integrated with Tasket's ecosystem of to-dos, shopping lists, and recipes.

This project is built to provide a robust solution for organizing daily tasks, shopping lists, recipes, meal plans, and now bookmarks, all in one unified platform.

---

## Features

- **To-Do List**: Manage your tasks, set deadlines, and track progress.
- **Shopping List**: Create and organize grocery lists or any other shopping needs.
- **Recipe App**: Save and organize recipes, automatically generate shopping lists based on ingredients.
- **Meal Planner**: Plan meals and integrate them with shopping lists and recipes.
- **Expense Tracker**: Track grocery and other purchases to manage your budget.
- **Saved by Tasket**: The bookmarking feature (Tasket-Links) allows you to save, organize, and revisit your favorite links — whether they’re recipes, articles, shopping products, or useful guides.

---

## Technologies Used

### Frontend:
- **React.js**: For building dynamic and responsive user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Redux Toolkit**: Simplified state management to handle data and UI across the app.

### Backend (Development to Production):
- **JSON Server**: Mock REST API for development.
- **SQLite**: Lightweight database for transition and local development.
- **PostgreSQL**: Production-ready relational database for scalable, persistent data.

### Additional Libraries:
- **Axios**: For making HTTP requests to the backend.
- **React Router**: For routing and navigation across the app.

---

## Installation

### Prerequisites
- **Node.js** (v16 or later)
- **npm** (v7 or later)

### Steps to get started:
1. Clone the repository:
   ```bash
     git clone https://github.com/DeLightPlus/Tasket-Links.git
     cd Tasket-Links
    ```
   
Install dependencies:
  ```bash
    npm install
  ```

Start the JSON server (for local mock data):
  ```bash
    npm run json-server
  ```

Start the development server:
```bash
  npm start
```
Your app will now be running on http://localhost:3000.

---

### Branching Strategy
This repository follows a feature-based branching model:
- main: The stable production-ready version.
- dev: The integration branch for merging feature branches.
- vanilla: A clean version of the app without any features (useful for demo purposes).
- Feature branches (off dev): Individual branches for each feature like feature/todo-list, feature/shopping-list, feature/recipes, etc.

---

### Folder Structure
```
  /src
  /features
    /todo        --> To-do list feature
    /shopping    --> Shopping list feature
    /recipes     --> Recipes and meal planner feature
    /bookmarks   --> Tasket-Links (bookmarking) feature
    /planner     --> Meal planner feature
    /expenses    --> Expense tracker feature
  /components     --> Reusable UI components
  /app            --> Redux store and global layout
  /services       --> API clients and external services
  /utils          --> Helper functions (e.g., date formatting)
  /assets         --> Images, icons, and other media
```

Contributing
We welcome contributions! Please follow these steps to contribute:
- Fork the repo and clone it to your local machine.
- Create a new branch for your feature or bug fix.
- Make your changes, commit, and push.
- Open a Pull Request with a description of what you’ve done.
