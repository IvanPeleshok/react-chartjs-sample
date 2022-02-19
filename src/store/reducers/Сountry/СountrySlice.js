import { createSlice } from "@reduxjs/toolkit";
import { getCountry } from "./СountryThunks";

const initialState = {
    loading: false,
    error: "",
    country: [],
    selectedCountry: {}
};

export const СountrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        setCountry: (state, action) => {
            state.selectedCountry = action.payload;
        },
    },
    extraReducers: {
        [getCountry.pending.type]: (state) => {
            state.loading = true;
        },
        [getCountry.fulfilled.type]: (state, { payload }) => {
            state.loading = false;
            state.country = payload;
            state.selectedCountry = payload.find(country => country.name == "US");
        },
        [getCountry.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const countryReducer = СountrySlice.reducer;
export const { setCountry } = СountrySlice.actions;
