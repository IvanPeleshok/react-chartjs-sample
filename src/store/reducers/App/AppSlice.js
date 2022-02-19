import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: "",
};

export const AppSlice = createSlice({
    name: "app",
    initialState,
    extraReducers: {
       
    },
});

export const appReducer = AppSlice.reducer;
