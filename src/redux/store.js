import { configureStore } from "@reduxjs/toolkit";
import todoSlice from  './todoListReducer'

export const store = configureStore ({
    reducer: {
        todoList:todoSlice

    }
})