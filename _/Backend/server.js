import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import the cors package
import authRoutes from './modules/auth/routes.js';
import userRoutes from './modules/users/routes.js';
import taskRoutes from './modules/tasks/routes.js';
import sequelize from './db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tasks', taskRoutes);

// Sync Database and Start Server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});