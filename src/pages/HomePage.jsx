import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Tasket Links</h1>
        <p className="text-lg text-gray-600 mb-6">
          Tasket Links is your ultimate task management solution. Organize your tasks, track your progress, and stay productive.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/login')}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;