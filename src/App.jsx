import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import TodoList from './features/todo-list/TodoList';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col w-screen">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/todo-list" element={<TodoList />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
