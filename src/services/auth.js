import API from './api';

// Signup
export const signup = async (email, password) => {
  const response = await API.post('/auth/signup', { email, password });
  return response.data;
};

// Login
export const login = async (email, password) => {
  const response = await API.post('/auth/login', { email, password });
  return response.data;
};

// Get User Profile
export const getUserProfile = async () => {
  const response = await API.get('/users/profile');
  return response.data;
};