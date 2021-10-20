import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        isLoading() {
            return true;
        },
        isDone() {
            return false;
        }
    }
});

// dispatch(isLoading()) => return type: loading/isLoading
export const { isLoading, isDone } = loadingSlice.actions;

export default loadingSlice.reducer;