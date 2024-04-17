import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
            if (state.value > 5) {
                state.value = 5;}
        },
        decrement: (state) => {
            state.value -= 1;
            if (state.value < 0) {
                state.value = 0;}
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;


