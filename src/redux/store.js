import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import todoSlice from  '../features/todo-list/todoListReducer';

export const store = configureStore ({
    reducer: {
        auth: authReducer,
        todoList:todoSlice

    }
})

export default store;