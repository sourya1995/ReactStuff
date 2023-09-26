const redux = require('redux');
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {

        return {
            counter: state.counter + 1
        };
    }
    if (action.type === 'decrement') {
        return { counter: state.counter - 1 };
    }
    return state;
};
const store = redux.createStore(counterReducer); //creates a store
const counterSubscriber = () => {
    const latestState = store.getState(); //latest state snapshot
};

store.subscribe(counterSubscriber); //just point at the function
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
