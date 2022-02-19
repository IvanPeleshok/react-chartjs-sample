import { createSlice } from "@reduxjs/toolkit";
import { getPlotData } from "./PlotThunks";

const initialState = {
    loading: false,
    error: "",
    plot: {},
};

export const PlotSlice = createSlice({
    name: "plot",
    initialState,
    extraReducers: {
        [getPlotData.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.plot = action.payload;
        },
        [getPlotData.pending.type]: (state, action) => {
            state.loading = true;
        },
        [getPlotData.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const plotReducer = PlotSlice.reducer;
