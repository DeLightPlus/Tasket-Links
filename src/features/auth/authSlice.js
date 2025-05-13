import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: !!localStorage.getItem('authToken'),
  token: localStorage.getItem('authToken') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const token = action.payload;
      state.isAuthenticated = true;
      state.token = token;
      localStorage.setItem('authToken', token); // Save token to localStorage
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem('authToken'); // Remove token from localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;