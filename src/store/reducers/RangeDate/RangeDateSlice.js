import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: "",
    selectedRange: [new Date((new Date().getTime() - 60*60*24*29*1000)), new Date()],
};

export const RangeDateSlice = createSlice({
    name: "rangeDate",
    initialState,
    reducers: {
        setRangeDate: (state, action) => {
            state.selectedRange = action.payload;
        }
    }
});

export const rangeDateReducer = RangeDateSlice.reducer;
export const { setRangeDate } = RangeDateSlice.actions;