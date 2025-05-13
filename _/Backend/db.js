import { Sequelize } from 'sequelize';

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Path to SQLite database file
});

export default sequelize;