import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../Categories/CategoriesThunks";
import { getCountry } from "../Сountry/СountryThunks";

export const initApp = createAsyncThunk("initApp", async (_, thunkAPI) => {
    try {
       await thunkAPI.dispatch(getCountry());
       await thunkAPI.dispatch(getCategories())
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

