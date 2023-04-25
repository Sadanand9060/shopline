import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers/combineReducers"

const store = configureStore({
    reducer: rootReducers
});

export default store;
