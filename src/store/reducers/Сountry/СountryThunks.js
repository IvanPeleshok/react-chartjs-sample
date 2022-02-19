import { createAsyncThunk } from "@reduxjs/toolkit";
import { rootAPI } from "../../../api/RootAPI";

export const getCountry = createAsyncThunk("getCountry", async (_, thunkAPI) => {
    try {
       const response = await rootAPI.getСountry();
       return await response.data.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

