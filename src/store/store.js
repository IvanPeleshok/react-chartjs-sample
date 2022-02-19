import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countryReducer } from "./reducers/Сountry/СountrySlice";
import { categoriesReducer } from "./reducers/Categories/CategoriesSlice";
import { rangeDateReducer } from "./reducers/RangeDate/RangeDateSlice";
import { plotReducer } from "./reducers/Plot/PlotSlice";

const rootReducer = combineReducers({
    countryReducer,
    categoriesReducer,
    rangeDateReducer,
    plotReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }),
    });
};