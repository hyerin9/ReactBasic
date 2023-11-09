import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../modules/counterSilce";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});