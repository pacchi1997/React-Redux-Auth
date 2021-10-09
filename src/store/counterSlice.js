import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_COUNTER_STATE = {
    counter:0, 
    showCounter: true
}

const counterSlice = createSlice({
    name : 'counter',
    initialState : DEFAULT_COUNTER_STATE,
    reducers : {
        increment(state) {
            state.counter++;
        },
        decriment(state) {
            state.counter--;
        },
        increase(state,action) {
            state.counter = state.counter + action.payload.ten;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
        reset(state){
            state.counter = 0;
        }

    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;