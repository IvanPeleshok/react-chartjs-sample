import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./CategoriesThunks";

const initialState = {
    loading: false,
    error: "",
    categories: [],
};

export const CategoriesSlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: {
        [getCategories.pending.type]: (state, action) => {
            state.loading = false;
        },
        [getCategories.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        },
        [getCategories.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const categoriesReducer = CategoriesSlice.reducer;
