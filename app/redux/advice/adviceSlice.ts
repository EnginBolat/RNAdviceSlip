import { createSlice } from "@reduxjs/toolkit";
import { randomAdvice } from "../actions";
import { Slip } from "../../models";

export interface AdviceState {
    slip?: Slip
    loading: boolean,
    error: string;
}

const initialState: AdviceState = {
    slip: undefined,
    loading: true,
    error: '',
}

export const adviceSlice = createSlice({
    name: 'advice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(randomAdvice.pending, (state, action) => {
                return { ...state, loading: true }
            })
            .addCase(randomAdvice.fulfilled, (state, action) => {
                return { ...state, loading: false, slip: action.payload }
            })
            .addCase(randomAdvice.rejected, (state, action) => {
                return { ...state, loading: false, error: `${action.error.message}` }
            })
    },
})

export default adviceSlice.reducer;