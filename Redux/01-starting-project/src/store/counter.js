import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
createSlice({
    name: "counter",
    initialCounterState,
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
export default counterSlice.reducer;