import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };
createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) { //we can mutate the state
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }

});

export const counterActions = counterSlice.actions;

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});
export default store;