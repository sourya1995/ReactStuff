import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterReducer from './counter';
import authReducer from './auth';
import { authActions } from "./auth";
import { counterActions } from "./counter";





const store = configureStore({
    reducer: {
        counter: counterReducer, auth: authReducer
    }
});
export default store;