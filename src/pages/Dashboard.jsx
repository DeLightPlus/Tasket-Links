import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const userToken = useSelector((state) => state.auth.token);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard</h1>
        <p className="text-lg text-gray-600 mb-6">
          Manage your tasks, track your progress, and stay organized.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/todo-list')}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            View Tasks
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Back to Home
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Your token: <span className="font-mono text-xs">{userToken}</span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;