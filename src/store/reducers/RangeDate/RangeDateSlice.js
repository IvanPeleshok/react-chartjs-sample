import { createSlice } from "@reduxjs/toolkit";
import { thirtyDaysAgo } from "../../../utils/thirtyDaysAgo";

const initialState = {
    loading: false,
    error: "",
    selectedRange: [thirtyDaysAgo(), new Date()],
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