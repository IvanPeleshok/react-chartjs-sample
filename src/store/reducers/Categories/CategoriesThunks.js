import { createAsyncThunk } from "@reduxjs/toolkit";
import { rootAPI } from "../../../api/RootAPI";

export const getCategories = createAsyncThunk("getCategories", async (_, thunkAPI) => {
    try {
        const response = await rootAPI.getCategories();
        return await response.data.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

